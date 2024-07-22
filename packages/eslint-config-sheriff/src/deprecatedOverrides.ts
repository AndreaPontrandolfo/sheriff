import type { TSESLint } from '@typescript-eslint/utils';

export const deprecatedRecommendedOverrides = {
  'no-mixed-spaces-and-tabs': 0,
  'no-extra-semi': 0,
} satisfies TSESLint.FlatConfig.Rules;
