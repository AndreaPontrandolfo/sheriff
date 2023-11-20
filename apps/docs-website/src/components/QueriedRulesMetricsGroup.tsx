import styles from "./QueriedRulesMetricsGroup.module.css";

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
    <div className={styles.container}>
      <div>
        <span className={styles.label}>Total available rules: </span>
        <span className={styles.number}>{totalAvailableRulesAmount}</span>
      </div>
      <div>
        <span className={styles.label}>Current config rules: </span>
        <span className={styles.number}>{fetchedConfigRulesAmount}</span>
      </div>
      <div>
        <span className={styles.label}>Filtered rules: </span>
        <span className={styles.number}>{filteredRulesAmount}</span>
      </div>
    </div>
  );
};
