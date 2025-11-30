import { defineConfig } from 'eslint/config';
import { sheriff, type SheriffSettings } from 'eslint-config-sheriff';

const sheriffOptions: SheriffSettings = {
  react: false,
  lodash: true,
  remeda: false,
  next: false,
  astro: false,
  playwright: false,
  jest: false,
  vitest: false,
  tsconfigRootDir: import.meta.dirname,
};

export default defineConfig(sheriff(sheriffOptions), {
  rules: {
    'fsecond/prefer-destructured-optionals': 0,
  },
});
