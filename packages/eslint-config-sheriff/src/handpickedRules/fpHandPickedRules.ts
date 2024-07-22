import type { TSESLint } from '@typescript-eslint/utils';

export const fpHandPickedRules = {
  'fp/no-arguments': 2,
  'fp/no-class': 2,
  'fp/no-delete': 2,
  'fp/no-proxy': 2,
} as const satisfies TSESLint.FlatConfig.Rules;
