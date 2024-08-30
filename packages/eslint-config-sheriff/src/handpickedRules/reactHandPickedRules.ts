export const reactHandPickedRules = {
  'react/prop-types': 0,
  'react/no-unstable-nested-components': [2, { allowAsProps: false }],
  'react/jsx-no-useless-fragment': [2, { allowExpressions: true }],
  'react/function-component-definition': [
    2,
    { namedComponents: 'arrow-function' },
  ],
  'react/jsx-boolean-value': 2,
  'react/jsx-fragments': 2,
  'react/jsx-key': [
    2,
    { checkFragmentShorthand: true, warnOnDuplicates: true },
  ],
  'react/hook-use-state': 2,
  // this rule right now isn't really inferring typescript types information about variables being boolean, see more here: https://github.com/jsx-eslint/eslint-plugin-react/issues/3292
  // 'react/jsx-no-leaked-render': [2, { validStrategies: ['coerce', 'ternary'] }],
  'react/destructuring-assignment': 2,
  'react/jsx-filename-extension': [
    2,
    {
      extensions: ['.jsx', '.tsx', '.mtsx', '.mjsx'],
    },
  ],
  'react/no-multi-comp': 2,
  'react/no-array-index-key': 2,
  'react/checked-requires-onchange-or-readonly': 2,
  'react/jsx-sort-props': [
    2,
    {
      callbacksLast: true,
      shorthandFirst: true,
      shorthandLast: false,
      ignoreCase: true,
      noSortAlphabetically: true,
      multiline: 'last',
      reservedFirst: false,
    },
  ],
};
