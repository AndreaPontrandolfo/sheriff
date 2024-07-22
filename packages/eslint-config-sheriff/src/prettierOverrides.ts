import { supportedFileTypes } from '@sherifforg/constants';
import type { TSESLint } from '@typescript-eslint/utils';

export const prettierOverrides = {
  files: [supportedFileTypes],
  rules: {
    curly: [2, 'all'],
  },
} as const satisfies TSESLint.FlatConfig.Config;
