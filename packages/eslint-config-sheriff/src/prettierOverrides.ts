import { supportedFileTypes } from '@sherifforg/constants';
import type { TSESLint } from '@typescript-eslint/utils';

export const prettierOverrides = {
  name: 'Sheriff Config (Prettier overrides)',
  files: [supportedFileTypes],
  rules: {
    curly: [2, 'all'],
  },
} as const satisfies TSESLint.FlatConfig.Config;
