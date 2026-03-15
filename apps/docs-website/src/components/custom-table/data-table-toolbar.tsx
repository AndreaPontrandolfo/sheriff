import { isEmpty } from 'lodash-es';
import { Filter, XIcon } from 'lucide-react';
import type { ChangeEvent } from 'react';
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
   * Filter input value (displayed in search box) and setter.
   */
  filterInputValue: string;
  setFilterInputValue: (value: string) => void;
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
  filterInputValue,
  setFilterInputValue,
  globalFilter,
  setGlobalFilter,
  selectedPlugins,
  setSelectedPlugins,
}: DataTableToolbarProps<TData>) {
  // Combined filter check: global filter or plugin filter
  const isFiltered =
    globalFilter || (selectedPlugins && !isEmpty(selectedPlugins));

  const resetFilters = () => {
    setGlobalFilter('');
    setFilterInputValue('');
    setSelectedPlugins([]);
  };

  return (
    <div className="flex flex-1 items-start gap-4">
      <div className="flex h-10 items-center">
        <Filter size={24} />
      </div>
      <Input
        placeholder="Filter rules, docs..."
        value={filterInputValue}
        className="min-h-10 w-[150px] text-base md:text-base lg:w-[250px]"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setFilterInputValue(event.target.value);
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
