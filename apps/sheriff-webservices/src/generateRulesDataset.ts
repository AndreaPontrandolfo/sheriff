/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import lodash from 'lodash';
import { Linter } from 'eslint';
import type {
  Severity,
  Plugins,
  NumericSeverity,
  Entry,
  BarebonesConfigAtom,
  RuleOptions,
  RuleOptionsConfig,
  ServerResponse,
} from '@sheriff/types';

const { isArray, isEmpty, last, uniq } = lodash;

const linter = new Linter();

const getParentPluginName = (rule: string): string => {
  if (rule.includes('/')) {
    const ruleParts = rule.split('/');

    if (!isEmpty(ruleParts)) {
      if (rule.includes('@')) {
        if (ruleParts[2]) {
          return `${ruleParts[0]}/eslint-plugin-${ruleParts[1]}`;
        }

        return `${ruleParts[0]}/eslint-plugin`;
      }

      return `eslint-plugin-${ruleParts[0]}`;
    }
  }

  return '@eslint/js';
};

const severityRemapper = (severity: Severity): NumericSeverity => {
  switch (severity) {
    case 'off': {
      return 0;
    }
    case 'warn': {
      return 1;
    }
    case 'error': {
      return 2;
    }
    default: {
      return severity;
    }
  }
};

const getDocs = (ruleName: string, plugins: Plugins) => {
  const docs = {
    description: '',
    url: '',
  };

  if (plugins) {
    for (const pluginContents of Object.values(plugins)) {
      if (pluginContents) {
        const ruleNameWithoutPrefix = last(ruleName.split('/'));

        if (ruleNameWithoutPrefix) {
          docs.description =
            pluginContents.rules[ruleNameWithoutPrefix]?.meta?.docs
              ?.description ?? '';
          docs.url =
            pluginContents.rules[ruleNameWithoutPrefix]?.meta?.docs?.url ?? '';
        }
      }
    }
  }

  const isEslintRule = ruleName.includes('/');

  if (!plugins && !isEslintRule) {
    docs.description =
      linter.getRules().get(ruleName)?.meta?.docs?.description ?? '';
    docs.url = linter.getRules().get(ruleName)?.meta?.docs?.url ?? '';
  }

  return docs;
};

const extractOptionsFromRuleEntry = (
  ruleEntry: RuleOptions,
): RuleOptionsConfig => {
  if (isArray(ruleEntry)) {
    const [severity, ...options] = ruleEntry;

    return options;
  }

  return [];
};

const extractNumericSeverityFromRuleOptions = (
  ruleOptions: RuleOptions,
): NumericSeverity => {
  if (isArray(ruleOptions)) {
    return severityRemapper(ruleOptions[0]);
  }

  return severityRemapper(ruleOptions);
};

const getCompiledConfig = (config: BarebonesConfigAtom[]) => {
  const pluginsNames: string[] = [];
  const compiledConfig = config.flatMap((configAtom) => {
    const atomRemappedRecords: Entry[] = [];

    if (!configAtom.rules || isEmpty(configAtom.rules)) {
      return atomRemappedRecords;
    }

    for (const [ruleName, ruleOptions] of Object.entries(configAtom.rules)) {
      const parentPluginName = getParentPluginName(ruleName);

      pluginsNames.push(parentPluginName);
      const ruleRecord: Entry = {
        ruleName,
        parentPluginName,
        severity: extractNumericSeverityFromRuleOptions(ruleOptions),
        ruleOptions: extractOptionsFromRuleEntry(ruleOptions),
        affectedFiles: configAtom.files ? configAtom.files.join(', ') : '*',
        docs: getDocs(ruleName, configAtom.plugins),
      };

      atomRemappedRecords.push(ruleRecord);
    }

    return atomRemappedRecords;
  });

  return { compiledConfig, pluginsNames: uniq(pluginsNames) };
};

export const generateRulesDataset = (
  config: BarebonesConfigAtom[],
): ServerResponse => {
  const { compiledConfig, pluginsNames } = getCompiledConfig(config);
  return { compiledConfig, pluginsNames };
};
