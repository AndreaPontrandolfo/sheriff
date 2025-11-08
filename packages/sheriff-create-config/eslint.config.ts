import { sheriff, type SheriffSettings, tseslint } from 'eslint-config-sheriff';

const sheriffOptions: SheriffSettings = {
  react: false,
  lodash: true,
  remeda: false,
  next: false,
  astro: false,
  playwright: false,
  jest: false,
  vitest: false,
  tsconfigRootDir: import.meta.dirname,
};

// eslint-disable-next-line @typescript-eslint/no-deprecated
export default tseslint.config(sheriff(sheriffOptions), {
  rules: {
    'fsecond/prefer-destructured-optionals': 0,
  },
});
