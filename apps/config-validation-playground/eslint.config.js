import { sheriff, tseslint } from 'eslint-config-sheriff';

const sheriffOptions = {
  react: true,
  lodash: true,
  astro: true,
  remeda: true,
  next: false,
  astro: true,
  playwright: true,
  jest: false,
  vitest: true,
};

export default tseslint.config(sheriff(sheriffOptions), {
  rules: {
    'astro/semi': 0,
    'astro/jsx-a11y/alt-text': 2,
  },
});
