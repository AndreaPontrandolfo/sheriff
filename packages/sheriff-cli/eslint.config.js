import { sheriff, tseslint } from 'eslint-config-sheriff';

const sheriffOptions = {
  react: false,
  lodash: false,
  remeda: true,
  next: false,
  astro: false,
  playwright: false,
  jest: false,
  vitest: false,
  tsconfigRootDir: import.meta.dirname,
};

export default tseslint.config(sheriff(sheriffOptions), {
  rules: {
    'fsecond/prefer-destructured-optionals': 0,
  },
});
