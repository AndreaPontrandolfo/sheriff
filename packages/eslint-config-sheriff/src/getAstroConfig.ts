import astro from 'eslint-plugin-astro';
import lodash from 'lodash';
import tseslint from 'typescript-eslint';
import type { TSESLint } from '@typescript-eslint/utils';

// console.log(astro.configs.recommended);
console.log('A11Y', astro.configs['jsx-a11y-strict']);

export const getAstroConfig = (
  hasReact: boolean,
  customTSConfigPath: string | string[] | undefined,
): TSESLint.FlatConfig.ConfigArray => {
  return tseslint.config(
    astro.configs.recommended,
    hasReact ? astro.configs['jsx-a11y-strict'] : [],
    {
      files: ['**/*.astro'],
      languageOptions: {
        parserOptions: {
          project: true,
          extraFileExtensions: ['.astro'],
        },
      },
    },
  );
  // return tseslint.config({
  //   files: ['**/*.astro'],
  //   languageOptions: {
  //     parserOptions: {
  //       project: customTSConfigPath || true,
  //       extraFileExtensions: ['.astro'], // this is probably already included in the recommended preset, but we are keeping it for safety.
  //     },
  //   },
  // settings: {
  //   'import/core-modules': [
  //     'astro:actions',
  //     'astro:assets',
  //     'astro:db',
  //     'astro:content',
  //     'astro:container',
  //     'astro:env',
  //     'astro:i18n',
  //     'astro:middleware',
  //     'astro:transitions',
  //     'astro:transitions/client',
  //   ],
  //   'import/parsers': {
  //     'astro-eslint-parser': ['.astro'],
  //     '@typescript-eslint/parser': ['.ts', '.tsx'],
  //     espree: ['.js'],
  //   },
  // },
  // extends: lodash.compact([
  //   astro.configs.recommended,
  //   // hasReact ? astro.configs['jsx-a11y-strict'] : null,
  // ]),
  // });
};
