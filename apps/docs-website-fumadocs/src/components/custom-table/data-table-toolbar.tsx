'use client';

import { debounce, isEmpty } from 'lodash-es';
import { XIcon } from 'lucide-react';
import * as React from 'react';
import { LuFilter } from 'react-icons/lu';
import type { Table } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DataTableMultiSelectPlugins } from './data-table-multi-select-plugins';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  /**
   * For the plugin filter combobox.
   */
  pluginsNames: string[];
  /**
   * Global filter state and setter if managed outside DataTable component itself.
   */
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
  /**
   * Column filter state for parentPluginName specifically for the combobox.
   */
  selectedPlugins: string[];
  setSelectedPlugins: (values: string[]) => void;
}

export function DataTableToolbar<TData>({
  pluginsNames,
  globalFilter,
  setGlobalFilter,
  selectedPlugins,
  setSelectedPlugins,
}: DataTableToolbarProps<TData>) {
  const [inputValue, setInputValue] = React.useState(globalFilter ?? '');

  // Combined filter check: global filter or plugin filter
  const isFiltered =
    globalFilter || (selectedPlugins && !isEmpty(selectedPlugins));

  React.useEffect(() => {
    setInputValue(globalFilter ?? '');
  }, [globalFilter]);

  // Debounced version of setGlobalFilter
  const debouncedSetGlobalFilter = React.useMemo(
    () => debounce(setGlobalFilter, 300),
    [setGlobalFilter],
  );

  React.useEffect(() => {
    debouncedSetGlobalFilter(inputValue);

    /**
     * Cleanup on unmount or if debouncedSetGlobalFilter changes.
     */
    return () => {
      debouncedSetGlobalFilter.cancel();
    };
  }, [inputValue, debouncedSetGlobalFilter]);

  const resetFilters = () => {
    setGlobalFilter('');
    setSelectedPlugins([]);
    setInputValue(''); // Reset input value as well
    // table.resetGlobalFilter(); // Handled by parent
    // table.getColumn("parentPluginName")?.setFilterValue(undefined); // Handled by parent
  };

  return (
    <div className="flex flex-1 items-start gap-4">
      <div className="flex h-10 items-center">
        <LuFilter size={24} />
      </div>
      <Input
        placeholder="Filter rules, docs..."
        value={inputValue}
        className="min-h-10 w-[150px] text-base md:text-base lg:w-[250px]"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(event.target.value);
        }}
      />
      <DataTableMultiSelectPlugins
        pluginsNames={pluginsNames}
        selectedPlugins={selectedPlugins}
        setSelectedPlugins={setSelectedPlugins}
      />
      {isFiltered ? (
        <Button
          variant="ghost"
          className="h-8 cursor-pointer px-2 lg:px-3"
          onClick={resetFilters}
        >
          Reset
          <XIcon className="ml-2 h-4 w-4" />
        </Button>
      ) : null}
    </div>
  );
}
