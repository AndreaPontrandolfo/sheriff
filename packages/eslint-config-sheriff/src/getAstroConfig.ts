import astro from 'eslint-plugin-astro';
import lodash from 'lodash';
import tseslint from 'typescript-eslint';
import type { TSESLint } from '@typescript-eslint/utils';

export const getAstroConfig = (
  hasReact: boolean,
  customTSConfigPath: string | string[] | undefined,
): TSESLint.FlatConfig.ConfigArray => {
  return tseslint.config({
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        project: customTSConfigPath || true,
      },
    },
    settings: {
      'import/core-modules': [
        'astro:actions',
        'astro:assets',
        'astro:db',
        'astro:content',
        'astro:container',
        'astro:env',
        'astro:i18n',
        'astro:middleware',
        'astro:transitions',
        'astro:transitions/client',
      ],
      'import/parsers': {
        'astro-eslint-parser': ['.astro'],
        '@typescript-eslint/parser': ['.ts', '.tsx'],
        espree: ['.js'],
      },
    },
    extends: lodash.compact([
      astro.configs.recommended,
      hasReact ? astro.configs['jsx-a11y-strict'] : null,
    ]),
  });
};
