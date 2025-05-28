'use client';

import React, { type JSX } from 'react';
import type { Entry, Severity as SheriffSeverity } from '@sherifforg/types';
import type { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge'; // Assuming you have Badge for severity
import { DataTableColumnHeader } from './data-table-column-header';
import { Button } from '@/components/ui/button';

// This type is used to define the shape of our data.
// We're using the Entry type from @sherifforg/types
export type RuleEntry = Entry;

// Define a more specific type for severity if not directly from @sherifforg/types
type Severity = SheriffSeverity | 'error' | 'warn' | 'off';

// Define the Docs type based on observed usage if not exported
interface DocsType {
  url: string;
  description?: string;
}

export const columns: ColumnDef<RuleEntry>[] = [
  {
    accessorKey: 'ruleName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rule" />
    ),
    cell: ({ row }): JSX.Element => {
      const ruleName = row.getValue('ruleName') as string | undefined;
      return <code>{ruleName ?? ''}</code>;
    },
    filterFn: 'includesString',
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: 'parentPluginName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Plugin" />
    ),
    cell: ({ row }): JSX.Element => {
      const parentPluginName = row.getValue('parentPluginName') as
        | string
        | undefined;
      return <span>{parentPluginName ?? ''}</span>;
    },
    filterFn: 'includesString',
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: 'severity',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Severity" />
    ),
    cell: ({ row }): JSX.Element | string => {
      const severityValue = row.getValue('severity') as Severity | undefined;
      let variant: 'default' | 'secondary' | 'destructive' | 'outline' =
        'outline';
      const severityText = String(severityValue ?? 'off');

      // if (typeof severityValue === 'number') {
      //   if (severityValue === 2) {
      //     variant = 'destructive';
      //   } else if (severityValue === 1) {
      //     variant = 'secondary';
      //   } else {
      //     variant = 'default'; // Assuming 0 or other numbers like "off" (mapped to 0)
      //   }
      // } else if (typeof severityValue === 'string') {
      //   const lowerSeverityText = severityValue.toLowerCase();

      //   if (lowerSeverityText === 'error') {
      //     variant = 'destructive';
      //   } else if (lowerSeverityText === 'warn') {
      //     variant = 'secondary';
      //   } else {
      //     variant = 'default'; // For "off"
      //   }
      // }

      // return <Badge variant={variant}>{severityText}</Badge>;
      return severityText;
    },
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: 'ruleOptions',
    header: 'Options',
    cell: ({ row }): JSX.Element => {
      const options = row.getValue('ruleOptions') as
        | RuleEntry['ruleOptions']
        | undefined;
      const hasOptions =
        options &&
        (Array.isArray(options)
          ? options.length > 0
          : typeof options === 'object' &&
            options !== null &&
            Object.keys(options).length > 0);

      if (!hasOptions) {
        return (
          <span className="text-muted-foreground text-xs">No options</span>
        );
      }
      try {
        return (
          <pre className="max-w-xs overflow-auto whitespace-pre-wrap break-all text-xs">
            {JSON.stringify(options, null, 2)}
          </pre>
        );
      } catch (e) {
        return (
          <span className="text-destructive text-xs">Invalid options</span>
        );
      }
    },
    enableSorting: false,
  },
  {
    accessorKey: 'docs',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Docs" />
    ),
    cell: ({ row }): JSX.Element => {
      const docInfo = row.getValue('docs') as DocsType | undefined;
      if (!docInfo?.url) {
        return <span className="text-muted-foreground text-xs">No docs</span>;
      }
      return (
        <Button variant="link" asChild className="whitespace-normal">
          <a href={docInfo.url} target="_blank" rel="noreferrer">
            {docInfo.description || docInfo.url}
          </a>
        </Button>
      );
    },
    filterFn: (row, columnId, filterValue) => {
      const docInfo = row.getValue(columnId) as DocsType | undefined;
      const searchableText =
        `${docInfo?.url ?? ''} ${docInfo?.description ?? ''}`.toLowerCase();
      return searchableText.includes(String(filterValue).toLowerCase());
    },
    enableSorting: false,
  },
  {
    accessorKey: 'affectedFiles',
    header: 'Files',
    cell: ({ row }): JSX.Element => {
      const files = row.getValue('affectedFiles') as
        | RuleEntry['affectedFiles']
        | undefined;
      if (!files || !Array.isArray(files) || files.length === 0) {
        return <span className="text-muted-foreground text-xs">N/A</span>;
      }
      return <span className="text-xs">{`${files.length} file(s)`}</span>;
    },
    enableSorting: false,
  },
];
