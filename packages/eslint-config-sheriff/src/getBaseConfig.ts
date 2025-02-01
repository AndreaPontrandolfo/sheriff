import arrowReturnStyle from 'eslint-plugin-arrow-return-style';
import fsecond from 'eslint-plugin-fsecond';
import pluginImport from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import * as regexpPlugin from 'eslint-plugin-regexp';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sonarjs from 'eslint-plugin-sonarjs';
import storybook from 'eslint-plugin-storybook';
import tsdoc from 'eslint-plugin-tsdoc';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { fixupPluginRules } from '@eslint/compat';
import eslintJs from '@eslint/js';
import preferEarlyReturn from '@regru/eslint-plugin-prefer-early-return';
import { allJsExtensions, supportedFileTypes } from '@sherifforg/constants';
import type { SheriffSettings } from '@sherifforg/types';
import stylistic from '@stylistic/eslint-plugin';
import type { TSESLint } from '@typescript-eslint/utils';
import { getBaseEslintHandPickedRules } from './handpickedRules/getBaseEslintHandPickedRules';
import { importHandPickedRules } from './handpickedRules/importHandPickedRules';
import { jsdocHandPickedRules } from './handpickedRules/jsdocHandPickedRules';
import { sonarjsHandPickedRules } from './handpickedRules/sonarjsHandPickedRules';
import { stylisticHandPickedRules } from './handpickedRules/stylisticHandPickedRules';
import { typescriptHandPickedRules } from './handpickedRules/typescriptHandPickedRules';
import { unicornHandPickedRules } from './handpickedRules/unicornHandPickedRules';
import { getLanguageOptionsTypescript } from './utils/getLanguageOptionsTypescript';
import { getTsNamingConventionRule } from './utils/getTsNamingConventionRule';

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
      // @ts-expect-error
      rules: {
        ...typescriptHandPickedRules,
        ...getTsNamingConventionRule({ isTsx: false }),
      },
    },
    {
      files: ['**/*.{ts,mts,cts,tsx,mtsx,astro}'],
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
        ...storybook.configs['flat/recommended'][1].rules,
        ...storybook.configs['flat/csf'][1].rules,
        'import/no-default-export': 0,
      },
    },
    {
      files: ['**/.storybook/main.@(js|cjs|mjs|ts)'],
      rules: { ...storybook.configs['flat/recommended'][2].rules },
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
      files: [`**/*.config.{${allJsExtensions}}`],
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
