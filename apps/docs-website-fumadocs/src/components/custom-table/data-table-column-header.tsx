'use client';

import {
  ArrowDown,
  ArrowUp,
  ChevronsUpDown,
  EyeOff,
  Check,
} from 'lucide-react';
import type { Column } from '@tanstack/react-table';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  const [isOpen, setIsOpen] = React.useState(false);

  if (!column.getCanSort() && !column.getCanHide()) {
    return <div className={cn(className)}>{title}</div>;
  }

  const sortActions = [
    {
      label: 'Asc',
      value: 'asc',
      icon: ArrowUp,
      action: () => column.toggleSorting(false),
    },
    {
      label: 'Desc',
      value: 'desc',
      icon: ArrowDown,
      action: () => column.toggleSorting(true),
    },
  ];

  const currentSort = column.getIsSorted();

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="data-[state=open]:bg-accent -ml-3 h-8"
          >
            <span>{title}</span>
            {currentSort === 'desc' ? (
              <ArrowDown className="ml-2 h-4 w-4" />
            ) : currentSort === 'asc' ? (
              <ArrowUp className="ml-2 h-4 w-4" />
            ) : (
              <ChevronsUpDown className="ml-2 h-4 w-4" />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-40 p-0" align="start">
          <Command>
            <CommandList>
              {column.getCanSort() && (
                <CommandGroup heading="Sort">
                  {sortActions.map((item) => (
                    <CommandItem
                      key={item.value}
                      onSelect={() => {
                        item.action();
                        setIsOpen(false);
                      }}
                    >
                      <item.icon
                        className={cn(
                          'text-muted-foreground/70 mr-2 h-3.5 w-3.5',
                          currentSort === item.value &&
                            'text-foreground opacity-100',
                        )}
                      />
                      {item.label}
                      {currentSort === item.value && (
                        <Check className="ml-auto h-4 w-4" />
                      )}
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
              {column.getCanSort() && column.getCanHide() && (
                <hr className="my-1" />
              )}{' '}
              {/* Simple separator */}
              {column.getCanHide() && (
                <CommandGroup heading="Visibility">
                  <CommandItem
                    onSelect={() => {
                      column.toggleVisibility(false);
                      setIsOpen(false);
                    }}
                  >
                    <EyeOff className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
                    Hide column
                  </CommandItem>
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
