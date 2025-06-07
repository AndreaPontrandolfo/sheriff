'use client';

import * as React from 'react';
import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
  getFacetedRowModel,
  getFacetedUniqueValues,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { RuleEntry } from './columns';
import { DataTablePagination } from './data-table-pagination';
import { DataTableToolbar } from './data-table-toolbar';
import { isEmpty } from 'lodash-es';
import { QueriedRulesMetricsGroup } from '../QueriedRulesMetricsGroup';

interface DataTableProps<TData extends RuleEntry, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  /**
   * For the toolbar's plugin filter.
   */
  pluginsNames: string[];
  totalAvailableRulesAmount: number;
}

export function DataTable<TData extends RuleEntry, TValue>({
  columns,
  data,
  pluginsNames,
  totalAvailableRulesAmount,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [sorting, setSorting] = React.useState<SortingState>([
    { id: 'severity', desc: true },
  ]);
  const [globalFilter, setGlobalFilter] = React.useState<string>('');
  const [selectedPlugins, setSelectedPlugins] = React.useState<string[]>([]);

  React.useEffect(() => {
    setColumnFilters((prevFilters) => {
      const otherFilters = prevFilters.filter(
        (f) => f.id !== 'parentPluginName',
      );
      if (selectedPlugins.length > 0) {
        return [
          ...otherFilters,
          { id: 'parentPluginName', value: selectedPlugins },
        ];
      }
      return otherFilters;
    });
  }, [selectedPlugins]);

  const table = useReactTable<TData>({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      globalFilter,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <div className="space-y-6">
      <DataTableToolbar
        table={table}
        pluginsNames={pluginsNames}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        selectedPlugins={selectedPlugins}
        setSelectedPlugins={setSelectedPlugins}
      />
      <QueriedRulesMetricsGroup
        totalAvailableRulesAmount={totalAvailableRulesAmount}
        fetchedConfigRulesAmount={data.length}
        filteredRulesAmount={table.getFilteredRowModel().rows.length}
      />
      <div className="rounded-xl border">
        <Table className="mb-0 mt-0">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => {
              return (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableHeader>
          <TableBody>
            {!isEmpty(table.getRowModel().rows) ? (
              table.getRowModel().rows.map((row) => {
                return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
