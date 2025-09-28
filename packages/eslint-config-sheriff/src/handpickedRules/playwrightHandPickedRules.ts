import type { TSESLint } from '@typescript-eslint/utils';

export const playwrightHandPickedRules = {
  'playwright/no-force-option': 0,
  'playwright/prefer-lowercase-title': 2,
  'playwright/prefer-to-have-length': 2,
  'playwright/require-top-level-describe': 2,
  'playwright/prefer-to-be': 2,
  'playwright/prefer-to-have-count': 2,
  'playwright/prefer-to-contain': 2,
  'playwright/prefer-strict-equal': 2,
  'playwright/prefer-native-locators': 2,
} as const satisfies TSESLint.FlatConfig.Rules;
