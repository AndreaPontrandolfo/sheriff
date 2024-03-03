import type { RuleOptions } from "@sherifforg/types";

export const prependRulesWithPluginName = (
  rules: Record<string, RuleOptions>,
  pluginName: string,
): Record<string, RuleOptions> => {
  const newRules: Record<string, RuleOptions> = {};

  for (const [ruleName, ruleValues] of Object.entries(rules)) {
    newRules[`${pluginName}/${ruleName}`] = ruleValues;
  }

  return newRules;
};
