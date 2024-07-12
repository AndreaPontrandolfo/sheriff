import fsecond from 'eslint-plugin-fsecond';
import reactAccessibility from 'eslint-plugin-jsx-a11y';
import jsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
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
  return [
    {
      files: [supportedFileTypes],
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
    {
      files: [supportedFileTypes],
      ...reactRecommended,
    },
    {
      files: [supportedFileTypes],
      rules: reactHandPickedRules,
    },
    {
      files: [supportedFileTypes],
      ...jsxRuntime,
    },
    {
      // we are specifically not including .astro files here, to not overwrite astro-eslint-parser.
      files: [`**/*{${allJsExtensions},${allJsxExtensions}}`],
      languageOptions: getLanguageOptionsTypescriptReact(customTSConfigPath),
    },
    {
      files: [`**/*{${allJsxExtensions}}`],
      rules: getTsNamingConventionRule({ isTsx: true }),
    },
    {
      files: [`**/*{${allJsxExtensions}}`],
      plugins: { 'react-refresh': reactRefresh },
      rules: {
        'react-refresh/only-export-components': 2,
      },
    },
    {
      files: [`**/*{${allJsxExtensions}}`],
      plugins: {
        'jsx-a11y': reactAccessibility,
      },
      rules: reactAccessibility.configs.strict.rules,
    },
    {
      files: [supportedFileTypes],
      plugins: {
        'react-hooks': reactHooks,
      },
      rules: reactHooks.configs.recommended.rules,
    },
    {
      files: [supportedFileTypes],
      ...rel1cxReact.configs.off,
    },
    {
      files: [supportedFileTypes],
      rules: {
        '@eslint-react/hooks-extra/ensure-custom-hooks-using-other-hooks': 2,
        '@eslint-react/no-leaked-conditional-rendering': 2,
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
    // Specific overrides for storybook
    {
      files: ['**/*.stories.tsx'],
      plugins: { 'react-refresh': reactRefresh },
      rules: {
        'react-refresh/only-export-components': 0,
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
  ];
};
