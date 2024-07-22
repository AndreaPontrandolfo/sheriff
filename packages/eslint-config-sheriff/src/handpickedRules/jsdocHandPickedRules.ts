import type { TSESLint } from '@typescript-eslint/utils';

export const jsdocHandPickedRules = {
  'jsdoc/require-description': 2,
  'jsdoc/require-description-complete-sentence': 2,
  'jsdoc/require-hyphen-before-param-description': 2,
  'jsdoc/require-returns-description': 2,
  'jsdoc/require-param-name': 2,
  'jsdoc/require-param-description': 2,
  'jsdoc/require-asterisk-prefix': 2,
  'jsdoc/no-types': 2,
  'jsdoc/no-multi-asterisks': 2,
  'jsdoc/no-defaults': 2,
  'jsdoc/no-blank-block-descriptions': 2,
  'jsdoc/check-indentation': 2,
  'jsdoc/check-tag-names': [2, { jsxTags: true }],
  'jsdoc/check-param-names': [
    2,
    { checkDestructured: false, enableFixer: false },
  ],
  'jsdoc/sort-tags': 2,
  'jsdoc/tag-lines': [2, 'any', { startLines: 1 }],
} as const satisfies TSESLint.FlatConfig.Rules;
