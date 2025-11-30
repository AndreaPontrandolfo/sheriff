import { type Config, defineConfig } from 'eslint/config';
import createNoRestrictedProperties from 'eslint-no-restricted/properties';
import arrowReturnStyle from 'eslint-plugin-arrow-return-style';
import fsecond from 'eslint-plugin-fsecond';
import pluginImport from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import * as regexpPlugin from 'eslint-plugin-regexp';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sonarjs from 'eslint-plugin-sonarjs';
import tsdoc from 'eslint-plugin-tsdoc';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintJs from '@eslint/js';
import preferEarlyReturn from '@regru/eslint-plugin-prefer-early-return';
import {
  allJsExtensions,
  allJsxExtensions,
  supportedFileTypes,
  tsExtensions,
  tsxExtensions,
} from '@sherifforg/constants';
import type { SheriffSettings } from '@sherifforg/types';
import stylistic from '@stylistic/eslint-plugin';
import { getBaseEslintHandPickedRules } from './handpickedRules/getBaseEslintHandPickedRules';
import { importHandPickedRules } from './handpickedRules/importHandPickedRules';
import { jsdocHandPickedRules } from './handpickedRules/jsdocHandPickedRules';
import { sonarjsHandPickedRules } from './handpickedRules/sonarjsHandPickedRules';
import { stylisticHandPickedRules } from './handpickedRules/stylisticHandPickedRules';
import { typescriptHandPickedRules } from './handpickedRules/typescriptHandPickedRules';
import { unicornHandPickedRules } from './handpickedRules/unicornHandPickedRules';
import { getLanguageOptionsTypescript } from './utils/getLanguageOptionsTypescript';
import { getTsNamingConventionRule } from './utils/getTsNamingConventionRule';
import { noRestrictedSyntax } from './utils/noRestrictedSyntax';

const baseNoRestrictedPropertiesRules = [
  {
    name: 'isFinite',
    message: 'Please use Number.isFinite instead',
    property: [
      {
        object: 'global',
        property: 'isFinite',
      },
      {
        object: 'self',
        property: 'isFinite',
      },
      {
        object: 'window',
        property: 'isFinite',
      },
    ],
  },
  {
    name: 'isNaN',
    message: 'Please use Number.isNaN instead',
    property: [
      {
        object: 'global',
        property: 'isNaN',
      },
      {
        object: 'self',
        property: 'isNaN',
      },
      {
        object: 'window',
        property: 'isNaN',
      },
    ],
  },
];

const noRestrictedProperties = createNoRestrictedProperties(
  ...baseNoRestrictedPropertiesRules,
);

export const getBaseConfig = (userConfigChoices: SheriffSettings): Config[] => {
  const { tsProjectType, tsconfigRootDir } = userConfigChoices;

  return defineConfig(
    {
      extends: [eslintJs.configs.recommended],
      files: [supportedFileTypes],
    },
    {
      files: [supportedFileTypes],
      rules: getBaseEslintHandPickedRules(),
    },
    {
      extends: tseslint.configs.strictTypeChecked,
      files: [supportedFileTypes],
    },
    {
      files: [`**/*{${allJsExtensions}}`],
      languageOptions: getLanguageOptionsTypescript(
        tsProjectType,
        tsconfigRootDir,
      ),
    },
    {
      files: [supportedFileTypes],
      rules: {
        ...typescriptHandPickedRules,
        ...getTsNamingConventionRule({ isTsx: false }),
      },
    },
    {
      // @ts-expect-error
      extends: [noRestrictedSyntax.configs.recommended],
      files: [supportedFileTypes],
    },
    {
      extends: [noRestrictedProperties.configs.recommended],
      files: [supportedFileTypes],
    },
    {
      files: [`**/*.{${tsExtensions},${tsxExtensions},astro}`],
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
      // @ts-expect-error
      extends: [fsecond.configs.recommended],
      files: [supportedFileTypes],
      rules: {
        'fsecond/valid-event-listener': 0,
      },
    },
    {
      files: [allJsxExtensions],
      plugins: { fsecond },
      rules: {
        'fsecond/valid-event-listener': [
          2,
          { requireUseEventListenerHook: true },
        ],
      },
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
