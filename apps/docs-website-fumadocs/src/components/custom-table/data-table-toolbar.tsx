'use client';

import { Check, ChevronsUpDown, XIcon } from 'lucide-react';
import * as React from 'react';
import type { Table } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { DataTableViewOptions } from './data-table-view-options';

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
  const [isPluginsPopoverOpen, setIsPluginsPopoverOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(globalFilter ?? '');

  // Combined filter check: global filter or plugin filter
  const isFiltered = globalFilter || pluginColumnFilter;

  React.useEffect(() => {
    setInputValue(globalFilter ?? '');
  }, [globalFilter]);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setGlobalFilter(inputValue);
    }, 300); // 300ms debounce delay
    return () => clearTimeout(timeoutId);
  }, [inputValue, setGlobalFilter]);

  const handlePluginSelect = (currentValue: string) => {
    const newValue =
      currentValue === pluginColumnFilter ? undefined : currentValue;
    setPluginColumnFilter(newValue);
    // table.getColumn("parentPluginName")?.setFilterValue(newValue); // This will be handled by parent via setPluginColumnFilter prop
    setIsPluginsPopoverOpen(false);
  };

  const resetFilters = () => {
    setGlobalFilter('');
    setPluginColumnFilter(undefined);
    setInputValue(''); // Reset input value as well
    // table.resetGlobalFilter(); // Handled by parent
    // table.getColumn("parentPluginName")?.setFilterValue(undefined); // Handled by parent
  };

  return (
    <div className="flex flex-1 items-center gap-4">
      <Input
        placeholder="Filter rules, docs..."
        value={inputValue} // Use local state for input value
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(event.target.value)
        } // Update local state
        className="h-8 w-[150px] lg:w-[250px]"
      />
      <Popover
        open={isPluginsPopoverOpen}
        onOpenChange={setIsPluginsPopoverOpen}
      >
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={isPluginsPopoverOpen}
            className="text-muted-foreground hover:text-foreground h-8 min-w-[200px] justify-between"
          >
            {pluginColumnFilter
              ? pluginsNames.find(
                  (pluginName) => pluginName === pluginColumnFilter,
                )
              : 'Filter by plugin...'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search plugin..." />
            <CommandList>
              <CommandEmpty>No plugin found.</CommandEmpty>
              <CommandGroup>
                {pluginsNames.map((pluginName) => {
                  return (
                    <CommandItem
                      key={pluginName}
                      value={pluginName}
                      onSelect={handlePluginSelect}
                    >
                      <Check
                        className={cn(
                          'mr-2 h-4 w-4',
                          pluginColumnFilter === pluginName
                            ? 'opacity-100'
                            : 'opacity-0',
                        )}
                      />
                      {pluginName}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
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
