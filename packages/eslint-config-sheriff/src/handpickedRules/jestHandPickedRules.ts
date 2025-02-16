import type { TSESLint } from '@typescript-eslint/utils';

export const jestHandPickedRules = {
  'jest/no-conditional-expect': 2,
  'jest/no-conditional-in-test': 2,
  'jest/no-alias-methods': 2,
  'jest/no-export': 2,
  'jest/no-duplicate-hooks': 2,
  'jest/no-identical-title': 2,
  'jest/no-focused-tests': 2,
  'jest/no-jasmine-globals': 2,
  'jest/no-standalone-expect': 2,
  'jest/no-test-return-statement': 2,
  'jest/valid-describe-callback': 2,
  'jest/no-test-prefixes': 2,
  'jest/require-top-level-describe': 2,
  'jest/prefer-comparison-matcher': 2,
  'jest/prefer-equality-matcher': 2,
  'jest/prefer-expect-resolves': 2,
  'jest/prefer-hooks-on-top': 2,
  'jest/prefer-hooks-in-order': 2,
  'jest/prefer-strict-equal': 2,
  'jest/valid-title': 2,
  'jest/valid-expect-in-promise': 2,
  'jest/valid-expect': 2,
  'jest/consistent-test-it': [2, { fn: 'test', withinDescribe: 'test' }],
  'jest/unbound-method': 2, // we need to overwrite @typescript-eslint/unbound-method.
} as const satisfies TSESLint.FlatConfig.Rules;
