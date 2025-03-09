import { sheriff, tseslint } from 'eslint-config-sheriff';

const sheriffOptions = {
  react: true,
  lodash: true,
  remeda: true,
  next: true,
  astro: true,
  playwright: true,
  storybook: true,
  jest: false,
  vitest: true,
};

export default tseslint.config(
  sheriff(sheriffOptions),
  {
    rules: {
      'astro/semi': 0,
    },
  },
  {
    ignores: ['**/*.astro'],
  },
);
