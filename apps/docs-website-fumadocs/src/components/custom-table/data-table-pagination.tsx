'use client';

import {
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUpDown,
} from 'lucide-react';
import * as React from 'react';
import type { Table } from '@tanstack/react-table';
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

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const [isPageSizePopoverOpen, setIsPageSizePopoverOpen] =
    React.useState(false);
  const pageSizes = [10, 20, 30, 40, 50];

  return (
    <div className="flex items-center justify-end px-2 py-4">
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Popover
            open={isPageSizePopoverOpen}
            onOpenChange={setIsPageSizePopoverOpen}
          >
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={isPageSizePopoverOpen}
                className="text-muted-foreground hover:text-foreground h-8 w-[70px] justify-between"
              >
                {table.getState().pagination.pageSize}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[70px] p-0">
              <Command>
                <CommandList>
                  <CommandGroup>
                    {pageSizes.map((size) => {
                      return (
                        <CommandItem
                          key={size}
                          value={String(size)}
                          onSelect={() => {
                            table.setPageSize(Number(size));
                            setIsPageSizePopoverOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              table.getState().pagination.pageSize === size
                                ? 'opacity-100'
                                : 'opacity-0',
                            )}
                          />
                          {size}
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            disabled={!table.getCanPreviousPage()}
            onClick={() => {
              table.setPageIndex(0);
            }}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={!table.getCanPreviousPage()}
            onClick={() => {
              table.previousPage();
            }}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={!table.getCanNextPage()}
            onClick={() => {
              table.nextPage();
            }}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            disabled={!table.getCanNextPage()}
            onClick={() => {
              table.setPageIndex(table.getPageCount() - 1);
            }}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
