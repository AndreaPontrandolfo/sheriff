export const prependRulesWithPluginName = (
  rules: Record<string, unknown>,
  pluginName: string,
) => {
  const newRules = {};

  for (const [ruleName, ruleValues] of Object.entries(rules)) {
    newRules[`${pluginName}/${ruleName}`] = ruleValues;
  }

  return newRules;
};
