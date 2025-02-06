import { sheriff, tseslint } from 'eslint-config-sheriff';

const sheriffOptions = {
  react: true,
  lodash: true,
  remeda: true,
  next: true,
  astro: true,
  playwright: true,
  jest: true,
  vitest: true,
};

export default tseslint(sheriff(sheriffOptions));
