const typescriptParser = require('@typescript-eslint/parser');
const typescript = require('@typescript-eslint/eslint-plugin');
const react = require('eslint-plugin-react');
const reactAccessibility = require('eslint-plugin-jsx-a11y');
const reactHooks = require('eslint-plugin-react-hooks');
const unicorn = require('eslint-plugin-unicorn');
const sonarjs = require('eslint-plugin-sonarjs');
const playwright = require('eslint-plugin-playwright');
const jsdoc = require('eslint-plugin-jsdoc');
const lodash = require('eslint-plugin-lodash-f');
const prettierConfig = require('eslint-config-prettier');
const pluginImport = require('eslint-plugin-import');
const nextjs = require('@next/eslint-plugin-next');
const fp = require('eslint-plugin-fp');
const jest = require('eslint-plugin-jest');
const etc = require('eslint-plugin-etc');
const reactRefresh = require('eslint-plugin-react-refresh');
const preferEarlyReturn = require('@regru/eslint-plugin-prefer-early-return');
const tsdoc = require('eslint-plugin-tsdoc');
const storybook = require('eslint-plugin-storybook');

const allJsExtensions = 'js,mjs,cjs,ts,mts,cts,jsx,tsx,mtsx,mjsx';
const supportedFileTypes = `**/*{${allJsExtensions}}`;

const ignores = [
  '**/node_modules/**',
  '.git/**',
  '**/dist/**',
  '**/build/**',
  '**/artifacts/**',
  '**/coverage/**',
  'eslint.config.js', // we currently cannot lint the eslint.config.js itself. It is currently only provided as a .js file amd this config currently only supports .ts files. Therefore, eslint.config.js can only be re-enabled once this config support pure .js files too, or the Eslitn team support the eslint.config.ts file.
];

const messages = {
  NO_ACCESS_MODIFIER:
    'There is no need to limit developer access to properties.',
};

const getTsNamingConventionRule = ({ isTsx }) => {
  return {
    '@typescript-eslint/naming-convention': [
      2,
      {
        selector: 'default',
        format: ['camelCase', isTsx && 'StrictPascalCase'].filter(Boolean),
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
        modifiers: ['const'],
        types: ['boolean', 'string', 'number'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'objectLiteralProperty',
        format: null,
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      // {
      //   selector: 'parameter',
      //   format: ['strictCamelCase'],
      //   leadingUnderscore: 'allow',
      //   trailingUnderscore: 'forbid',
      // },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      // https://typescript-eslint.io/rules/naming-convention/#enforce-that-boolean-variables-are-prefixed-with-an-allowed-verb
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['camelCase'],
        prefix: ['is', 'has', 'should', 'can'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'variable',
        modifiers: ['destructured'],
        format: null,
      },
    ],
  };
};

const baseEslintHandPickedRules = {
  'func-style': 2,
  'no-promise-executor-return': 2,
  'no-unreachable-loop': 2,
  'no-caller': 2,
  'no-restricted-imports': [2, { paths: ['prop-types'] }],
  'no-extend-native': 2,
  'no-extra-bind': 2,
  'no-extra-label': 2,
  'no-implicit-coercion': 2,
  'no-multi-str': 2,
  'no-negated-condition': 2,
  'no-new-wrappers': 2,
  'no-new-object': 2,
  'no-restricted-properties': [
    2,
    {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
  ],
  strict: [2, 'never'],
  'no-octal-escape': 2,
  'no-proto': 2,
  'no-sequences': [2, { allowInParentheses: false }],
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
  'no-useless-call': 2,
  'prefer-object-has-own': 2,
  'no-constant-binary-expression': 2,
  'no-lone-blocks': 2,
  'no-var': 2,
  'no-eval': 2,
  'prefer-const': 2,
  'prefer-rest-params': 2,
  'no-return-assign': [2, 'always'],
  'no-else-return': [2, { allowElseIf: false }],
  'prefer-template': 2,
  'operator-assignment': [2, 'never'],
  'logical-assignment-operators': [2, 'never'],

  // Prettier doesn't have strong opinions about emptyLines. See: https://prettier.io/docs/en/rationale.html#empty-lines.
  'padding-line-between-statements': [
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
    {
      selector: 'LabeledStatement',
      message:
        'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'ForInStatement',
      message:
        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    {
      selector: "Identifier[name='Reflect']",
      message:
        'Avoid the Reflect API. It is a very low-level feature that has only rare and specific use-cases if building complex and hacky libraries. There is no need to use this feature for any kind of normal development',
    },
    {
      selector: "BinaryExpression[operator='in']",
      message: 'Prefer Object.hasOwn().',
    },
    {
      selector: "PropertyDefinition[accessibility='public']",
      message: messages.NO_ACCESS_MODIFIER,
    },
    {
      selector: "PropertyDefinition[accessibility='protected']",
      message: messages.NO_ACCESS_MODIFIER,
    },
    {
      selector: "PropertyDefinition[accessibility='private']",
      message: messages.NO_ACCESS_MODIFIER,
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
        'No React Context. Use component composition instead (https://it.reactjs.org/docs/context.html#before-you-use-context), or a "Global State Management" solution.',
    },
  ],
  'no-undef': 0, // typescript already takes care of this. See: https://typescript-eslint.io/docs/linting/troubleshooting/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
  'no-dupe-class-members': 0, // typescript already takes care of this.
  'no-return-await': 0, // we are using the @typescript/eslint version
  'no-throw-literal': 0, // we are using the @typescript/eslint version
  'no-use-before-define': 0, // we are using the @typescript/eslint version
  'no-unused-expressions': 0, // we are using the @typescript/eslint version
  'no-empty-function': 0, // we are using the @typescript/eslint version
  'require-await': 0, // we are using the @typescript/eslint version
  'no-unused-vars': 0, // we are using the @typescript/eslint version
  'dot-notation': 0, // we are using the @typescript/eslint version
  'no-shadow': 0, // we are using the @typescript/eslint version
};

const typescriptHandPickedRules = {
  '@typescript-eslint/ban-ts-comment': 0,
  '@typescript-eslint/no-unsafe-assignment': 0,
  '@typescript-eslint/no-array-constructor': 0, // this is unnecessary because we are already using the basic eslint version in conjunction with @typescript-eslint/array-type
  '@typescript-eslint/return-await': 2,
  '@typescript-eslint/no-redundant-type-constituents': 2,
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,
  '@typescript-eslint/prefer-ts-expect-error': 2,
  '@typescript-eslint/no-throw-literal': 2,
  '@typescript-eslint/no-use-before-define': 2,
  '@typescript-eslint/consistent-type-assertions': 2,
  '@typescript-eslint/consistent-type-imports': [
    2,
    {
      fixStyle: 'inline-type-imports',
    },
  ],
  '@typescript-eslint/consistent-type-exports': [
    2,
    { fixMixedExportsWithInlineTypeSpecifier: true },
  ],
  '@typescript-eslint/explicit-module-boundary-types': 2,
  '@typescript-eslint/switch-exhaustiveness-check': 2,
  '@typescript-eslint/no-invalid-void-type': 2,
  '@typescript-eslint/method-signature-style': 2,
  '@typescript-eslint/non-nullable-type-assertion-style': 2,
  '@typescript-eslint/no-confusing-void-expression': 2,
  '@typescript-eslint/prefer-nullish-coalescing': [
    2,
    { ignoreTernaryTests: false },
  ],
  '@typescript-eslint/no-unnecessary-condition': 2,
  '@typescript-eslint/unified-signatures': 2,
  '@typescript-eslint/no-unused-expressions': [
    2,
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
      enforceForJSX: true,
    },
  ],
  '@typescript-eslint/array-type': 2,
  '@typescript-eslint/no-empty-function': 2,
  '@typescript-eslint/prefer-optional-chain': 2,
  '@typescript-eslint/dot-notation': 2,
  '@typescript-eslint/no-shadow': [
    2,
    {
      hoist: 'all',
      allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      ignoreTypeValueShadow: true,
      ignoreFunctionTypeParameterNameValueShadow: true,
    },
  ],
};

const unicornHandPickedRules = {
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
  'unicorn/prefer-set-size': 2,
  'unicorn/prefer-type-error': 2,
  'unicorn/prefer-object-from-entries': 2,
  'unicorn/no-instanceof-array': 2,
  'unicorn/prefer-native-coercion-functions': 2,
  'unicorn/prefer-logical-operator-over-ternary': 2,
  'unicorn/prefer-event-target': 2,
  'unicorn/no-await-expression-member': 2,
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
  'unicorn/prefer-switch': [2, { emptyDefaultCase: 'do-nothing-comment' }],
  'unicorn/switch-case-braces': 2,
};

const sonarjsHandPickedRules = {
  'sonarjs/cognitive-complexity': 0,
  'sonarjs/prefer-immediate-return': 0,
};

const etcHandPickedRules = {
  'etc/no-enum': 2,
  'etc/no-misused-generics': 2,
  'etc/no-assign-mutated-array': 2,
};

const playwrightHandPickedRules = {
  'playwright/no-force-option': 0,
  'playwright/prefer-lowercase-title': 2,
  'playwright/prefer-to-have-length': 2,
  'playwright/require-top-level-describe': 2,
  'playwright/prefer-to-be': 2,
  'playwright/prefer-strict-equal': 2,
};

const lodashHandPickedRules = {
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

const jestHandPickedRules = {
  'jest/no-conditional-expect': 2,
  'jest/no-conditional-in-test': 2,
  'jest/no-alias-methods': 2,
  'jest/no-export': 2,
  'jest/no-duplicate-hooks': 2,
  'jest/no-done-callback': 2,
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
  'jest/consistent-test-it': [2, { fn: 'test', withinDescribe: 'test' }], // with this we have an api consistent with Playwright.
};

const jsdocHandPickedRules = {
  'jsdoc/require-description': 2,
  'jsdoc/require-description-complete-sentence': 2,
  'jsdoc/no-multi-asterisks': 2,
  'jsdoc/no-defaults': 2,
  'jsdoc/check-param-names': [
    2,
    { checkDestructured: false, enableFixer: false },
  ],
  'jsdoc/newline-after-description': 2,
  'jsdoc/require-returns-description': 2,
  'jsdoc/check-tag-names': [2, { jsxTags: true }],
  'jsdoc/no-types': 2,
  'jsdoc/require-param-name': 2,
  'jsdoc/require-param-description': 2,
};

const fpHandPickedRules = {
  'fp/no-arguments': 2,
  'fp/no-class': 2,
  'fp/no-delete': 2,
  'fp/no-proxy': 2,
};

const importHandPickedRules = {
  'import/named': 0, // unnecessary. Feature already provided by Typescript.
  'import/namespace': 0, // unnecessary. Feature already provided by Typescript.
  'import/default': 0, // unnecessary. Feature already provided by Typescript.
  'import/no-named-as-default-member': 0, // unnecessary. Feature already provided by Typescript.
  'import/no-unresolved': [2, { commonjs: true, caseSensitiveStrict: true }], // required by eslint-import-resolver-typescript.
  'import/first': 2,
  'import/order': [2, { 'newlines-between': 'never' }],
  'import/no-default-export': 2,
  'import/no-named-as-default': 2,
  'import/consistent-type-specifier-style': [2, 'prefer-inline'],
  'import/no-namespace': 2,
  'import/no-duplicates': [2, { 'prefer-inline': true }],
  'import/newline-after-import': [2, { considerComments: true }],
  // TODO: seems to cause a bug. Needs monitoring.
  // See:
  //  - https://github.com/eslint/eslint/issues/16485
  //  - https://github.com/import-js/eslint-plugin-import/issues?q=is%3Aissue+is%3Aopen+no-unused-modules
  //    - https://github.com/import-js/eslint-plugin-import/issues/2678
  // 'import/no-unused-modules': [
  //   2,
  //   {
  //     missingExports: true,
  //     unusedExports: true,
  //     ignoreExports: ['**/*.config.{js,ts,jsx,tsx}'],
  //   },
  // ],
  'import/no-useless-path-segments': [2, { noUselessIndex: true }],
};

const reactHandPickedRules = {
  'react/prop-types': 0,
  'react/no-unstable-nested-components': [2, { allowAsProps: false }],
  'react/jsx-no-useless-fragment': [2, { allowExpressions: true }],
  'react/function-component-definition': [
    2,
    { namedComponents: 'arrow-function' },
  ],
  'react/jsx-boolean-value': 2,
  'react/jsx-fragments': 2,
  'react/hook-use-state': 2,
  'react/jsx-no-leaked-render': [2, { validStrategies: ['coerce', 'ternary'] }],
  'react/destructuring-assignment': 2,
  'react/jsx-filename-extension': [
    2,
    {
      extensions: ['.tsx'],
      allow: 'as-needed',
    },
  ],
  'react/no-multi-comp': 2,
  'react/no-array-index-key': 2,
  'react/jsx-props-no-spreading': 2,
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

const languageOptionsTypescript = {
  parser: typescriptParser,
  parserOptions: {
    ecmaFeatures: { modules: true },
    project: './tsconfig.json',
  },
};

const languageOptionsTypescriptReact = {
  parser: typescriptParser,
  parserOptions: {
    ecmaFeatures: { modules: true, jsx: true },
    project: './tsconfig.json',
    jsxPragma: null, // useful for typescript x react@17 https://github.com/jsx-eslint/eslint-plugin-react/blob/8cf47a8ac2242ee00ea36eac4b6ae51956ba4411/index.js#L165-L179
  },
};

const reactConfig = [
  {
    files: [supportedFileTypes],
    plugins: {
      react,
    },
    languageOptions: languageOptionsTypescriptReact,
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules, // useful for typescript x react@17 https://github.com/jsx-eslint/eslint-plugin-react/blob/8cf47a8ac2242ee00ea36eac4b6ae51956ba4411/index.js#L165-L179
      ...reactHandPickedRules,
    },
  },
  {
    files: ['**/*{jsx,tsx}'],
    rules: getTsNamingConventionRule({ isTsx: true }),
  },
  {
    files: ['**/*{jsx,tsx}'],
    plugins: { 'only-export-components': reactRefresh },
    rules: {
      'only-export-components/only-export-components': 2,
    },
  },
  {
    files: [supportedFileTypes],
    plugins: {
      'jsx-a11y': reactAccessibility,
    },
    rules: reactAccessibility.configs.recommended.rules,
  },
  {
    files: [supportedFileTypes],
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: reactHooks.configs.recommended.rules,
  },
  // Specific overrides for storybook
  {
    files: ['**/*.stories.tsx'],
    plugins: { 'only-export-components': reactRefresh },
    rules: {
      'only-export-components/only-export-components': 0,
      'react/jsx-filename-extension': [
        2,
        { allow: 'always', extensions: ['.tsx'] },
      ],
    },
  },
];

const lodashConfig = {
  files: [supportedFileTypes],
  plugins: {
    'lodash-f': lodash,
  },
  rules: {
    ...lodash.configs.recommended.rules,
    ...lodashHandPickedRules,
  },
};

const nextjsConfig = {
  files: [supportedFileTypes],
  plugins: {
    '@next/next': nextjs,
  },
  rules: {
    ...nextjs.configs.recommended.rules,
    ...nextjs.configs['core-web-vitals'].rules,
  },
};

const playwrightConfig = {
  files: ['**/*{js,ts}'],
  plugins: {
    playwright,
  },
  rules: {
    ...playwright.configs['playwright-test'].rules,
    ...playwrightHandPickedRules,
  },
};

const jestConfig = {
  files: [
    `**/*.{test,spec}.{${allJsExtensions}}`,
    `**/tests/**`,
    `**/__tests__/**`,
  ],
  plugins: {
    jest,
  },
  languageOptions: {
    globals: jest.environments.globals.globals,
  },
  rules: {
    ...jest.configs.style.rules,
    ...jestHandPickedRules,
    '@typescript-eslint/unbound-method': 0, // see reference: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
    'jest/unbound-method': 2, // we need to overwrite @typescript-eslint/unbound-method
  },
};

const vitestConfig = {
  files: [
    `**/*.{test,spec}.{${allJsExtensions}}`,
    `**/tests/**`,
    `**/__tests__/**`,
  ],
  plugins: {
    jest,
  },
  rules: {
    ...jest.configs.style.rules,
    ...jestHandPickedRules,
    '@typescript-eslint/unbound-method': 0, // see reference: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
    'jest/unbound-method': 2, // we need to overwrite @typescript-eslint/unbound-method
  },
};

const prettierOverrides = {
  files: [supportedFileTypes],
  rules: {
    curly: [2, 'all'],
  },
};

const baseConfig = [
  'eslint:recommended',
  {
    files: [supportedFileTypes],
    languageOptions: languageOptionsTypescript,
  },
  {
    files: [supportedFileTypes],
    plugins: {
      '@typescript-eslint': typescript,
      tsdoc,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...typescript.configs['recommended-requiring-type-checking'].rules,
      ...typescriptHandPickedRules,
      ...getTsNamingConventionRule({ isTsx: false }),
      'tsdoc/syntax': 2,
    },
  },
  {
    files: [supportedFileTypes],
    rules: baseEslintHandPickedRules,
  },
  {
    files: [supportedFileTypes],
    plugins: { fp },
    rules: fpHandPickedRules,
  },
  {
    files: [supportedFileTypes],
    plugins: { etc },
    rules: etcHandPickedRules,
  },
  {
    files: [supportedFileTypes],
    plugins: { '@regru/prefer-early-return': preferEarlyReturn },
    rules: {
      '@regru/prefer-early-return/prefer-early-return': [
        2,
        {
          maximumStatements: 1,
        },
      ],
    },
  },
  {
    files: [supportedFileTypes],
    plugins: { unicorn },
    rules: unicornHandPickedRules,
  },
  {
    files: [supportedFileTypes],
    plugins: { sonarjs },
    rules: {
      ...sonarjs.configs.recommended.rules,
      ...sonarjsHandPickedRules,
    },
  },
  {
    files: [supportedFileTypes],
    plugins: { import: pluginImport },
    rules: importHandPickedRules,
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
        node: true,
      },
    },
  },
  {
    files: storybook.configs.recommended.overrides[0].files,
    plugins: { storybook },
    rules: {
      ...storybook.configs.recommended.overrides[0].rules,
      ...storybook.configs.csf.overrides[0].rules,
      ...storybook.configs['csf-strict'].rules,
      'import/no-default-export': 0,
    },
  },
  {
    files: storybook.configs.recommended.overrides[1].files,
    plugins: { storybook },
    rules: storybook.configs.recommended.overrides[1].rules,
  },
  {
    files: [supportedFileTypes],
    plugins: { jsdoc },
    rules: jsdocHandPickedRules,
    settings: {
      jsdoc: {
        mode: 'typescript',
      },
    },
  },
  {
    files: [`**/*.config.{${allJsExtensions}}`],
    rules: {
      'import/no-default-export': 0,
    },
  },
];

const getExportableConfig = (userConfigChoices = {}) => {
  let exportableConfig = [...baseConfig];

  if (userConfigChoices.react || userConfigChoices.next) {
    // we insert reactConfig this way because it's an array. It's an array because it contains 3 configs: react, react-hooks, react-a11y.
    exportableConfig = [...exportableConfig, ...reactConfig];
  }

  if (userConfigChoices.jest) {
    exportableConfig.push(jestConfig);
  }

  if (userConfigChoices.vitest) {
    exportableConfig.push(vitestConfig);
  }

  if (userConfigChoices.next) {
    exportableConfig.push(nextjsConfig);
  }

  if (userConfigChoices.lodash) {
    exportableConfig.push(lodashConfig);
  }

  if (userConfigChoices.playwright) {
    exportableConfig.push(playwrightConfig);
  }

  exportableConfig.push(prettierConfig);
  exportableConfig.push(prettierOverrides);
  exportableConfig.push({ ignores });

  if (userConfigChoices.files) {
    exportableConfig = exportableConfig.map((configSlice, index) => {
      // the first item in the config is the eslintRecommendedConfig. Because it cannot be filtered (current eslintFlatConfig limitation), we are returning it as-is.
      if (index === 0) {
        return configSlice;
      }

      if (configSlice.ignores?.length > 0) {
        return configSlice;
      }

      return {
        ...configSlice,
        files: userConfigChoices.files,
      };
    });
  }

  return exportableConfig;
};

module.exports = getExportableConfig;
