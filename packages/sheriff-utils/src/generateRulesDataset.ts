/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import fs from 'fs';
import getSheriffConfig from 'eslint-config-sheriff';
import { isArray, isEmpty, last } from 'lodash-es';
import { Linter } from 'eslint';
import type {
  Severity,
  Plugins,
  NumericSeverity,
  Entry,
  BarebonesConfigAtom,
  RuleOptions,
  RuleOptionsConfig,
} from '@sheriff/types';

const linter = new Linter();

const getParentpluginName = (rule: string): string => {
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

const barebonesConfig: BarebonesConfigAtom[] = getSheriffConfig({
  react: true,
  next: true,
  lodash: true,
  playwright: true,
  vitest: true,
});

const extractOptionsFromRuleEntry = (
  ruleEntry: RuleOptions,
): RuleOptionsConfig => {
  if (isArray(ruleEntry)) {
    return ruleEntry[1];
  }

  return '';
};

const extractNumericSeverityFromRuleOptions = (
  ruleOptions: RuleOptions,
): NumericSeverity => {
  if (isArray(ruleOptions)) {
    return severityRemapper(ruleOptions[0]);
  }

  return severityRemapper(ruleOptions);
};

const generateRulesDataset = () => {
  const compiledConfig = barebonesConfig.flatMap((configAtom) => {
    const atomRemappedRecords: Entry[] = [];

    if (!configAtom.rules || isEmpty(configAtom.rules)) {
      return atomRemappedRecords;
    }

    for (const [ruleName, ruleOptions] of Object.entries(configAtom.rules)) {
      const ruleRecord: Entry = {
        ruleName,
        parentPluginName: getParentpluginName(ruleName),
        severity: extractNumericSeverityFromRuleOptions(ruleOptions),
        ruleOptions: extractOptionsFromRuleEntry(ruleOptions),
        affectedFiles: configAtom.files ? configAtom.files.join(', ') : '*',
        docs: getDocs(ruleName, configAtom.plugins),
      };

      atomRemappedRecords.push(ruleRecord);
    }

    return atomRemappedRecords;
  });

  return compiledConfig;
};

fs.writeFileSync(
  './src/ruleset.ts',
  `export const ruleset = ${JSON.stringify(
    generateRulesDataset(),
    null,
    2,
  )} as const;`,
);
