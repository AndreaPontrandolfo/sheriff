const noAccessModifiersMessage =
  'There is no need to limit developer access to properties.';

module.exports = {
  root: true,
  env: { commonjs: true, node: true, browser: true, es2021: true },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { modules: true, jsx: true },
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    'sonarjs',
    'unicorn',
    'lodash-f',
    'prefer-optional-chaining',
    'jsdoc',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:lodash-f/recommended',
    'plugin:sonarjs/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:playwright/playwright-test',
    'plugin:prettier/recommended',
  ],
  // beware:
  // - https://github.com/prettier/eslint-config-prettier#special-rules
  // - https://github.com/prettier/eslint-config-prettier#other-rules-worth-mentioning
  rules: {
    // #region Base
    // curly: error,
    // quotes: [error, 'backtick', { avoidEscape: false }],
    // semi: [error, 'always'],
    // 'comma-dangle': [error, 'always-multiline'],
    // 'semi-style': [error, 'last'],
    // 'space-infix-ops': [error, { int32Hint: false }],
    // 'new-parens': 2,
    // 'no-else-return': [error, { allowElseIf: false }],
    // 'object-shorthand': [error, 'properties'],
    // 'prefer-const': [warning, { ignoreReadBeforeAssign: false }],
    //     'no-restricted-syntax': [
    //       'error',
    //       {
    //         selector: 'FunctionDeclaration',
    //         message: `Do not use a function declaration. Use a function expression instead:
    // const x = function () {
    // };
    // `,
    //       },
    //       {
    //         selector: 'ExportDefaultDeclaration',
    //         message: 'Do not use default export. Use named exports instead.',
    //       },
    //       {
    //         selector: 'YieldExpression',
    //         message:
    //           'Use regular functions that return a functions that closes over a variable instead of generators',
    //       },
    //       'WithStatement',
    //       "BinaryExpression[operator='in']",
    //       'ClassDeclaration',
    //       'ClassExpression',
    //       'SwitchStatement',
    //       'ThisExpression',
    //     ],
    'no-promise-executor-return': 2,
    'no-unreachable-loop': 2,
    'no-caller': 2,
    'no-restricted-imports': [2, { paths: ['prop-types'] }],
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-implicit-coercion': 2,
    'no-multi-str': 2,
    'no-new-wrappers': 2,
    'no-new-object': 2,
    strict: [2, 'never'],
    'no-octal-escape': 2,
    'no-proto': 2,
    'no-sequences': 2,
    'no-unmodified-loop-condition': 2,
    'no-void': 2,
    'max-statements-per-line': [2, { max: 1 }],
    'no-array-constructor': 2,
    'no-multi-assign': 2,
    'no-plusplus': 2,
    'prefer-destructuring': [
      2,
      {
        array: false,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    camelcase: [2, { properties: 'never' }],
    'no-useless-call': 2,
    'prefer-object-has-own': 2,
    'no-constant-binary-expression': 2,
    'no-lone-blocks': 2,
    'no-var': 2,
    'no-eval': 2,
    'prefer-const': 2,
    'prefer-rest-params': 2,
    'no-return-assign': [2, 'always'],
    'no-else-return': 2,
    'prefer-template': 2,
    'operator-assignment': [2, 'never'],
    'logical-assignment-operators': [2, 'never'],
    'prefer-spread': 2,
    'prefer-object-spread': 2,
    'no-param-reassign': 2,
    'no-redeclare': 2, // we are not using the @typescript-eslint version on purpose, because we want to disallow function overloading entirely.
    'array-callback-return': [2, { allowImplicit: true, checkForEach: true }],
    'object-shorthand': 2,
    'no-unneeded-ternary': [2, { defaultAssignment: false }],
    'require-atomic-updates': 2,
    'no-nested-ternary': 2,
    'no-console': [2, { allow: ['warn', 'error', 'debug'] }],
    eqeqeq: 2,
    'prefer-arrow-callback': 2, // we keep this rule enabled but beware https://github.com/prettier/eslint-config-prettier#arrow-body-style-and-prefer-arrow-callback
    'arrow-body-style': [2, 'as-needed'], // we keep this rule enabled but beware https://github.com/prettier/eslint-config-prettier#arrow-body-style-and-prefer-arrow-callback
    'no-restricted-syntax': [
      2,
      'WithStatement',
      'ClassDeclaration',
      'ClassExpression',
      {
        selector: "Identifier[name='Reflect']",
        message:
          'Avoid the Reflect API. It is a very low-level feature that has only rare and specific use-cases if building complex and hacky libraries. There is no need to use this feature for any kind of normal development',
      },
      {
        selector: "Identifier[name='Proxy']",
        message:
          'Avoid the Proxy API. It is a very low-level feature that has only rare and specific use-cases if building complex and hacky libraries. There is no need to use this feature for any kind of normal development',
      },
      {
        selector: "BinaryExpression[operator='in']",
        message: 'Prefer Object.hasOwn().',
      },
      {
        selector: "PropertyDefinition[accessibility='public']",
        message: noAccessModifiersMessage,
      },
      {
        selector: "PropertyDefinition[accessibility='protected']",
        message: noAccessModifiersMessage,
      },
      {
        selector: "PropertyDefinition[accessibility='private']",
        message: noAccessModifiersMessage,
      },
      {
        selector: "UnaryExpression[operator='delete']",
        message: 'Unallowed use of delete.',
      },
      {
        selector: "Identifier[name='PropTypes']",
        message: 'No PropTypes. Use Typescript instead.',
      },
      {
        selector: "Identifier[name='propTypes']",
        message: 'No PropTypes. Use Typescript instead.',
      },
      {
        selector: "Identifier[name='createContext']",
        message:
          'No React Context. Use component composition instead (https://it.reactjs.org/docs/context.html#before-you-use-context), or a "Global State Mamanement" solution.',
      },
    ],
    'no-undef': 0, // typescript already takes care of this. See: https://typescript-eslint.io/docs/linting/troubleshooting/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
    'no-return-await': 0, // we are using the @typescript/eslint version
    'no-throw-literal': 0, // we are using the @typescript/eslint version
    'no-use-before-define': 0, // we are using the @typescript/eslint version
    'no-unused-expressions': 0, // we are using the @typescript/eslint version
    'no-empty-function': 0, // we are using the @typescript/eslint version
    'require-await': 0, // we are using the @typescript/eslint version
    'no-unused-vars': 0, // we are using the @typescript/eslint version
    'dot-notation': 0, // we are using the @typescript/eslint version
    'no-shadow': 0, // we are using the @typescript/eslint version
    // #endregion
    // #region Typescript-eslint
    '@typescript-eslint/return-await': 2,
    '@typescript-eslint/no-throw-literal': 2,
    '@typescript-eslint/no-use-before-define': 2,
    '@typescript-eslint/consistent-type-assertions': 2,
    '@typescript-eslint/explicit-module-boundary-types': 2,
    '@typescript-eslint/no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
        enforceForJSX: true,
      },
    ],
    '@typescript-eslint/no-array-constructor': 0, // this is unnecessary because we are already using the basic eslint version in conjunction with @typescript-eslint/array-type
    '@typescript-eslint/array-type': 2,
    '@typescript-eslint/no-empty-function': 2,
    '@typescript-eslint/dot-notation': 2,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
        ignoreTypeValueShadow: true,
        ignoreFunctionTypeParameterNameValueShadow: true,
      },
    ],
    // #endregion
    // #region React
    'react/no-unstable-nested-components': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    'react/jsx-boolean-value': 2,
    'react/boolean-prop-naming': 2,
    'react/no-multi-comp': 2,
    'react/jsx-props-no-spreading': 2,
    // #endregion
    // #region Prefer optional chaining
    'prefer-optional-chaining/prefer-optional-chaining': 2,
    // #endregion
    // #region JSDoc
    'jsdoc/check-types': 1,
    'jsdoc/check-alignment': 1,
    // #endregion
    // #region Import
    'import/first': 2,
    'import/order': [2, { 'newlines-between': 'never' }],
    'import/named': 2,
    'import/no-duplicates': 2,
    'import/no-unused-modules': [
      2,
      { missingExports: true, unusedExports: true },
    ],
    'import/namespace': 2,
    'import/no-default-export': 2,
    'import/no-useless-path-segments': [2, { noUselessIndex: true }],
    // #endregion
    // #region Sonarjs
    'sonarjs/cognitive-complexity': 0,
    'sonarjs/prefer-immediate-return': 0,
    // #endregion
    // #region Unicorn
    'unicorn/better-regex': 2,
    'unicorn/explicit-length-check': 2,
    'unicorn/consistent-function-scoping': 2,
    'unicorn/prefer-default-parameters': 2,
    'unicorn/no-array-push-push': 2,
    'unicorn/prefer-array-index-of': 2,
    'unicorn/prefer-array-flat-map': 2,
    'unicorn/prefer-array-some': 2,
    'unicorn/prefer-array-find': 2,
    'unicorn/prefer-array-flat': 2,
    'unicorn/prefer-includes': 2,
    'unicorn/prefer-top-level-await': 2,
    'unicorn/prefer-spread': 2,
    'unicorn/no-useless-spread': 2,
    'unicorn/no-useless-undefined': 2,
    'unicorn/no-for-loop': 2,
    'unicorn/prefer-type-error': 2,
    'unicorn/prefer-object-from-entries': 2,
    'unicorn/no-instanceof-array': 2,
    'unicorn/prefer-native-coercion-functions': 2,
    'unicorn/prefer-logical-operator-over-ternary': 2,
    'unicorn/prefer-event-target': 2,
    'unicorn/no-new-array': 2,
    'unicorn/throw-new-error': 2,
    'unicorn/no-array-reduce': 2,
    'unicorn/no-useless-length-check': 2,
    'unicorn/prefer-prototype-methods': 2,
    'unicorn/prefer-date-now': 2,
    'unicorn/prefer-export-from': [2, { ignoreUsedVariables: true }],
    'unicorn/no-new-buffer': 2,
    'unicorn/no-unsafe-regex': 2,
    'unicorn/prefer-query-selector': 2,
    'unicorn/prefer-string-replace-all': 2,
    // #endregion
    // #region Lodash
    'lodash-f/prefer-lodash-method': 0,
    'lodash-f/import-scope': [2, 'member'],
    // #endregion
    // #region Playwright
    'playwright/no-force-option': 0,
    'playwright/prefer-lowercase-title': 2,
    'playwright/prefer-to-have-length': 2,
    'playwright/require-top-level-describe': 2,
    // #endregion
  },
  ignorePatterns: ['node_modules/'],
};
