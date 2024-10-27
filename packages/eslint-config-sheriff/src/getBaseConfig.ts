import eslintJs from '@eslint/js';
import type { TSESLint } from '@typescript-eslint/utils';
import tseslint from 'typescript-eslint';
import unicorn from 'eslint-plugin-unicorn';
import sonarjs from 'eslint-plugin-sonarjs';
import jsdoc from 'eslint-plugin-jsdoc';
import pluginImport from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import preferEarlyReturn from '@regru/eslint-plugin-prefer-early-return';
import tsdoc from 'eslint-plugin-tsdoc';
import storybook from 'eslint-plugin-storybook';
import fsecond from 'eslint-plugin-fsecond';
import arrowReturnStyle from 'eslint-plugin-arrow-return-style';
import stylistic from '@stylistic/eslint-plugin';
import * as regexpPlugin from 'eslint-plugin-regexp';
import { supportedFileTypes, allJsExtensions } from '@sherifforg/constants';
import type { SheriffSettings } from '@sherifforg/types';
import { getTsNamingConventionRule } from './utils/getTsNamingConventionRule';
import { importHandPickedRules } from './handpickedRules/importHandPickedRules';
import { jsdocHandPickedRules } from './handpickedRules/jsdocHandPickedRules';
import { sonarjsHandPickedRules } from './handpickedRules/sonarjsHandPickedRules';
import { stylisticHandPickedRules } from './handpickedRules/stylisticHandPickedRules';
import { typescriptHandPickedRules } from './handpickedRules/typescriptHandPickedRules';
import { unicornHandPickedRules } from './handpickedRules/unicornHandPickedRules';
import { getBaseEslintHandPickedRules } from './handpickedRules/getBaseEslintHandPickedRules';
import { getLanguageOptionsTypescript } from './utils/getLanguageOptionsTypescript';
import globals from 'globals';
import { fixupPluginRules } from '@eslint/compat';

export const getBaseConfig = (
  userConfigChoices: SheriffSettings,
): TSESLint.FlatConfig.ConfigArray => {
  const customTSConfigPath = userConfigChoices.pathsOverrides?.tsconfigLocation;

  return tseslint.config(
    {
      files: [supportedFileTypes],
      extends: [eslintJs.configs.recommended],
    },
    {
      files: [supportedFileTypes],
      // @ts-expect-error
      rules: getBaseEslintHandPickedRules(),
    },
    {
      files: [supportedFileTypes],
      extends: tseslint.configs.strictTypeChecked,
    },
    {
      files: [`**/*{${allJsExtensions}}`],
      languageOptions: getLanguageOptionsTypescript(customTSConfigPath),
    },
    {
      files: [supportedFileTypes],
      rules: {
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
      plugins: { '@stylistic': stylistic },
      rules: stylisticHandPickedRules,
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
      languageOptions: {
        globals: globals.builtin,
      },
      plugins: { unicorn },
      rules: unicornHandPickedRules,
    },
    {
      files: [supportedFileTypes],
      plugins: { regexp: regexpPlugin },
      rules: regexpPlugin.configs['flat/recommended'].rules,
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
      plugins: { 'arrow-return-style': arrowReturnStyle },
      rules: {
        'arrow-return-style/arrow-return-style': [
          2,
          { namedExportsAlwaysUseExplicitReturn: false },
        ],
        'arrow-return-style/no-export-default-arrow': 2,
      },
    },
    {
      files: [supportedFileTypes],
      plugins: {
        'simple-import-sort': simpleImportSort,
      },
      rules: {
        'simple-import-sort/imports': [
          2,
          {
            groups: [
              ['^\\u0000', '^node:', '^', '^@', '^@/', '^#', '^~', '^\\.'],
            ],
          },
        ],
        'simple-import-sort/exports': 2,
      },
    },
    {
      files: [supportedFileTypes],
      plugins: { import: pluginImport },
      rules: importHandPickedRules,
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx', '.mts', 'cts'],
          espree: ['.js'],
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
      files: ['**/*.d.ts'],
      rules: {
        'import/no-default-export': 0,
      },
    },
    {
      files: [
        '**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)',
        '**/*.story.@(ts|tsx|js|jsx|mjs|cjs)',
      ],
      plugins: { storybook: fixupPluginRules(storybook) },
      rules: {
        ...storybook.configs.recommended.overrides[0].rules,
        ...storybook.configs.csf.overrides[0].rules,
        ...storybook.configs['csf-strict'].rules,
        'import/no-default-export': 0,
      },
    },
    {
      files: ['**/.storybook/main.@(js|cjs|mjs|ts)'],
      plugins: { storybook: fixupPluginRules(storybook) },
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
      files: [supportedFileTypes],
      plugins: { fsecond },
      rules: { 'fsecond/prefer-destructured-optionals': 2 },
    },
    {
      files: ['**/*.config.*'],
      rules: {
        'import/no-default-export': 0,
        'import/no-anonymous-default-export': 0,
        'arrow-return-style/no-export-default-arrow': 0,
      },
    },
    {
      files: [supportedFileTypes],
      linterOptions: {
        reportUnusedDisableDirectives: 'error',
      },
    },
  );
};
