'use client';

import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import { configCombinationDefaultValues } from '@sherifforg/constants';
import type {
  ServerResponse,
  SheriffConfigurablePlugins,
} from '@sherifforg/types';
import { useQuery } from '@tanstack/react-query';
import { ConfigCombinationForm } from './ConfigCombinationForm';
import { columns, type RuleEntry } from './custom-table/columns';
import { DataTable } from './custom-table/data-table';
import { isArray, isEmpty } from 'lodash-es';
import { filterDuplicateRules } from '@/lib/filterDuplicatedRules';

export const RulesTable: React.FC = () => {
  const [configCombination, setConfigCombination] =
    useState<SheriffConfigurablePlugins>(configCombinationDefaultValues);

  const fetchFreshRuleset = async (
    currentConfigCombination: SheriffConfigurablePlugins,
  ): Promise<{
    data: RuleEntry[];
    pluginsNames: string[];
    totalAvailableRulesAmount: number;
  }> => {
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
        body: JSON.stringify(currentConfigCombination),
      },
    );

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      // For TanStack Query, throwing an error here will put the query in an error state
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const fetchedData: ServerResponse = await response.json();

    const compiledConfigArray = isArray(fetchedData.compiledConfig)
      ? fetchedData.compiledConfig
      : [];

    return {
      data: filterDuplicateRules(compiledConfigArray),
      pluginsNames: fetchedData.pluginsNames ?? [],
      totalAvailableRulesAmount: fetchedData.totalAvailableRulesAmount ?? 0,
    };
  };

  const {
    data: queryData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['ruleset', configCombination],
    queryFn: () => fetchFreshRuleset(configCombination),
    // Consider adding options like staleTime, cacheTime, refetchOnWindowFocus, etc.
  });

  // Default values for when data is loading or an error occurs
  const data = queryData?.data ?? [];
  const pluginsNames = queryData?.pluginsNames ?? [];
  const totalAvailableRulesAmount = queryData?.totalAvailableRulesAmount ?? 0;

  return (
    <div>
      <div>
        <ConfigCombinationForm setTableData={setConfigCombination} />
      </div>
      {isLoading && isEmpty(data) ? (
        'Skeleton'
      ) : isError ? (
        'Error loading rules. Please try again.' // Display an error message
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
