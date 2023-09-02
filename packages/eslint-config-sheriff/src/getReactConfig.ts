import { supportedFileTypes } from './constants';
import { getTsNamingConventionRule } from './getTsNamingConventionRule';
import { reactHandPickedRules } from './reactHandPickedRules';
const react = require('eslint-plugin-react');
const reactAccessibility = require('eslint-plugin-jsx-a11y');
const reactHooks = require('eslint-plugin-react-hooks');
const reactRefresh = require('eslint-plugin-react-refresh');
import { getLanguageOptionsTypescriptReact } from './getExportableConfig';

export const getReactConfig = (customTSConfigPath?: string) => {
  return [
    {
      files: [supportedFileTypes],
      plugins: {
        react,
      },
      languageOptions: getLanguageOptionsTypescriptReact(customTSConfigPath),
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
      files: ['**/*{jsx,tsx,mtsx,mjsx}'],
      rules: getTsNamingConventionRule({ isTsx: true }),
    },
    {
      files: ['**/*{jsx,tsx,mtsx,mjsx}'],
      plugins: { 'react-refresh': reactRefresh },
      rules: {
        'react-refresh/only-export-components': 2,
      },
    },
    {
      files: [supportedFileTypes],
      plugins: {
        'jsx-a11y': reactAccessibility,
      },
      rules: reactAccessibility.configs.recommended.rules,
    },
    {
      files: [supportedFileTypes],
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
        'react/jsx-filename-extension': [
          2,
          { allow: 'always', extensions: ['jsx', '.tsx', 'mtsx', 'mjsx'] },
        ],
      },
    },
  ];
};
