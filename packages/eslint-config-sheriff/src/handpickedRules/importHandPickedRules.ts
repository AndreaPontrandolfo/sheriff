import type { TSESLint } from '@typescript-eslint/utils';

export const importHandPickedRules = {
  // https://github.com/import-js/eslint-plugin-import/issues/2913
  // https://github.com/import-js/eslint-plugin-import/issues/2673
  'import/newline-after-import': 2,
  'import/first': 2,
  'import/no-default-export': 2,
  'import/no-anonymous-default-export': 2,
  'import/no-named-as-default': 2,
  'import/no-duplicates': [2, { 'prefer-inline': true }],
  'import/no-useless-path-segments': [2, { noUselessIndex: true }],
  // 'import/consistent-type-specifier-style': [2, 'prefer-inline'], // this is not actually needed when "@typescript-eslint/no-import-type-side-effects is set. Explanation here: https://github.com/import-js/eslint-plugin-import/issues/2676#issuecomment-1407107260
} as const satisfies TSESLint.FlatConfig.Rules;
