import { sheriff, tseslint } from 'eslint-config-sheriff';

const sheriffOptions = {
  react: true,
  lodash: true,
  astro: true,
  remeda: true,
  next: false,
  astro: true,
  playwright: true,
  storybook: true,
  jest: false,
  vitest: true,
  tsconfigRootDir: import.meta.dirname,
};

export default tseslint.config(sheriff(sheriffOptions), {
  rules: {
    'astro/semi': 0,
  },
});
