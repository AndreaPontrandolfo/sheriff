import { sheriff, type SheriffSettings, tseslint } from 'eslint-config-sheriff';

const sheriffOptions: SheriffSettings = {
  react: true,
  lodash: true,
  remeda: false,
  next: true,
  astro: false,
  playwright: false,
  storybook: true,
  jest: false,
  vitest: false,
};

export default tseslint.config(sheriff(sheriffOptions));
