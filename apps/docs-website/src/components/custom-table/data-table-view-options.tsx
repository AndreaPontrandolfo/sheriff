'use client';

import { Check, Settings2 } from 'lucide-react';
import * as React from 'react';
import type { Column, Table } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  const [isOpen, setIsOpen] = React.useState(false);

  const ToggableColumns = table
    .getAllColumns()
    .filter(
      (column) =>
        typeof column.accessorFn !== 'undefined' && column.getCanHide(),
    );

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
        >
          <Settings2 className="mr-2 h-4 w-4" />
          View
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40 p-0" align="end">
        <Command>
          <CommandList>
            <CommandGroup heading="Toggle Columns">
              {ToggableColumns.map((column: Column<TData>) => {
                return (
                  <CommandItem
                    key={column.id}
                    className="cursor-pointer"
                    onSelect={() => {
                      column.toggleVisibility(!column.getIsVisible());
                      // Keep popover open for multiple selections or setIsOpen(false) to close
                    }}
                  >
                    <div
                      className={cn(
                        'border-primary mr-2 flex h-4 w-4 items-center justify-center rounded-sm border',
                        column.getIsVisible()
                          ? 'bg-primary text-primary-foreground'
                          : 'opacity-50 [&_svg]:invisible',
                      )}
                    >
                      <Check className={cn('h-4 w-4')} />
                    </div>
                    <span className="capitalize">{column.id}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
