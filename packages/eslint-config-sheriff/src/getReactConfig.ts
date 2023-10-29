import reactRecommended from 'eslint-plugin-react/configs/recommended';
import jsxRuntime from 'eslint-plugin-react/configs/jsx-runtime';
import reactAccessibility from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import fsecond from 'eslint-plugin-fsecond';
import {
  allJsExtensions,
  allJsxExtensions,
  supportedFileTypes,
} from './constants';
import { getTsNamingConventionRule } from './getTsNamingConventionRule';
import { reactHandPickedRules } from './reactHandPickedRules';
import { getLanguageOptionsTypescriptReact } from './getExportableConfig';

export const getReactConfig = (customTSConfigPath?: string | string[]) => {
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
      rules: reactAccessibility.configs.recommended.rules,
    },
    {
      files: [`**/*{${allJsxExtensions}}`],
      plugins: {
        'react-hooks': reactHooks,
      },
      rules: reactHooks.configs.recommended.rules,
    },
    {
      files: [`**/*{${allJsxExtensions}}`],
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
