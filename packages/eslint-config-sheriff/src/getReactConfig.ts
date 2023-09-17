import react from 'eslint-plugin-react';
import reactAccessibility from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
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
      files: [`**/*{${allJsExtensions},${allJsxExtensions}}`],
      plugins: {
        react,
      },
      languageOptions: getLanguageOptionsTypescriptReact(customTSConfigPath),
    },
    {
      files: [supportedFileTypes],
      plugins: {
        react,
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
        ...reactHandPickedRules,
      },
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
      files: [`**/*{${allJsExtensions},${allJsxExtensions}}`],
      plugins: {
        'react-hooks': reactHooks,
      },
      rules: reactHooks.configs.recommended.rules,
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
      plugins: { react },
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
