import { sheriff, tseslint } from 'eslint-config-sheriff';

const sheriffOptions = {
  react: false,
  lodash: true,
  remeda: false,
  next: false,
  astro: false,
  playwright: false,
  jest: false,
  vitest: false,
};

export default tseslint.config(sheriff(sheriffOptions));
