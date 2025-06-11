/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-base-to-string */
'use client';

import { isEmpty, isNil, isString } from 'lodash-es';
import type { JSX } from 'react';
import type { Entry } from '@sherifforg/types';
import type { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { DataTableColumnHeader } from './data-table-column-header';

interface DocInfo {
  url: string;
  description: string;
}

// This type is used to define the shape of our data.
// We're using the Entry type from @sherifforg/types
export type RuleEntry = Entry;

export const columns: ColumnDef<RuleEntry>[] = [
  {
    accessorKey: 'ruleName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rule" />
    ),
    cell: ({ row }): JSX.Element => {
      const ruleName = row.getValue('ruleName');

      // @ts-expect-error
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
      const parentPluginName = row.getValue('parentPluginName');

      // @ts-expect-error
      return <span>{parentPluginName ?? ''}</span>;
    },
    filterFn: (row, columnId, filterValue: string[]) => {
      if (!filterValue || !Array.isArray(filterValue) || isEmpty(filterValue)) {
        return true;
      }
      const rowValue = row.getValue(columnId);

      if (isNil(rowValue)) {
        return false;
      }

      // @ts-expect-error
      return filterValue.includes(rowValue);
    },
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: 'severity',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Severity" />
    ),
    cell: ({ row }): JSX.Element | string => {
      const severityValue = row.getValue('severity');

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
      const options = row.getValue('ruleOptions');
      const hasOptions =
        options &&
        (Array.isArray(options)
          ? !isEmpty(options)
          : typeof options === 'object' &&
            options !== null &&
            !isEmpty(Object.keys(options)));

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
      } catch (error) {
        console.error(error);

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
      const docInfo = row.getValue('docs') as DocInfo;

      if (!docInfo?.url) {
        return <span className="text-muted-foreground text-xs">No docs</span>;
      }

      return (
        <Button asChild variant="link" className="whitespace-normal">
          <a href={docInfo.url} target="_blank" rel="noreferrer">
            {docInfo.description || docInfo.url}
          </a>
        </Button>
      );
    },
    filterFn: (row, columnId, filterValue) => {
      const docInfo = row.getValue(columnId) as DocInfo;

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
      const files = row.getValue('affectedFiles');

      if (isString(files)) {
        return <code className="text-xs">{files}</code>;
      }

      return <span className="text-muted-foreground text-xs">N/A</span>;
    },
    enableSorting: false,
  },
];
