import { sheriff, type SheriffSettings } from 'eslint-config-sheriff';
import { defineFlatConfig } from 'eslint-define-config';

const sheriffOptions: SheriffSettings = {
  react: false,
  next: false,
  lodash: true,
  remeda: false,
  astro: false,
  playwright: false,
  jest: false,
  vitest: false,
};

export default defineFlatConfig([
  ...sheriff(sheriffOptions),
  {
    rules: {
      'fsecond/prefer-destructured-optionals': 0,
      '@typescript-eslint/no-unsafe-return': 0,
      '@typescript-eslint/no-unsafe-member-access': 0,
      '@typescript-eslint/no-unsafe-argument': 0,
      'sonarjs/no-duplicate-string': 0,
      'lodash-f/import-scope': 0,
    },
  },
  {
    ignores: ['tsup.config.js'],
  },
]);
