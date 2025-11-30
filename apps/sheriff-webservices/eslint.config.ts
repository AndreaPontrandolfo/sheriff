import { defineConfig } from 'eslint/config';
import { sheriff } from 'eslint-config-sheriff';

const sheriffOptions = {
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

// @ts-expect-error
export default defineConfig(sheriff(sheriffOptions), {
  ignores: [
    '**/dist/**/*',
    '**/node_modules/**/*',
    '**/turbo/**/*',
    'eslint.config.js',
    'src/handledModules.d.ts',
  ],
});
