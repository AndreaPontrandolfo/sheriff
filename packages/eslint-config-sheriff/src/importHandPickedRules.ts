export const importHandPickedRules = {
  'import/named': 0,
  'import/namespace': 0,
  'import/default': 0,
  'import/no-named-as-default-member': 0,
  'import/no-unresolved': [2, { commonjs: true, caseSensitiveStrict: true }],
  'import/first': 2,
  'import/order': [2, { 'newlines-between': 'never' }],
  'import/no-default-export': 2,
  'import/no-named-as-default': 2,
  'import/no-duplicates': [2, { 'prefer-inline': true }],
  'import/newline-after-import': [2, { considerComments: true }],
  'import/no-useless-path-segments': [2, { noUselessIndex: true }],
  // 'import/consistent-type-specifier-style': [2, 'prefer-inline'], // this is not actually needed when "@typescript-eslint/no-import-type-side-effects is set. Explanation here: https://github.com/import-js/eslint-plugin-import/issues/2676#issuecomment-1407107260
};
