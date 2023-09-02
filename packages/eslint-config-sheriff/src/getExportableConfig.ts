import { allJsExtensions, supportedFileTypes, ignores } from './constants';
import { etcHandPickedRules } from './etcHandPickedRules';
import { fpHandPickedRules } from './fpHandPickedRules';
import { getBaseEslintHandPickedRules } from './getBaseEslintHandPickedRules';
import { getReactConfig } from './getReactConfig';
import { getTsNamingConventionRule } from './getTsNamingConventionRule';
import { importHandPickedRules } from './importHandPickedRules';
import { jestHandPickedRules } from './jestHandPickedRules';
import { jsdocHandPickedRules } from './jsdocHandPickedRules';
import { lodashHandPickedRules } from './lodashHandPickedRules';
import { playwrightHandPickedRules } from './playwrightHandPickedRules';
import { sonarjsHandPickedRules } from './sonarjsHandPickedRules';
import { typescriptHandPickedRules } from './typescriptHandPickedRules';
import { unicornHandPickedRules } from './unicornHandPickedRules';
import { vitestHandPickedRules } from './vitestHandPickedRules';
import {
  ExportableConfigAtom,
  NoRestrictedSyntaxOverride,
  SheriffSettings,
} from '@sheriff/types';

const eslintRecommended = require('@eslint/js');
const typescriptParser = require('@typescript-eslint/parser');
const typescript = require('@typescript-eslint/eslint-plugin');
const unicorn = require('eslint-plugin-unicorn');
const sonarjs = require('eslint-plugin-sonarjs');
const playwright = require('eslint-plugin-playwright');
const jsdoc = require('eslint-plugin-jsdoc');
const lodash = require('eslint-plugin-lodash-f');
const eslintConfigPrettier = require('eslint-config-prettier');
const pluginImport = require('eslint-plugin-import');
const nextjs = require('@next/eslint-plugin-next');
const fp = require('eslint-plugin-fp');
const jest = require('eslint-plugin-jest');
const vitest = require('eslint-plugin-vitest');
const etc = require('eslint-plugin-etc');
const preferEarlyReturn = require('@regru/eslint-plugin-prefer-early-return');
const tsdoc = require('eslint-plugin-tsdoc');
const storybook = require('eslint-plugin-storybook');

const getLanguageOptionsTypescript = (userChosenTSConfig?: string) => {
  return {
    parser: typescriptParser,
    parserOptions: {
      ecmaFeatures: { modules: true },
      project: userChosenTSConfig || './tsconfig.json',
    },
  };
};

export const getLanguageOptionsTypescriptReact = (
  userChosenTSConfig?: string,
) => {
  return {
    parser: typescriptParser,
    parserOptions: {
      ecmaFeatures: { modules: true, jsx: true },
      project: userChosenTSConfig || './tsconfig.json',
      jsxPragma: null, // useful for typescript x react@17 https://github.com/jsx-eslint/eslint-plugin-react/blob/8cf47a8ac2242ee00ea36eac4b6ae51956ba4411/index.js#L165-L179
    },
  };
};

const lodashConfig = {
  files: [supportedFileTypes],
  plugins: {
    'lodash-f': lodash,
  },
  rules: {
    ...lodash.configs.recommended.rules,
    ...lodashHandPickedRules,
  },
};

const nextjsConfig = {
  files: [supportedFileTypes],
  plugins: {
    '@next/next': nextjs,
  },
  rules: {
    ...nextjs.configs.recommended.rules,
    ...nextjs.configs['core-web-vitals'].rules,
  },
};

const playwrightConfig = {
  files: ['**/*{js,ts}'],
  plugins: {
    playwright,
  },
  rules: {
    ...playwright.configs['playwright-test'].rules,
    ...playwrightHandPickedRules,
  },
};

const jestConfig = {
  files: [
    `**/*.{test,spec}.{${allJsExtensions}}`,
    `**/tests/**`,
    `**/__tests__/**`,
  ],
  plugins: {
    jest,
  },
  languageOptions: {
    globals: jest.environments.globals.globals,
  },
  rules: {
    ...jest.configs.style.rules,
    ...jestHandPickedRules,
    '@typescript-eslint/unbound-method': 0, // see reference: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
  },
};

const vitestConfig = {
  files: [
    `**/*.{test,spec}.{${allJsExtensions}}`,
    `**/tests/**`,
    `**/__tests__/**`,
  ],
  plugins: {
    vitest,
  },
  rules: vitestHandPickedRules,
};

const prettierOverrides = {
  files: [supportedFileTypes],
  rules: {
    curly: [2, 'all'],
  },
};

const getBaseConfig = (
  customTSConfigPath?: string,
  noRestrictedSyntaxOverride?: NoRestrictedSyntaxOverride,
) => {
  return [
    {
      files: [supportedFileTypes],
      rules: eslintRecommended.configs.recommended.rules,
    },
    {
      files: [supportedFileTypes],
      languageOptions: getLanguageOptionsTypescript(customTSConfigPath),
    },
    {
      files: [supportedFileTypes],
      plugins: {
        '@typescript-eslint': typescript,
      },
      rules: {
        ...typescript.configs.recommended.rules,
        ...typescript.configs['recommended-requiring-type-checking'].rules,
        ...typescriptHandPickedRules,
        ...getTsNamingConventionRule({ isTsx: false }),
      },
    },
    {
      files: [supportedFileTypes],
      plugins: {
        tsdoc,
      },
      rules: {
        'tsdoc/syntax': 2,
      },
    },
    {
      files: [supportedFileTypes],
      rules: getBaseEslintHandPickedRules(noRestrictedSyntaxOverride),
    },
    {
      files: [supportedFileTypes],
      plugins: { fp },
      rules: fpHandPickedRules,
    },
    {
      files: [supportedFileTypes],
      plugins: { etc },
      rules: etcHandPickedRules,
    },
    {
      files: [supportedFileTypes],
      plugins: { '@regru/prefer-early-return': preferEarlyReturn },
      rules: {
        '@regru/prefer-early-return/prefer-early-return': [
          2,
          {
            maximumStatements: 1,
          },
        ],
      },
    },
    {
      files: [supportedFileTypes],
      plugins: { unicorn },
      rules: unicornHandPickedRules,
    },
    {
      files: [supportedFileTypes],
      plugins: { sonarjs },
      rules: {
        ...sonarjs.configs.recommended.rules,
        ...sonarjsHandPickedRules,
      },
    },
    {
      files: [supportedFileTypes],
      plugins: { import: pluginImport },
      rules: importHandPickedRules,
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
          node: true,
        },
      },
    },
    {
      files: [
        '**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)',
        '**/*.story.@(ts|tsx|js|jsx|mjs|cjs)',
      ],
      plugins: { storybook },
      rules: {
        ...storybook.configs.recommended.overrides[0].rules,
        ...storybook.configs.csf.overrides[0].rules,
        ...storybook.configs['csf-strict'].rules,
        'import/no-default-export': 0,
      },
    },
    {
      files: ['**/.storybook/main.@(js|cjs|mjs|ts)'],
      plugins: { storybook },
      rules: storybook.configs.recommended.overrides[1].rules,
    },
    {
      files: [supportedFileTypes],
      plugins: { jsdoc },
      rules: jsdocHandPickedRules,
      settings: {
        jsdoc: {
          mode: 'typescript',
        },
      },
    },
    {
      files: [`**/*.config.{${allJsExtensions}}`],
      rules: {
        'import/no-default-export': 0,
      },
    },
  ];
};

export const getExportableConfig = (userConfigChoices: SheriffSettings) => {
  if (!userConfigChoices) {
    throw new Error('No settings provided.');
  }

  let exportableConfig: ExportableConfigAtom[] = [
    ...getBaseConfig(
      userConfigChoices.customTSConfigPath,
      userConfigChoices.noRestrictedSyntaxOverride,
    ),
  ];

  if (userConfigChoices.react || userConfigChoices.next) {
    // we insert reactConfig this way because it's an array. It's an array because it contains multiple configs, currently: react, react-hooks, react-a11y and react-refresh.
    exportableConfig = [
      ...exportableConfig,
      ...getReactConfig(userConfigChoices?.customTSConfigPath),
    ];
  }

  if (userConfigChoices.jest && userConfigChoices.vitest) {
    throw new Error(
      'Jest and Vitest support cannot be activated at once. Please choose one or the other.',
    );
  }

  if (userConfigChoices.jest) {
    exportableConfig.push(jestConfig);
  }

  if (userConfigChoices.vitest) {
    exportableConfig.push(vitestConfig);
  }

  if (userConfigChoices.next) {
    exportableConfig.push(nextjsConfig);
  }

  if (userConfigChoices.lodash) {
    exportableConfig.push(lodashConfig);
  }

  if (userConfigChoices.playwright) {
    exportableConfig.push(playwrightConfig);
  }

  exportableConfig.push(eslintConfigPrettier);
  exportableConfig.push(prettierOverrides);

  if (userConfigChoices.files) {
    const allowedPatterns = userConfigChoices.files.map(
      (globPattern) => `!${globPattern}`,
    );

    exportableConfig = exportableConfig.map((configSlice) => {
      if (configSlice.ignores?.length && configSlice.ignores.length > 0) {
        return configSlice;
      }

      return {
        ...configSlice,
        ignores: ['**/*', ...allowedPatterns],
      };
    });
  }

  exportableConfig.push({ ignores });

  return exportableConfig;
};
