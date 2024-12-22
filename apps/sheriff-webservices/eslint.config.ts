import { sheriff, type SheriffSettings } from 'eslint-config-sheriff';
import { defineFlatConfig } from 'eslint-define-config';

const sheriffOptions: SheriffSettings = {
  react: false,
  lodash: true,
  remeda: false,
  next: false,
  astro: false,
  playwright: false,
  jest: false,
  vitest: false,
};

export default defineFlatConfig([
  ...sheriff(sheriffOptions),
  {
    ignores: [
      '**/dist/**/*',
      '**/node_modules/**/*',
      '**/turbo/**/*',
      'eslint.config.js',
      'src/handledModules.d.ts',
    ],
  },
]);
