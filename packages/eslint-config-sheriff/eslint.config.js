// @ts-check
import sheriff from 'eslint-config-sheriff';
import { defineFlatConfig } from 'eslint-define-config';

/**
 * @import { SheriffSettings } from '@sherifforg/types';
 */

const sheriffOptions = /** @satisfies {SheriffSettings} */ ({
  react: false,
  next: false,
  lodash: true,
  playwright: false,
  jest: false,
  vitest: false,
});

export default defineFlatConfig([
  ...sheriff(sheriffOptions),
  {
    files: ['**/*.ts'],
    rules: {
      'fsecond/prefer-destructured-optionals': 'off',
    },
  },
]);
