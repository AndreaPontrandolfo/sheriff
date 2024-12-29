import { sheriff } from 'eslint-config-sheriff';
import { defineFlatConfig } from 'eslint-define-config';

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

export default defineFlatConfig([...sheriff(sheriffOptions)]);
