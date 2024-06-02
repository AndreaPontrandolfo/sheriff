export const importHandPickedRules = {
  'import/named': 0,
  'import/namespace': 0,
  'import/default': 0,
  'import/no-named-as-default-member': 0,
  'import/no-unresolved': [2, { commonjs: true, caseSensitiveStrict: true }],
  'import/first': 2,
  'import/no-default-export': 2,
  'import/no-anonymous-default-export': 2,
  'import/no-named-as-default': 2,
  'import/no-duplicates': [2, { 'prefer-inline': true }],
  // https://github.com/import-js/eslint-plugin-import/issues/2913
  // https://github.com/import-js/eslint-plugin-import/issues/2673
  'import/newline-after-import': 2,
  'import/no-useless-path-segments': [2, { noUselessIndex: true }],
  // 'import/consistent-type-specifier-style': [2, 'prefer-inline'], // this is not actually needed when "@typescript-eslint/no-import-type-side-effects is set. Explanation here: https://github.com/import-js/eslint-plugin-import/issues/2676#issuecomment-1407107260
};
