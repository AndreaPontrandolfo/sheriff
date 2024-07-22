import arrowReturnStyle from 'eslint-plugin-arrow-return-style';
import fp from 'eslint-plugin-fp';
import fsecond from 'eslint-plugin-fsecond';
import pluginImport from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc'; // eslint-disable-line import/no-named-as-default
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sonarjs from 'eslint-plugin-sonarjs';
import storybook from 'eslint-plugin-storybook';
import tsdoc from 'eslint-plugin-tsdoc';
import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';
import eslintRecommended from '@eslint/js';
import preferEarlyReturn from '@regru/eslint-plugin-prefer-early-return';
import { allJsExtensions, supportedFileTypes } from '@sherifforg/constants';
import type { SheriffSettings } from '@sherifforg/types';
import stylistic from '@stylistic/eslint-plugin';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import { fpHandPickedRules } from './handpickedRules/fpHandPickedRules';
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
): FlatConfig.ConfigArray => {
  const customTSConfigPath = userConfigChoices.pathsOverrides?.tsconfigLocation;
  const { noRestrictedSyntaxOverride } = userConfigChoices;

  return tseslint.config(
    {
      files: [supportedFileTypes],
      extends: [eslintRecommended.configs.recommended],
    },
    {
      files: [supportedFileTypes],
      rules: getBaseEslintHandPickedRules(noRestrictedSyntaxOverride),
    },
    {
      files: [`**/*{${allJsExtensions}}`],
      languageOptions: getLanguageOptionsTypescript(customTSConfigPath),
    },
    {
      files: [supportedFileTypes],
      extends: tseslint.configs.strictTypeChecked,
    },
    {
      files: [supportedFileTypes],
      plugins: {
        '@typescript-eslint': tseslint.plugin,
      },
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
      plugins: { fp },
      rules: fpHandPickedRules,
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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- Still has eslintrc types.
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
          '@typescript-eslint/parser': ['.ts', '.tsx'],
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
      files: [supportedFileTypes],
      plugins: { fsecond },
      rules: { 'fsecond/prefer-destructured-optionals': 2 },
    },
    {
      files: [`**/*.config.{${allJsExtensions}}`],
      rules: {
        'import/no-default-export': 0,
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
