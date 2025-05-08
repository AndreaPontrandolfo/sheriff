import type { JSX } from 'react';

interface QueriedRulesMetricsGroupProps {
  totalAvailableRulesAmount: number;
  fetchedConfigRulesAmount: number;
  filteredRulesAmount: number;
}

export const QueriedRulesMetricsGroup = ({
  totalAvailableRulesAmount,
  fetchedConfigRulesAmount,
  filteredRulesAmount,
}: QueriedRulesMetricsGroupProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <span className="text-sm font-medium">Total available rules: </span>
        <span className="text-sm font-medium">{totalAvailableRulesAmount}</span>
      </div>
      <div>
        <span className="text-sm font-medium">Current config rules: </span>
        <span className="text-sm font-medium">{fetchedConfigRulesAmount}</span>
      </div>
      <div>
        <span className="text-sm font-medium">Filtered rules: </span>
        <span className="text-sm font-medium">{filteredRulesAmount}</span>
      </div>
    </div>
  );
};
