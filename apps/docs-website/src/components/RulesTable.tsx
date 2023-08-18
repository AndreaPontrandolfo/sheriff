import React, { useEffect, useRef, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  pluginsNamesWIthJest,
  pluginsNamesWIthVitest,
  rulesetWithJest,
  rulesetWithVitest,
} from "@sheriff/utils";
import type { Entry } from "@sheriff/types";
import { isEmpty } from "lodash-es";
import Select from "react-select";
import { DebounceInput } from "react-debounce-input";
import { filterDuplicateRules } from "../utils/filterDuplicatedRules";
import styles from "./RulesTable.module.css";

const columnHelper = createColumnHelper<Entry>();

const columns = [
  columnHelper.accessor("ruleName", {
    header: "Rule",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("parentPluginName", {
    header: "Plugin",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("severity", {
    header: "Severity",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("ruleOptions", {
    header: "Options",
    cell: (info) =>
      isEmpty(info.getValue()) ? "No options" : JSON.stringify(info.getValue()),
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

const dedupedRulesetWithVitest = filterDuplicateRules(rulesetWithVitest);
const dedupedRulesetWithJest = filterDuplicateRules(rulesetWithJest);

export const RulesTable = (): JSX.Element => {
  const [data, setData] = useState(() => [...dedupedRulesetWithVitest]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const [selectValue, setSelectValue] = React.useState(null);
  const [isVitestChecked, setIsVitestChecked] = useState<boolean>(true);
  const [isJestChecked, setIsJestChecked] = useState<boolean>(false);
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

  const resetSelectValue = () => {
    setSelectValue(null);
  };

  const resetInputValue = () => {
    setInputValue("");
  };

  const handleVitestCheckbox = () => {
    if (isVitestChecked) {
      setData([...dedupedRulesetWithJest]);
      setIsVitestChecked(false);
      setIsJestChecked(true);
    } else {
      setData([...dedupedRulesetWithVitest]);
      setIsVitestChecked(true);
      setIsJestChecked(false);
    }
  };

  const handleJestCheckbox = () => {
    if (isJestChecked) {
      setData([...dedupedRulesetWithVitest]);
      setIsVitestChecked(true);
      setIsJestChecked(false);
    } else {
      setData([...dedupedRulesetWithJest]);
      setIsVitestChecked(false);
      setIsJestChecked(true);
    }
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  const cellMaxWidth = tableMaximumAllowedWidth / columns.length;
  const pluginsNames = isVitestChecked
    ? pluginsNamesWIthVitest
    : pluginsNamesWIthJest;

  return (
    <div ref={tableContainerRef}>
      <div className={styles.tableControlsContainer}>
        <div className={styles.checkboxGroupContainer}>
          <div className={styles.nativeCheckboxDisabled}>
            <input checked disabled type="checkbox" name="react" id="react" />
            <label htmlFor="react">React</label>
          </div>
          <div className={styles.nativeCheckboxDisabled}>
            <input checked disabled type="checkbox" name="lodash" id="lodash" />
            <label htmlFor="lodash">Lodash</label>
          </div>
          <div className={styles.nativeCheckboxDisabled}>
            <input checked disabled type="checkbox" name="next" id="next" />
            <label htmlFor="next">Next</label>
          </div>
          <div className={styles.nativeCheckboxDisabled}>
            <input
              checked
              disabled
              type="checkbox"
              name="playwright"
              id="playwright"
            />
            <label htmlFor="playwright">Playwright</label>
          </div>
          <div className={styles.nativeCheckbox}>
            <input
              type="checkbox"
              name="vitest"
              id="vitest"
              checked={isVitestChecked}
              onChange={handleVitestCheckbox}
            />
            <label htmlFor="vitest">Vitest</label>
          </div>
          <div className={styles.nativeCheckbox}>
            <input
              type="checkbox"
              name="jest"
              id="jest"
              checked={isJestChecked}
              onChange={handleJestCheckbox}
            />
            <label htmlFor="jest">Jest</label>
          </div>
        </div>
        <div className={styles.filtersContainer}>
          <DebounceInput
            className={styles.filterInput}
            type="text"
            placeholder="Filter by any therm..."
            value={inputValue}
            debounceTimeout={300}
            onChange={(event) => {
              setInputValue(event.target.value);
              resetSelectValue();
              setGlobalFilter(event.target.value);
            }}
          />
          <Select
            isClearable
            isSearchable
            placeholder="Filter by plugins..."
            value={selectValue}
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                minWidth: "300px",
                backgroundColor:
                  "var(--ifm-color-secondary-contrast-background)",
              }),
              input: (baseStyles) => ({
                ...baseStyles,
                color: "var(--ifm-font-color-primary)",
              }),
              menu: (baseStyles) => ({
                ...baseStyles,
                backgroundColor:
                  "var(--ifm-color-secondary-contrast-background)",
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
            options={pluginsNames.map((pluginName) => ({
              value: pluginName,
              label: pluginName,
            }))}
            onChange={(selectedOption) => {
              setSelectValue(selectedOption);
              resetInputValue();
              setGlobalFilter(selectedOption?.value ?? "");
            }}
          />
        </div>
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
