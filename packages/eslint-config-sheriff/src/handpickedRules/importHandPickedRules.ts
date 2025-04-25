import type { TSESLint } from '@typescript-eslint/utils';

export const importHandPickedRules = {
  // https://github.com/import-js/eslint-plugin-import/issues/2913
  // https://github.com/import-js/eslint-plugin-import/issues/2673
  'import-x/newline-after-import': 2,
  'import-x/first': 2,
  'import-x/no-default-export': 2,
  'import-x/no-anonymous-default-export': 2,
  'import-x/no-named-as-default': 2,
  'import-x/no-duplicates': [2, { 'prefer-inline': true }],
  'import-x/no-useless-path-segments': [2, { noUselessIndex: true }],
  // 'import-x/consistent-type-specifier-style': [2, 'prefer-inline'], // this is not actually needed when "@typescript-eslint/no-import-type-side-effects is set. Explanation here: https://github.com/import-js/eslint-plugin-import/issues/2676#issuecomment-1407107260
} as const satisfies TSESLint.FlatConfig.Rules;
