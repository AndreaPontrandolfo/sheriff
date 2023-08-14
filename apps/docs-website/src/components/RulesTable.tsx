import React, { useEffect, useRef, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ruleset, pluginsNames } from "@sheriff/utils";
import type { Entry } from "@sheriff/types";
import Select from "react-select";
import styles from "./RulesTable.module.css";

const columnHelper = createColumnHelper<Entry>();

const columns = [
  columnHelper.accessor("ruleName", {
    header: () => "Rule",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("parentPluginName", {
    header: () => "Plugin",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("severity", {
    header: () => "Severity",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("ruleOptions", {
    header: () => "Options",
    cell: (info) => (info.getValue() ? JSON.stringify(info.getValue()) : ""),
  }),
  columnHelper.accessor("docs", {
    header: "Docs",
    cell: (info) => (
      <a href={info.getValue().url}>
        {info.getValue().description || info.getValue().url}
      </a>
    ),
  }),
  columnHelper.accessor("affectedFiles", {
    header: "Files",
    cell: (info) => info.getValue(),
  }),
];

export const RulesTable = (): JSX.Element => {
  const [data, setData] = useState(() => [...ruleset]);
  const [filter, setFilter] = useState<string | null>(null);
  const [tableMaximumAllowedWidth, setTableMaximumAllowedWidth] =
    useState<number>(0);

  const tableContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tableContainerRef.current) {
      return;
    }
    const computedTableWidth =
      tableContainerRef.current.getBoundingClientRect().width;

    setTableMaximumAllowedWidth(computedTableWidth);
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filter,
    },
    onGlobalFilterChange: setFilter,
  });

  const cellMaxWidth = tableMaximumAllowedWidth / columns.length;

  return (
    <div ref={tableContainerRef}>
      <div className={styles.filtersContainer}>
        <input
          className={styles.filterInput}
          type="text"
          placeholder="Filter by any therm..."
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
        <Select
          isSearchable
          isClearable
          placeholder="Filter by plugins..."
          options={pluginsNames.map((pluginName) => ({
            value: pluginName,
            label: pluginName,
          }))}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              minWidth: "300px",
              backgroundColor: "var(--ifm-color-secondary-contrast-background)",
            }),
            input: (baseStyles) => ({
              ...baseStyles,
              color: "var(--ifm-font-color-primary)",
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              backgroundColor: "var(--ifm-color-secondary-contrast-background)",
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              transition:
                "color var(--ifm-transition-fast) var(--ifm-transition-timing-default)",
              backgroundColor: state.isFocused
                ? "var(--ifm-menu-color-background-hover)"
                : "var(--ifm-color-secondary-contrast-background)",
              color: state.isFocused
                ? "var(--ifm-menu-color)"
                : "var(--ifm-font-color-secondary)",
              ":active": {
                backgroundColor: "var(--ifm-menu-color-background-hover)",
              },
            }),
            singleValue: (baseStyles) => ({
              ...baseStyles,
              color: "var(--ifm-font-color-primary)",
            }),
            clearIndicator: (baseStyles) => ({
              ...baseStyles,
              color: "var(--ifm-font-color-secondary)",
              ":hover": {
                color: "var(--ifm-font-color-primary)",
              },
              cursor: "pointer",
            }),
            dropdownIndicator: (baseStyles) => ({
              ...baseStyles,
              color: "var(--ifm-font-color-secondary)",
              ":hover": {
                color: "var(--ifm-font-color-primary)",
              },
              cursor: "pointer",
            }),
          }}
          onChange={(inputText) => {
            setFilter(inputText?.value ?? "");
          }}
        />
      </div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={styles.th}
                  style={{
                    maxWidth: cellMaxWidth,
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={styles.tr}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={styles.td}
                  style={{
                    maxWidth: cellMaxWidth,
                  }}
                >
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
