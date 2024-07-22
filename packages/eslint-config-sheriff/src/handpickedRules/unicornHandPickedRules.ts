import type { TSESLint } from '@typescript-eslint/utils';

export const unicornHandPickedRules = {
  'unicorn/prefer-export-from': [2, { ignoreUsedVariables: true }],
  'unicorn/prefer-switch': [2, { emptyDefaultCase: 'do-nothing-comment' }],
  'unicorn/consistent-destructuring': 2,
  'unicorn/filename-case': 0, // This rule is project-specific.
  'unicorn/no-null': 0, // This rule is too strict.
  'unicorn/no-process-exit': 0, // This rule is wrong in the context of a CLI.
  'unicorn/prevent-abbreviations': 0, // This rule is too strict.
} as const satisfies TSESLint.FlatConfig.Rules;
