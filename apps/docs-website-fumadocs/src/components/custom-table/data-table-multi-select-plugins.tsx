import { Check, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface DataTableMultiSelectPluginsProps {
  pluginsNames: string[];
  pluginColumnFilter: string | undefined;
  setPluginColumnFilter: (value: string | undefined) => void;
}

export const DataTableMultiSelectPlugins = ({
  pluginsNames,
  pluginColumnFilter,
  setPluginColumnFilter,
}: DataTableMultiSelectPluginsProps) => {
  const [isPluginsPopoverOpen, setIsPluginsPopoverOpen] = React.useState(false);

  const handlePluginSelect = (currentValue: string) => {
    const newValue =
      currentValue === pluginColumnFilter ? undefined : currentValue;
    setPluginColumnFilter(newValue);
    // table.getColumn("parentPluginName")?.setFilterValue(newValue); // This will be handled by parent via setPluginColumnFilter prop
    setIsPluginsPopoverOpen(false);
  };

  return (
    <Popover open={isPluginsPopoverOpen} onOpenChange={setIsPluginsPopoverOpen}>
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
  );
};
