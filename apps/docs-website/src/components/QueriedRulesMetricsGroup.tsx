import styles from "./RulesTable.module.css";

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
    <div className={styles.queriedRulesMetricsGroup}>
      <div>
        <span>Total available rules: </span>
        <span>{totalAvailableRulesAmount}</span>
      </div>
      <div>
        <span>Current config rules: </span>
        <span>{fetchedConfigRulesAmount}</span>
      </div>
      <div>
        <span>Filtered rules</span>: <span>{filteredRulesAmount}</span>
      </div>
    </div>
  );
};
