import astro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import type { TSESLint } from '@typescript-eslint/utils';

// eslint-plugin-astro defines the "jsx-a11y" plugin which conflicts with the original plugin
// The last config object in astro.configs["flat/jsx-a11y-strict"] is the one that defines the "jsx-a11y" plugin
const baseAstroJsxA11yConfig = astro.configs['flat/jsx-a11y-strict'].slice(
  0,
  -1,
);
// We then grab that last config so we can get the rules and the plugin object
const astroJsxA11yConfig = astro.configs['flat/jsx-a11y-strict'].pop();
const astroJsxA11yPlugin = astroJsxA11yConfig?.plugins?.['jsx-a11y'] ?? {};
const astroJsxA11yRules = astroJsxA11yConfig?.rules ?? {};

export const getAstroConfig = (
  hasReact: boolean,
  customTSConfigPath: string | string[] | undefined,
): TSESLint.FlatConfig.ConfigArray => {
  return tseslint.config(
    astro.configs['flat/recommended'],
    hasReact
      ? {
          extends: [baseAstroJsxA11yConfig],
          plugins: {
            'astro/jsx-a11y': astroJsxA11yPlugin,
          },
          rules: astroJsxA11yRules,
        }
      : {},
    {
      files: ['**/*.astro'],
      languageOptions: {
        parserOptions: {
          project: customTSConfigPath || true,
          extraFileExtensions: ['.astro'], // this is probably already included in the recommended preset, but we are keeping it for safety.
        },
      },
      settings: {
        // 'import/core-modules': [
        //   'astro:actions',
        //   'astro:assets',
        //   'astro:db',
        //   'astro:content',
        //   'astro:container',
        //   'astro:env',
        //   'astro:i18n',
        //   'astro:middleware',
        //   'astro:transitions',
        //   'astro:transitions/client',
        // ],
        'import/parsers': {
          'astro-eslint-parser': ['.astro'],
          '@typescript-eslint/parser': ['.ts', '.tsx', 'mts', 'cts'],
          espree: ['.js'],
        },
      },
    },
  );
};
