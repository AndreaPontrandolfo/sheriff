import React, { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ruleset, pluginsNames } from "@sheriff/utils";
import type { Entry } from "@sheriff/types";
import Select from "react-select";
import styles from "./RulesTable.module.css";

const columnHelper = createColumnHelper<Entry>();

const columns = [
  columnHelper.accessor("ruleName", {
    header: () => "Rule",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("parentPluginName", {
    header: () => "Plugin",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("severity", {
    header: () => "Severity",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("ruleOptions", {
    header: () => "Options",
    cell: (info) => (info.getValue() ? JSON.stringify(info.getValue()) : ""),
  }),
  columnHelper.accessor("docs", {
    header: "Docs",
    cell: (info) => (
      <a href={info.getValue().url}>
        {info.getValue().description || info.getValue().url}
      </a>
    ),
  }),
  columnHelper.accessor("affectedFiles", {
    header: "Affected Files",
    cell: (info) => info.getValue(),
  }),
];

export const RulesTable = (): JSX.Element => {
  const [data, setData] = useState(() => [...ruleset]);
  const [filter, setFilter] = useState<string[] | string | null>(null);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filter,
    },
    onGlobalFilterChange: setFilter,
  });

  return (
    <div>
      <div className={styles.filtersContainer}>
        <input
          className={styles.filterInput}
          type="text"
          placeholder="Filter by searching any therm..."
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
        <Select
          isSearchable
          placeholder="Select a plugin from the list..."
          options={pluginsNames.map((pluginName) => ({
            value: pluginName,
            label: pluginName,
          }))}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              minWidth: "300px",
            }),
          }}
          onChange={(inputText) => {
            setFilter(inputText?.value ?? "");
          }}
        />
      </div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={styles.th}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={styles.tr}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={styles.td}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
