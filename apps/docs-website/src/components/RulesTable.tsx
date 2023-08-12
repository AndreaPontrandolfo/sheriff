import React, { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface Entry {
  ruleName: string;
  parentPluginName: string;
  severity: string;
  ruleOptions: string;
  affectedFiles: string;
  docsLink: string;
}

const defaultData: Entry[] = [
  {
    ruleName: "react/jsx-child-element-spacing",
    parentPluginName: "eslint-plugin-react",
    severity: "error",
    ruleOptions: "full",
    affectedFiles: "js, ts, tsx",
    docsLink: "http//eslint.org/docs/rules/react/jsx-boolean-value",
  },
  {
    ruleName: "react/jsx-boolean-value",
    parentPluginName: "eslint-plugin-react",
    severity: "error",
    ruleOptions: "full",
    affectedFiles: "js, ts, tsx",
    docsLink: "http//eslint.org/docs/rules/react/jsx-boolean-value",
  },
  {
    ruleName: "jsx-closing-tag-location",
    parentPluginName: "eslint-plugin-react",
    severity: "error",
    ruleOptions: "full",
    affectedFiles: "js, ts, tsx",
    docsLink: "http//eslint.org/docs/rules/react/jsx-boolean-value",
  },
];

const columnHelper = createColumnHelper<Entry>();

const columns = [
  columnHelper.accessor("ruleName", {
    header: () => "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("parentPluginName", {
    header: () => "Parent Plugin",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("severity", {
    header: () => "Severity",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("ruleOptions", {
    header: () => "Options",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("affectedFiles", {
    header: "Affected Files",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("docsLink", {
    header: "Docs",
    cell: (info) => info.getValue(),
  }),
];

export const RulesTable = (): JSX.Element => {
  const [data, setData] = useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
