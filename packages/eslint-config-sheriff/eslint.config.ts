import { sheriff, type SheriffSettings, tseslint } from './src';

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

// @ts-expect-error
export default tseslint.config(sheriff(sheriffOptions), {
  rules: {
    'fsecond/prefer-destructured-optionals': 0,
    '@typescript-eslint/no-unsafe-return': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-unsafe-argument': 0,
    'lodash-f/import-scope': 0,
  },
});
