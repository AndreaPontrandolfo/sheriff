import type { ESLint } from "eslint";
import type { RuleOptions } from "@sherifforg/types";

export const prependRulesWithPluginName = (
  rules: Record<string, RuleOptions> | ESLint.Plugin["rules"] | undefined,
  pluginName: string,
): Record<string, RuleOptions> => {
  if (!rules) {
    return {};
  }

  const newRules: Record<string, RuleOptions> = {};

  for (const [ruleName, ruleValues] of Object.entries(rules)) {
    newRules[`${pluginName}/${ruleName}`] = ruleValues;
  }

  return newRules;
};
