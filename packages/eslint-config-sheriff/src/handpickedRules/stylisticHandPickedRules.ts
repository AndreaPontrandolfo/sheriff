import type { TSESLint } from '@typescript-eslint/utils';

export const stylisticHandPickedRules: TSESLint.FlatConfig.Rules = {
  // Prettier doesn't have strong opinions about emptyLines. See: https://prettier.io/docs/en/rationale.html#empty-lines.
  '@stylistic/padding-line-between-statements': [
    2,
    // blank lines after every sequence of variable declarations, like the newline-after-var rule.
    { blankLine: 'always', prev: ['const', 'let'], next: '*' },
    {
      blankLine: 'any',
      prev: ['const', 'let'],
      next: ['const', 'let'],
    },

    //require blank lines before all return statements, like the newline-before-return rule.
    { blankLine: 'always', prev: '*', next: 'return' },
  ],
};
