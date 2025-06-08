import type { JSX } from 'react';
import { Separator } from '@radix-ui/react-separator';

interface QueriedRulesMetricsGroupProps {
  totalAvailableRulesAmount: number;
  fetchedConfigRulesAmount: number;
  filteredRulesAmount: number;
}

export function QueriedRulesMetricsGroup({
  totalAvailableRulesAmount,
  fetchedConfigRulesAmount,
  filteredRulesAmount,
}: QueriedRulesMetricsGroupProps): JSX.Element {
  return (
    <div className="flex gap-4">
      <div>
        <span>Total available rules: </span>
        <span className="text-lg font-bold">{totalAvailableRulesAmount}</span>
      </div>
      <Separator orientation="vertical" className="bg-border w-px" />
      <div>
        <span>Current config rules: </span>
        <span className="text-lg font-bold">{fetchedConfigRulesAmount}</span>
      </div>
      <Separator orientation="vertical" className="bg-border w-px" />
      <div>
        <span>Filtered rules: </span>
        <span className="text-lg font-bold">{filteredRulesAmount}</span>
      </div>
    </div>
  );
}
