import fsecond from 'eslint-plugin-fsecond';
import reactAccessibility from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import rel1cxReact from '@eslint-react/eslint-plugin';
import {
  allJsExtensions,
  allJsxExtensions,
  supportedFileTypes,
} from '@sherifforg/constants';
import type { TSESLint } from '@typescript-eslint/utils';
import { reactHandPickedRules } from './handpickedRules/reactHandPickedRules';
import { getLanguageOptionsTypescriptReact } from './utils/getLanguageOptionsTypescriptReact';
import { getTsNamingConventionRule } from './utils/getTsNamingConventionRule';

export const getReactConfig = (
  customTSConfigPath?: string | string[],
): TSESLint.FlatConfig.ConfigArray => {
  return tseslint.config(
    {
      // we are specifically not including .astro files here, to not overwrite astro-eslint-parser.
      files: [`**/*{${allJsExtensions},${allJsxExtensions}}`],
      languageOptions: getLanguageOptionsTypescriptReact(customTSConfigPath),
    },
    {
      files: [supportedFileTypes],
      plugins: { react },
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        ...react.configs.flat.recommended.rules,
        ...react.configs.flat['jsx-runtime'].rules,
        ...reactHandPickedRules,
      },
    },
    {
      files: [`**/*{${allJsxExtensions}}`],
      // @ts-expect-error
      rules: getTsNamingConventionRule({ isTsx: true }),
    },
    {
      files: [`**/*{${allJsxExtensions}}`],
      plugins: { 'react-refresh': reactRefresh },
      rules: {
        'react-refresh/only-export-components': [
          2,
          { allowExportNames: ['loader'] },
        ],
      },
    },
    {
      extends: [reactAccessibility.flatConfigs.recommended],
      files: [`**/*{${allJsxExtensions}}`],
    },
    {
      files: [supportedFileTypes],
      plugins: {
        'react-hooks': reactHooks,
      },
      rules: reactHooks.configs['recommended-latest'].rules,
    },
    {
      files: [supportedFileTypes],
      plugins: {
        '@eslint-react': rel1cxReact.configs.all.plugins['@eslint-react'],
        '@eslint-react/hooks-extra':
          rel1cxReact.configs.all.plugins['@eslint-react/hooks-extra'],
      },
      rules: {
        '@eslint-react/no-leaked-conditional-rendering': 2,
        '@eslint-react/hooks-extra/ensure-custom-hooks-using-other-hooks': 2,
      },
    },
    {
      files: [supportedFileTypes],
      plugins: {
        fsecond,
      },
      rules: {
        'fsecond/valid-event-listener': 2,
      },
    },
    // Specific overrides for astro
    {
      files: ['**/*.astro'],
      rules: {
        'react/no-unknown-property': 0,
        'react/jsx-filename-extension': [
          2,
          {
            allow: 'always',
            extensions: ['.jsx', '.tsx', '.mtsx', '.mjsx', '.astro'],
          },
        ],
      },
    },
  );
};
