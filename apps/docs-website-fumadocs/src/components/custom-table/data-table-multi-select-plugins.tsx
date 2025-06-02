import { Check, ChevronsUpDown, X } from 'lucide-react';
import * as React from 'react';
import { Badge } from '@/components/ui/badge';
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
  selectedPlugins?: string[];
  setSelectedPlugins?: (values: string[]) => void;
}

// Default no-op function for setSelectedPlugins
const noOpSetSelectedPlugins = () => {};

export const DataTableMultiSelectPlugins = ({
  pluginsNames,
  selectedPlugins = [],
  setSelectedPlugins = noOpSetSelectedPlugins,
}: DataTableMultiSelectPluginsProps) => {
  const [isPluginsPopoverOpen, setIsPluginsPopoverOpen] = React.useState(false);

  const handlePluginSelect = (currentValue: string) => {
    const newSelectedPlugins = selectedPlugins.includes(currentValue)
      ? selectedPlugins.filter((plugin) => plugin !== currentValue)
      : [...selectedPlugins, currentValue];
    setSelectedPlugins(newSelectedPlugins);
    // setIsPluginsPopoverOpen(false); // Keep popover open for multi-selection
  };

  const handleClearPlugin = (
    pluginToClear: string,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation(); // Prevent popover from closing
    const newSelectedPlugins = selectedPlugins.filter(
      (plugin) => plugin !== pluginToClear,
    );
    setSelectedPlugins(newSelectedPlugins);
  };

  const handleClearAll = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setSelectedPlugins([]);
  };

  return (
    <Popover open={isPluginsPopoverOpen} onOpenChange={setIsPluginsPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={isPluginsPopoverOpen}
          className="text-muted-foreground hover:text-foreground h-auto min-h-10 min-w-[200px] max-w-lg justify-between px-3 py-1.5 text-base"
        >
          <div className="flex flex-wrap items-center gap-1">
            {selectedPlugins.map((pluginName) => (
              <Badge
                variant="secondary"
                key={pluginName}
                className="rounded-sm px-2 font-normal"
                onClick={(e) => e.stopPropagation()} // Prevent popover from closing
              >
                {pluginName}
                <Button
                  asChild
                  variant="ghost"
                  // Rely on Button's default focus; only add layout/shape classes
                  className="ml-1 h-auto rounded-full p-0.5"
                  onClick={(event) => {
                    handleClearPlugin(pluginName, event as any);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      handleClearPlugin(pluginName, event as any);
                    }
                  }}
                  aria-label={`Remove ${pluginName}`}
                >
                  <div role="button" className="px-0!" tabIndex={0}>
                    <X className="h-3 w-3" />
                  </div>
                </Button>
              </Badge>
            ))}
            {/* Always render placeholder text. Add margin if badges are present. */}
            <span
              className={cn(
                'text-muted-foreground',
                selectedPlugins.length > 0 ? 'ml-1' : '',
              )}
            >
              Filter by plugin...
            </span>
          </div>
          <div className="flex items-center">
            {selectedPlugins.length > 0 && (
              <Button
                asChild
                variant="ghost"
                // Rely on Button's default focus; only add layout/shape classes
                className="mr-1 h-auto rounded-sm p-0.5"
                onClick={(event) => {
                  handleClearAll(event as any);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handleClearAll(event as any);
                  }
                }}
                aria-label="Clear all selected plugins"
              >
                <div role="button" tabIndex={0}>
                  <X className="h-4 w-4" />
                </div>
              </Button>
            )}
            <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
          </div>
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
                    onSelect={() => handlePluginSelect(pluginName)}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        selectedPlugins.includes(pluginName)
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
