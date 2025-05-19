'use client';

import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import { configCombinationDefaultValues } from '@sherifforg/constants';
import type { Entry, ServerResponse, SheriffSettings } from '@sherifforg/types';
import { ConfigCombinationForm } from './ConfigCombinationForm'; // Assuming path is correct
import { columns, type RuleEntry } from './custom-table/columns'; // Ensure RuleEntry is exported or use Entry
import { DataTable } from './custom-table/data-table';
import { QueriedRulesMetricsGroup } from './QueriedRulesMetricsGroup'; // Assuming path is correct
import { isEmpty } from 'lodash-es';
import { filterDuplicateRules } from '@/lib/filterDuplicatedRules';

/**
 * Debounce function (simple implementation).
 */
function debounce<F extends (...args: any[]) => any>(func: F, waitFor: number) {
  let timeout: NodeJS.Timeout | null = null;

  const debounced = (...args: Parameters<F>) => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
}

export const RulesTable: React.FC = () => {
  const [data, setData] = useState<RuleEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pluginsNames, setPluginsNames] = useState<string[]>([]);
  const [totalAvailableRulesAmount, setTotalAvailableRulesAmount] = useState(0);
  const [configCombination, setConfigCombination] = useState<SheriffSettings>(
    configCombinationDefaultValues,
  );

  // Debounced version of setConfigCombination
  const debouncedSetConfigCombination = useRef(
    debounce(setConfigCombination, 500),
  ).current;

  useEffect(() => {
    const fetchFreshRuleset = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          process.env.NODE_ENV === 'development'
            ? 'http://localhost:5001/api/get-new-sheriff-config'
            : 'https://sheriff-webservices.onrender.com/api/get-new-sheriff-config',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*', // Consider if this is needed for production
            },
            body: JSON.stringify(configCombination),
          },
        );

        if (!response.ok) {
          // Handle HTTP errors
          console.error(`HTTP error! status: ${response.status}`);
          // Potentially set an error state here to display to the user
          setData([]); // Clear data on error
          setPluginsNames([]);
          setTotalAvailableRulesAmount(0);
          setIsLoading(false);

          return;
        }

        const fetchedData: ServerResponse = await response.json();

        setTotalAvailableRulesAmount(
          fetchedData.totalAvailableRulesAmount ?? 0,
        );
        setPluginsNames(fetchedData.pluginsNames ?? []);
        // Ensure fetchedData.compiledConfig is an array before filtering
        const compiledConfigArray = Array.isArray(fetchedData.compiledConfig)
          ? fetchedData.compiledConfig
          : [];

        setData(filterDuplicateRules(compiledConfigArray));
      } catch (error) {
        console.error('Failed to fetch ruleset:', error);
        setData([]); // Clear data on error
        setPluginsNames([]);
        setTotalAvailableRulesAmount(0);
        // Potentially set an error state here
      } finally {
        setIsLoading(false);
      }
    };

    fetchFreshRuleset().catch(console.error);
  }, [configCombination]); // Effect runs when configCombination changes

  return (
    <div>
      <div /* className={styles.tableControlsContainer} - adapt styling as needed */
      >
        <ConfigCombinationForm setTableData={debouncedSetConfigCombination} />
      </div>
      {isLoading && isEmpty(data) ? (
        'Skeleton'
      ) : (
        <DataTable
          columns={columns}
          data={data}
          pluginsNames={pluginsNames}
          totalAvailableRulesAmount={totalAvailableRulesAmount}
        />
      )}
    </div>
  );
};
