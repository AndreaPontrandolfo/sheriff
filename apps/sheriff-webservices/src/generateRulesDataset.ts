/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable fsecond/prefer-destructured-optionals */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable lodash-f/import-scope */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import UNSAFE_ESLint from 'eslint/use-at-your-own-risk';
import type { TSESLint } from 'eslint-config-sheriff';
import lodash from 'lodash';
import type {
  Entry,
  NumericSeverity,
  RuleOptions,
  RuleOptionsConfig,
  ServerResponse,
  Severity,
} from '@sherifforg/types';

const { isArray, isEmpty, last, uniq, isNumber } = lodash;

const getParentPluginName = (rule: string): string => {
  if (rule.includes('/')) {
    const ruleParts = rule.split('/');

    if (!isEmpty(ruleParts)) {
      if (rule.includes('@')) {
        if (ruleParts[2]) {
          return `${ruleParts[0] ?? ''}/eslint-plugin-${ruleParts[1] ?? ''}`;
        }

        return `${ruleParts[0] ?? ''}/eslint-plugin`;
      }

      return `eslint-plugin-${ruleParts[0] ?? ''}`;
    }
  }

  return '@eslint/js';
};

const severityRemapper = (severity: Severity): NumericSeverity => {
  if (isNumber(severity)) {
    return severity;
  }

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

const getDocs = (
  ruleName: string,
  plugins?: TSESLint.FlatConfig.Config['plugins'],
) => {
  const docs = {
    description: '',
    url: '',
  };

  if (plugins) {
    for (const pluginContents of Object.values(plugins)) {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (pluginContents) {
        const ruleNameWithoutPrefix = last(ruleName.split('/'));

        if (ruleNameWithoutPrefix) {
          docs.description =
            // @ts-expect-error
            pluginContents.rules?.[ruleNameWithoutPrefix]?.meta?.docs
              ?.description ?? '';
          docs.url =
            // @ts-expect-error
            pluginContents.rules?.[ruleNameWithoutPrefix]?.meta?.docs?.url ??
            '';
        }
      }
    }
  }

  const isEslintRule = !ruleName.includes('/');

  if (!plugins && isEslintRule) {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    docs.url = UNSAFE_ESLint.builtinRules.get(ruleName)?.meta?.docs?.url ?? '';
  }

  return docs;
};

const extractOptionsFromRuleEntry = (
  ruleEntry: RuleOptions,
): RuleOptionsConfig => {
  if (isArray(ruleEntry)) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  return severityRemapper(ruleOptions ?? 0);
};

const getCompiledConfig = (
  config: TSESLint.FlatConfig.ConfigArray,
  allRulesRaw: TSESLint.FlatConfig.Config['rules'],
) => {
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
        //@ts-expect-error
        severity: extractNumericSeverityFromRuleOptions(ruleOptions),
        //@ts-expect-error
        ruleOptions: extractOptionsFromRuleEntry(ruleOptions),
        affectedFiles: configAtom.files ? configAtom.files.join(', ') : 'none',
        docs: getDocs(ruleName, configAtom.plugins),
      };

      atomRemappedRecords.push(ruleRecord);
    }

    return atomRemappedRecords;
  });

  const declaredRules = compiledConfig.map((rule) => rule.ruleName);

  if (allRulesRaw) {
    for (const [ruleName, ruleOptions] of Object.entries(allRulesRaw)) {
      if (!declaredRules.includes(ruleName)) {
        const parentPluginName = getParentPluginName(ruleName);

        const ruleRecord: Entry = {
          ruleName,
          parentPluginName,
          severity: 0,
          //@ts-expect-error
          ruleOptions: extractOptionsFromRuleEntry(ruleOptions),
          affectedFiles: 'none',
          docs: getDocs(ruleName),
        };

        compiledConfig.push(ruleRecord);
      }
    }
  }

  return { compiledConfig, pluginsNames: uniq(pluginsNames) };
};

export const generateRulesDataset = (
  config: TSESLint.FlatConfig.ConfigArray,
  allRulesRaw: TSESLint.FlatConfig.Config['rules'],
): ServerResponse => {
  const { compiledConfig, pluginsNames } = getCompiledConfig(
    config,
    allRulesRaw,
  );

  return { compiledConfig, pluginsNames };
};
