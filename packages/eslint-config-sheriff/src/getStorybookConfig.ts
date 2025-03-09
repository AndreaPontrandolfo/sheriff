import storybook from 'eslint-plugin-storybook';
import tseslint from 'typescript-eslint';
import type { TSESLint } from '@typescript-eslint/utils';

export const getStorybookConfig = (): TSESLint.FlatConfig.ConfigArray => {
  return tseslint.config({
    extends: [
      storybook.configs['flat/recommended'],
      storybook.configs['flat/csf'],
    ],
    rules: {
      'import/no-default-export': 0,
    },
    ignores: ['!.storybook'],
  });
};
