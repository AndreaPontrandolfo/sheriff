import { sheriff, tseslint } from 'eslint-config-sheriff';

const sheriffOptions = {
  react: false,
  lodash: false,
  remeda: true,
  next: false,
  astro: false,
  playwright: false,
  jest: false,
  vitest: false,
};

export default tseslint.config(sheriff(sheriffOptions), {
  ignores: [
    '**/dist/**/*',
    '**/node_modules/**/*',
    '**/turbo/**/*',
    'eslint.config.js',
    'src/handledModules.d.ts',
  ],
});
