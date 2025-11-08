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
  tsconfigRootDir: import.meta.dirname,
};

// eslint-disable-next-line @typescript-eslint/no-deprecated
export default tseslint.config(
  sheriff(sheriffOptions),
  {
    rules: {
      'func-style': 0,
      'no-negated-condition': 0,
      'no-nested-ternary': 0,
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/restrict-template-expressions': 0,
      '@typescript-eslint/await-thenable': 0,
      '@typescript-eslint/no-unsafe-argument': 0,
      '@typescript-eslint/require-await': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-unsafe-call': 0,
      '@typescript-eslint/no-unsafe-member-access': 0,
      '@typescript-eslint/restrict-plus-operands': 0,
      '@typescript-eslint/naming-convention': 0,
      '@typescript-eslint/no-unnecessary-condition': 0,
      'react/function-component-definition': 0,
      'lodash-f/prefer-lodash-typecheck': 0,
      'fsecond/no-inline-interfaces': 0,
    },
  },
  {
    ignores: ['src/components/ui/**/*', 'src/components/magicui/**/*', '*.mjs'],
  },
);
