import { NoRestrictedSyntaxOverride } from '@sheriff/types';
import { baseNoRestrictedSyntaxRules } from './constants';
import { getFilteredBaseNoRestrictedSyntax } from './getFilteredBaseNoRestrictedSyntax';

export const getBaseEslintHandPickedRules = (
  noRestrictedSyntaxOverride?: NoRestrictedSyntaxOverride,
) => {
  return {
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
    'no-param-reassign': [2, { props: true }],
    'no-redeclare': 2,
    'array-callback-return': [2, { allowImplicit: true, checkForEach: true }],
    'object-shorthand': 2,
    'no-unneeded-ternary': [2, { defaultAssignment: false }],
    'require-atomic-updates': 2,
    'no-nested-ternary': 2,
    'no-console': [2, { allow: ['warn', 'error', 'debug'] }],
    eqeqeq: 2,
    'prefer-arrow-callback': 2,
    'arrow-body-style': [2, 'as-needed'],
    'no-restricted-syntax': [
      2,
      ...getFilteredBaseNoRestrictedSyntax(
        baseNoRestrictedSyntaxRules,
        noRestrictedSyntaxOverride?.allows,
      ),
      ...(noRestrictedSyntaxOverride?.adjuncts
        ? noRestrictedSyntaxOverride.adjuncts
        : []),
    ],
    'no-undef': 0,
    'no-dupe-class-members': 0,
    'constructor-super': 0,
    'getter-return': 0,
    'no-const-assign': 0,
    'no-dupe-args': 0,
    'no-dupe-keys': 0,
    'no-func-assign': 0,
    'no-new-symbol': 0,
    'no-obj-calls': 0,
    'no-setter-return': 0,
    'no-this-before-super': 0,
    'no-unreachable': 0,
    'no-unsafe-negation': 0,
    'no-return-await': 0,
    'no-throw-literal': 0,
    'no-use-before-define': 0,
    'no-unused-expressions': 0,
    'no-empty-function': 0,
    'require-await': 0,
    'no-unused-vars': 0,
    'dot-notation': 0,
    'no-shadow': 0,
    'default-param-last': 0, // we are using the @typescript/eslint version
  };
};
