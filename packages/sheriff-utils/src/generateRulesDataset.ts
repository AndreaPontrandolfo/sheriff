/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import fs from 'fs';
import getSheriffConfig from 'eslint-config-sheriff';
import { isEmpty } from 'lodash-es';

type NumericSeverity = 0 | 1 | 2;
type Severity = NumericSeverity | 'error' | 'warn' | 'off';

interface BarebonesConfigAtom {
  rules: Record<string, NumericSeverity> | undefined;
  plugins: Record<string, unknown> | undefined;
  files: string[] | undefined;
}

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

const barebonesConfig: BarebonesConfigAtom[] = getSheriffConfig({
  react: true,
  next: true,
  lodash: true,
  playwright: true,
  vitest: true,
});

interface Entry {
  ruleName: string;
  parentPluginName: string;
  severity: NumericSeverity;
  ruleOptions: string;
  affectedFiles: string;
  docsLink: string;
}

const generateRulesDataset = () => {
  const compiledConfig = barebonesConfig.flatMap((configAtom) => {
    const atomRemappedRecords: Entry[] = [];

    if (!configAtom.rules || isEmpty(configAtom.rules)) {
      return atomRemappedRecords;
    }

    for (const [ruleName, severity] of Object.entries(configAtom.rules)) {
      const ruleRecord: Entry = {
        ruleName,
        parentPluginName: getParentpluginName(ruleName),
        severity: severityRemapper(severity),
        ruleOptions: '',
        affectedFiles: configAtom.files ? configAtom.files.join(', ') : '*',
        docsLink: '',
      };

      atomRemappedRecords.push(ruleRecord);
    }

    return atomRemappedRecords;
  });

  return compiledConfig;
  // const fullRulesList = config
  //   .map((element) => {
  //     if (element.rules) {
  //       return element.rules;
  //     }
  //   })
  //   .filter((element) => {
  //     if (element) {
  //       return element;
  //     }
  //   });
  // const fullRulesListFlattened = {};
  // for (const configSlice of fullRulesList) {
  //   Object.assign(fullRulesListFlattened, configSlice);
  // }
  // const fullRulesListFlattenedWithTransformedSeverity = {};
  // for (const [key, value] of Object.entries(fullRulesListFlattened)) {
  //   if (value === 'error') {
  //     fullRulesListFlattenedWithTransformedSeverity[key] = 2;
  //   }
  //   if (value === 'warn') {
  //     fullRulesListFlattenedWithTransformedSeverity[key] = 1;
  //   }
  //   if (value === 'off') {
  //     fullRulesListFlattenedWithTransformedSeverity[key] = 0;
  //   }
  //   if (value !== 'error' && value !== 'warn' && value !== 'off') {
  //     fullRulesListFlattenedWithTransformedSeverity[key] = value;
  //   }
  // }
};

fs.writeFileSync(
  './src/rules.json',
  JSON.stringify(generateRulesDataset(), null, 2),
);
