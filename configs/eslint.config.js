const { cosmiconfigSync } = require('cosmiconfig');
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

const supportedFileTypes = '**/*{js,ts,jsx,tsx}';

const ignores = [
  'node_modules/',
  'dist/',
  'build/',
  'artifacts/',
  'coverage/',
  '.git/',
];

const messages = {
  NO_ACCESS_MODIFIER:
    'There is no need to limit developer access to properties.',
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
    'ClassDeclaration',
    'ClassExpression',
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
  '@typescript-eslint/return-await': 2,
  '@typescript-eslint/no-throw-literal': 2,
  '@typescript-eslint/no-use-before-define': 2,
  '@typescript-eslint/consistent-type-assertions': 2,
  '@typescript-eslint/consistent-type-imports': 2,
  '@typescript-eslint/explicit-module-boundary-types': 2,
  '@typescript-eslint/prefer-readonly-parameter-types': 2,
  '@typescript-eslint/no-invalid-void-type': 2,
  '@typescript-eslint/no-unnecessary-condition': 2,
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
  '@typescript-eslint/prefer-optional-chain': 2,
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
};

const sonarjsHandPickedRules = {
  'sonarjs/cognitive-complexity': 0,
  'sonarjs/prefer-immediate-return': 0,
};

const playwrightHandPickedRules = {
  'playwright/no-force-option': 0,
  'playwright/prefer-lowercase-title': 2,
  'playwright/prefer-to-have-length': 2,
  'playwright/require-top-level-describe': 2,
};

const lodashHandPickedRules = {
  'lodash-f/prefer-lodash-method': 0,
  'lodash-f/import-scope': [2, 'member'],
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

const importHandPickedRules = {
  'import/named': 0, // unnecessary. Feature already provided by Typescript.
  'import/namespace': 0, // unnecessary. Feature already provided by Typescript.
  'import/default': 0, // unnecessary. Feature already provided by Typescript.
  'import/no-named-as-default-member': 0, // unnecessary. Feature already provided by Typescript.
  'import/no-unresolved': [2, { commonjs: true }], // required by eslint-import-resolver-typescript.
  'import/first': 2,
  'import/order': [2, { 'newlines-between': 'never' }],
  'import/named': 2,
  'import/no-default-export': 2,
  'import/no-named-as-default': 2,
  'import/no-duplicates': 2,
  'import/newline-after-import': [2, { considerComments: true }],
  'import/no-unused-modules': [
    2,
    {
      missingExports: true,
      unusedExports: true,
      ignoreExports: '**/*.config.{js,ts,jsx,tsx}',
    },
  ],
  'import/no-useless-path-segments': [2, { noUselessIndex: true }],
};

const reactHandPickedRules = {
  'react/prop-types': 0,
  'react/no-unstable-nested-components': [2, { allowAsProps: false }],
  'react/jsx-no-useless-fragment': [2, { allowExpressions: true }],
  'react/jsx-boolean-value': 2,
  'react/jsx-fragments': 2,
  'react/destructuring-assignment': 2,
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
  },
  {
    files: [supportedFileTypes],
    languageOptions: languageOptionsTypescript,
  },
  {
    files: [supportedFileTypes],
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      ...typescript.configs['eslint-recommended'].rules,
      ...typescript.configs.recommended.rules,
      ...typescript.configs['recommended-requiring-type-checking'].rules,
      ...typescriptHandPickedRules,
    },
  },
  {
    files: [supportedFileTypes],
    rules: baseEslintHandPickedRules,
  },

  {
    files: [supportedFileTypes],
    plugins: {
      unicorn,
    },
    rules: unicornHandPickedRules,
  },
  {
    files: [supportedFileTypes],
    plugins: {
      sonarjs,
    },
    rules: {
      ...sonarjs.configs.recommended.rules,
      ...sonarjsHandPickedRules,
    },
  },
  {
    files: [supportedFileTypes],
    plugins: {
      import: pluginImport,
    },
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
    files: ['**/*.config.{js,ts,jsx,tsx}'],
    rules: {
      'import/no-default-export': 0,
    },
  },
  {
    files: [supportedFileTypes],
    plugins: {
      jsdoc,
    },
    rules: jsdocHandPickedRules,
    settings: {
      jsdoc: {
        mode: 'typescript',
      },
    },
  },
];

let exportableConfig = [...baseConfig];

const explorerSync = cosmiconfigSync('sheriff');
let userConfigChoices = {};

try {
  userConfigChoices = explorerSync.search();
} catch (error) {
  console.warn(
    "Encountered a problem while searching for the 'sheriff' config file. The user choices will not be respected.",
  );
  throw new Error(error);
}

if (!userConfigChoices?.isEmpty && userConfigChoices?.config) {
  if (userConfigChoices.config.react || userConfigChoices.config.next) {
    exportableConfig = [...exportableConfig, ...reactConfig];
  }

  if (userConfigChoices.config.next) {
    exportableConfig.push(nextjsConfig);
  }

  if (userConfigChoices.config.lodash) {
    exportableConfig.push(lodashConfig);
  }

  if (userConfigChoices.config.playwright) {
    exportableConfig.push(playwrightConfig);
  }
}

exportableConfig.push(prettierConfig);
exportableConfig.push(prettierOverrides);
exportableConfig.push({ ignores });

module.exports = exportableConfig;
