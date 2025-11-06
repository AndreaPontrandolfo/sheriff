import astro from 'eslint-plugin-astro';
import { isUndefined } from 'lodash';
import tseslint from 'typescript-eslint';
import { allJsExtensions } from '@sherifforg/constants';
import type { TsProjectType, TsProjectTypeResolution } from '@sherifforg/types';
import type { TSESLint } from '@typescript-eslint/utils';
import { getTsNamingConventionRule } from './utils/getTsNamingConventionRule';

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
  tsProjectType: TsProjectType = 'projectService',
  tsconfigRootDir?: string,
): TSESLint.FlatConfig.ConfigArray => {
  let tsProjectTypeResolution: TsProjectTypeResolution = {};

  if (tsProjectType === 'project') {
    tsProjectTypeResolution = {
      project: true,
    };
  }

  if (tsProjectType === 'projectService') {
    tsProjectTypeResolution = {
      projectService: true,
    };
  }

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
          parser: tseslint.parser,
          ...tsProjectTypeResolution,
          ecmaFeatures: { modules: true },
          ...(isUndefined(tsconfigRootDir) ? {} : { tsconfigRootDir }),
          extraFileExtensions: ['.astro'], // this is probably already included in the recommended preset, but we are keeping it for safety.
        },
      },
      settings: {
        'import/parsers': {
          'astro-eslint-parser': ['.astro'],
          '@typescript-eslint/parser': ['.ts', '.tsx', 'mts', 'cts'],
          espree: ['.js'],
        },
      },
      rules: getTsNamingConventionRule({ isTsx: true }),
    },
    {
      files: ['**/*.astro/*.ts'], // Virtual files created by eslint-plugin-astro.
      languageOptions: {
        parserOptions: {
          parser: tseslint.parser,
          ecmaFeatures: { modules: true },
          ...tsProjectTypeResolution,
          ...(isUndefined(tsconfigRootDir) ? {} : { tsconfigRootDir }),
        },
      },
    },
    {
      files: [`**/src/pages/**/*.{${allJsExtensions}}`],
      rules: getTsNamingConventionRule({ isTsx: false, isAstroRoute: true }),
    },
  );
};
