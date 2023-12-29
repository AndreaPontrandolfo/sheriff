import sheriff from 'eslint-config-sheriff';
import { defineFlatConfig } from 'eslint-define-config';

const sheriffOptions = {
  react: false,
  lodash: true,
  next: false,
  playwright: false,
  jest: false,
  vitest: false,
};

export default defineFlatConfig([
  ...sheriff(sheriffOptions),
  {
    rules: {
      'fsecond/prefer-destructured-optionals': 0,
    },
  },
]);
