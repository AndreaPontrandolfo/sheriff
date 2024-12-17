import sheriff from 'eslint-config-sheriff';
import { defineFlatConfig } from 'eslint-define-config';

const sheriffOptions = {
  react: true,
  lodash: true,
  astro: true,
  remeda: true,
  next: true,
  playwright: true,
  jest: false,
  vitest: true,
};

export default defineFlatConfig([
  ...sheriff(sheriffOptions),
  {
    rules: {
      'astro/semi': 0,
    },
  },
]);
