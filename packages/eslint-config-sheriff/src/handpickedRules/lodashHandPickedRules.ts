export const lodashHandPickedRules = {
  'lodash-f/import-scope': [2, 'member'],
  'lodash-f/prefer-some': [2, { includeNative: false }],
  'lodash-f/prefer-includes': [2, { includeNative: false }],
  'lodash-f/prefer-lodash-method': 0,
  'lodash-f/prefer-noop': 0,
  'lodash-f/prefer-matches': 0,
  'lodash-f/prefer-over-quantifier': 0,
  'lodash-f/prefer-get': 0,
  'unicorn/no-instanceof-array': 0, // we are enabling "prefer-lodash-typecheck", therefore we need to disable this.
};
