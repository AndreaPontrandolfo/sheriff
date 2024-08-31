/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { isEmpty } from 'lodash-es';
import { type JSX, useEffect, useRef, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import Select from 'react-select';
import { configCombinationDefaultValues } from '@sherifforg/constants';
import type { Entry, ServerResponse, SheriffSettings } from '@sherifforg/types';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { filterDuplicateRules } from '../utils/filterDuplicatedRules';
import { ConfigCombinationForm } from './ConfigCombinationForm';
import { QueriedRulesMetricsGroup } from './QueriedRulesMetricsGroup';
import styles from './RulesTable.module.css';
import { TableSkeleton } from './TableSkeleton';

interface FilterOption {
  value: string;
  label: string;
}

const columnHelper = createColumnHelper<Entry>();

const columns = [
  columnHelper.accessor('ruleName', {
    header: 'Rule',
    cell: (info) => <code>{info.getValue()}</code>,
  }),
  columnHelper.accessor('parentPluginName', {
    header: 'Plugin',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('severity', {
    header: 'Severity',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('ruleOptions', {
    header: 'Options',
    cell: (info) =>
      isEmpty(info.getValue()) ? 'No options' : JSON.stringify(info.getValue()),
  }),
  columnHelper.accessor('docs', {
    header: 'Docs',
    cell: (info) => {
      return (
        <a href={info.getValue().url} target="_blank" rel="noreferrer">
          {info.getValue().description || info.getValue().url}
        </a>
      );
    },
  }),
  columnHelper.accessor('affectedFiles', {
    header: 'Files',
    cell: (info) => info.getValue(),
  }),
];

export const RulesTable = (): JSX.Element => {
  const [data, setData] = useState<Entry[]>(() => []);
  const [isLoading, setIsLoading] = useState(false);
  const [pluginsNames, setPluginsNames] = useState<string[]>([]);
  const [totalAvailableRulesAmount, setTotalAvailableRulesAmount] = useState(0);
  const [configCombination, setConfigCombination] = useState<SheriffSettings>(
    configCombinationDefaultValues,
  );
  const [globalFilter, setGlobalFilter] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState<FilterOption | null>(null);
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

  useEffect(() => {
    const fetchFreshRuleset = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          process?.env?.NODE_ENV === 'development'
            ? 'http://localhost:5001/api/get-new-sheriff-config'
            : 'https://sheriff-webservices.onrender.com/api/get-new-sheriff-config',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(configCombination),
          },
        );

        const fetchedData: ServerResponse = await response.json();

        setTotalAvailableRulesAmount(
          fetchedData.totalAvailableRulesAmount ?? 0,
        );
        setPluginsNames(fetchedData.pluginsNames);
        setData(filterDuplicateRules(fetchedData.compiledConfig));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFreshRuleset().catch(console.error);
  }, [configCombination]);

  const resetSelectValue = () => {
    setSelectValue(null);
  };

  const resetInputValue = () => {
    setInputValue('');
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

  return (
    <div ref={tableContainerRef}>
      <div className={styles.tableControlsContainer}>
        <ConfigCombinationForm setTableData={setConfigCombination} />
        <div className={styles.filtersContainer}>
          <DebounceInput
            className={styles.filterInput}
            type="text"
            placeholder="Filter by any term..."
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
              control: (baseStyles) => {
                return {
                  ...baseStyles,
                  minWidth: '300px',
                  backgroundColor:
                    'var(--ifm-color-secondary-contrast-background)',
                };
              },
              input: (baseStyles) => {
                return {
                  ...baseStyles,
                  color: 'var(--ifm-font-color-primary)',
                };
              },
              menu: (baseStyles) => {
                return {
                  ...baseStyles,
                  backgroundColor:
                    'var(--ifm-color-secondary-contrast-background)',
                };
              },
              option: (baseStyles, state) => {
                return {
                  ...baseStyles,
                  transition:
                    'color var(--ifm-transition-fast) var(--ifm-transition-timing-default)',
                  backgroundColor: state.isFocused
                    ? 'var(--ifm-menu-color-background-hover)'
                    : 'var(--ifm-color-secondary-contrast-background)',
                  color: state.isFocused
                    ? 'var(--ifm-menu-color)'
                    : 'var(--ifm-font-color-secondary)',
                  ':active': {
                    backgroundColor: 'var(--ifm-menu-color-background-hover)',
                  },
                };
              },
              singleValue: (baseStyles) => {
                return {
                  ...baseStyles,
                  color: 'var(--ifm-font-color-primary)',
                };
              },
              clearIndicator: (baseStyles) => {
                return {
                  ...baseStyles,
                  color: 'var(--ifm-font-color-secondary)',
                  ':hover': {
                    color: 'var(--ifm-font-color-primary)',
                  },
                  cursor: 'pointer',
                };
              },
              dropdownIndicator: (baseStyles) => {
                return {
                  ...baseStyles,
                  color: 'var(--ifm-font-color-secondary)',
                  ':hover': {
                    color: 'var(--ifm-font-color-primary)',
                  },
                  cursor: 'pointer',
                };
              },
            }}
            options={pluginsNames.map((pluginName) => {
              return {
                value: pluginName,
                label: pluginName,
              };
            })}
            onChange={(selectedOption) => {
              setSelectValue(selectedOption);
              resetInputValue();
              setGlobalFilter(selectedOption?.value ?? '');
            }}
          />
        </div>
        <QueriedRulesMetricsGroup
          totalAvailableRulesAmount={totalAvailableRulesAmount}
          fetchedConfigRulesAmount={data.length}
          filteredRulesAmount={table.getRowModel().rows.length}
        />
      </div>
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => {
              return (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
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
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id} className={styles.tr}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        key={cell.id}
                        className={styles.td}
                        style={{
                          maxWidth: cellMaxWidth,
                        }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
