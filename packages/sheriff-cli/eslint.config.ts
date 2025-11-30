import { defineConfig } from 'eslint/config';
import { sheriff } from 'eslint-config-sheriff';

const sheriffOptions = {
  react: false,
  lodash: false,
  remeda: true,
  next: false,
  astro: false,
  playwright: false,
  jest: false,
  vitest: false,
  tsconfigRootDir: import.meta.dirname,
};

// @ts-expect-error
export default defineConfig(sheriff(sheriffOptions), {
  rules: {
    'fsecond/prefer-destructured-optionals': 0,
  },
});
