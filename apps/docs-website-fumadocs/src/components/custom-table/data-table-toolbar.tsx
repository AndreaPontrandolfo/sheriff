'use client';

import { XIcon } from 'lucide-react';
import * as React from 'react';
import type { Table } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { debounce } from 'lodash-es';
import { Input } from '@/components/ui/input';
import { LuFilter } from 'react-icons/lu';
import { DataTableMultiSelectPlugins } from './data-table-multi-select-plugins';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  /**
   * For the plugin filter combobox.
   */
  pluginsNames: string[];
  // Global filter state and setter if managed outside DataTable component itself
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
  // Column filter state for parentPluginName specifically for the combobox
  pluginColumnFilter: string | undefined;
  setPluginColumnFilter: (value: string | undefined) => void;
}

export function DataTableToolbar<TData>({
  table,
  pluginsNames,
  globalFilter,
  setGlobalFilter,
  pluginColumnFilter,
  setPluginColumnFilter,
}: DataTableToolbarProps<TData>) {
  const [inputValue, setInputValue] = React.useState(globalFilter ?? '');

  // Combined filter check: global filter or plugin filter
  const isFiltered = globalFilter || pluginColumnFilter;

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
    // Cleanup on unmount or if debouncedSetGlobalFilter changes
    return () => {
      debouncedSetGlobalFilter.cancel();
    };
  }, [inputValue, debouncedSetGlobalFilter]);

  const resetFilters = () => {
    setGlobalFilter('');
    setPluginColumnFilter(undefined);
    setInputValue(''); // Reset input value as well
    // table.resetGlobalFilter(); // Handled by parent
    // table.getColumn("parentPluginName")?.setFilterValue(undefined); // Handled by parent
  };

  return (
    <div className="flex flex-1 items-center gap-4">
      <LuFilter size={20} />
      <Input
        placeholder="Filter rules, docs..."
        value={inputValue} // Use local state for input value
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(event.target.value)
        } // Update local state
        className="h-8 w-[150px] lg:w-[250px]"
      />
      <DataTableMultiSelectPlugins
        pluginsNames={pluginsNames}
        pluginColumnFilter={pluginColumnFilter}
        setPluginColumnFilter={setPluginColumnFilter}
      />
      {isFiltered ? (
        <Button
          variant="ghost"
          onClick={resetFilters}
          className="h-8 px-2 lg:px-3"
        >
          Reset
          <XIcon className="ml-2 h-4 w-4" />
        </Button>
      ) : null}
    </div>
  );
}
