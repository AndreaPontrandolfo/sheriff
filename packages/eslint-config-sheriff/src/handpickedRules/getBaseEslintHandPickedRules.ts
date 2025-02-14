/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import confusingBrowserGlobals from 'confusing-browser-globals';
import type { TSESLint } from '@typescript-eslint/utils';
import { getIndexedBaseNoRestrictedSyntaxRules } from '../utils/getIndexedBaseNoRestrictedSyntaxRules';

export const getBaseEslintHandPickedRules = () => {
  return {
    'func-style': 2,
    'no-promise-executor-return': 2,
    'no-unreachable-loop': 2,
    'no-caller': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-implicit-coercion': 2,
    'no-multi-str': 2,
    'no-negated-condition': 2,
    'no-new-wrappers': 2,
    'no-object-constructor': 2,
    strict: [2, 'never'],
    'no-octal-escape': 2,
    'no-proto': 2,
    'no-sequences': [2, { allowInParentheses: false }],
    'no-unmodified-loop-condition': 2,
    'no-void': 2,
    'no-array-constructor': 2,
    'no-multi-assign': 2,
    'no-plusplus': 2,
    'prefer-destructuring': [
      2,
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'no-useless-call': 2,
    'prefer-object-has-own': 2,
    'no-constant-binary-expression': 2,
    'no-lone-blocks': 2,
    'no-eval': 2,
    'no-return-assign': [2, 'always'],
    'no-else-return': [2, { allowElseIf: false }],
    'prefer-template': 2,
    'operator-assignment': [2, 'never'],
    'logical-assignment-operators': [2, 'never'],
    'prefer-object-spread': 2,
    'prefer-rest-params': 2,
    'no-param-reassign': 2,
    'no-redeclare': 2,
    'no-useless-computed-key': 2,
    'array-callback-return': [2, { allowImplicit: true, checkForEach: true }],
    'object-shorthand': 2,
    'no-unneeded-ternary': [2, { defaultAssignment: false }],
    'require-atomic-updates': 2,
    'no-nested-ternary': 2,
    'no-console': [2, { allow: ['warn', 'error', 'debug', 'info', 'table'] }],
    curly: [2, 'all'],
    eqeqeq: 2,
    'prefer-arrow-callback': 2,
    'no-useless-assignment': 2,
    'no-restricted-imports': [
      2,
      {
        paths: [
          {
            name: 'prop-types',
            message: 'Dont use prop-types. Use Typescript instead.',
          },
        ],
        patterns: [
          {
            group: ['node_modules'],
            message: 'Imports from node_modules are likely a user mistake.',
            importNamePattern: '^', // this is to allow side-effects imports. See: https://github.com/eslint/eslint/pull/18997.
          },
          {
            group: ['dist'],
            message: 'Imports from dist are likely a user mistake.',
            importNamePattern: '^', // this is to allow side-effects imports. See: https://github.com/eslint/eslint/pull/18997.
          },
        ],
      },
    ],
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
    'no-restricted-syntax': [2, ...getIndexedBaseNoRestrictedSyntaxRules()],
    'no-restricted-globals': [2, ...confusingBrowserGlobals],
    'no-return-await': 0, // we are using the typescript-eslint version
    'no-use-before-define': 0, // we are using the typescript-eslint version
    'no-unused-expressions': 0, // we are using the typescript-eslint version
    'no-empty-function': 0, // we are using the typescript-eslint version
    'dot-notation': 0, // we are using the typescript-eslint version
    'no-shadow': 0, // we are using the typescript-eslint version
    'default-param-last': 0, // we are using the typescript-eslint version
    'arrow-body-style': 0, // we are using the eslint-plugin-arrow-return-style version
  } as const satisfies TSESLint.FlatConfig.Rules;
};
