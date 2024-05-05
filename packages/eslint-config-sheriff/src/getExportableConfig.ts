import eslintRecommended from '@eslint/js';
import tseslint from 'typescript-eslint';
import unicorn from 'eslint-plugin-unicorn';
import sonarjs from 'eslint-plugin-sonarjs';
import playwright from 'eslint-plugin-playwright';
import jsdoc from 'eslint-plugin-jsdoc';
import lodashPlugin from 'eslint-plugin-lodash-f';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';
import nextjs from '@next/eslint-plugin-next';
import fp from 'eslint-plugin-fp';
import jest from 'eslint-plugin-jest';
import vitest from 'eslint-plugin-vitest';
import preferEarlyReturn from '@regru/eslint-plugin-prefer-early-return';
import tsdoc from 'eslint-plugin-tsdoc';
import storybook from 'eslint-plugin-storybook';
import fsecond from 'eslint-plugin-fsecond';
import arrowReturnStyle from 'eslint-plugin-arrow-return-style';
import stylistic from '@stylistic/eslint-plugin';
import getGitignorePatterns from 'eslint-config-flat-gitignore';
import lodash from 'lodash';
import type { FlatESLintConfig } from 'eslint-define-config';
import { SheriffSettings } from '@sherifforg/types';
import { allJsExtensions, supportedFileTypes, ignores } from './constants';
import { fpHandPickedRules } from './fpHandPickedRules';
import { getBaseEslintHandPickedRules } from './getBaseEslintHandPickedRules';
import { getReactConfig } from './getReactConfig';
import { getTsNamingConventionRule } from './getTsNamingConventionRule';
import { importHandPickedRules } from './importHandPickedRules';
import { jestHandPickedRules } from './jestHandPickedRules';
import { jsdocHandPickedRules } from './jsdocHandPickedRules';
import { lodashHandPickedRules } from './lodashHandPickedRules';
import { playwrightHandPickedRules } from './playwrightHandPickedRules';
import { sonarjsHandPickedRules } from './sonarjsHandPickedRules';
import { typescriptHandPickedRules } from './typescriptHandPickedRules';
import { unicornHandPickedRules } from './unicornHandPickedRules';
import { vitestHandPickedRules } from './vitestHandPickedRules';
import { getAstroConfig } from './getAstroConfig';
import { stylisticHandPickedRules } from './stylisticHandPickedRules';

const getLanguageOptionsTypescript = (
  userChosenTSConfig?: string | string[],
) => {
  return {
    parser: tseslint.parser,
    parserOptions: {
      ecmaFeatures: { modules: true },
      project: userChosenTSConfig || true,
    },
  };
};

export const getLanguageOptionsTypescriptReact = (
  userChosenTSConfig?: string | string[],
) => {
  return {
    parser: tseslint.parser,
    parserOptions: {
      ecmaFeatures: { modules: true, jsx: true },
      project: userChosenTSConfig || true,
      jsxPragma: null, // useful for typescript x react@17 https://github.com/jsx-eslint/eslint-plugin-react/blob/8cf47a8ac2242ee00ea36eac4b6ae51956ba4411/index.js#L165-L179
    },
  };
};

const lodashConfig = {
  files: [supportedFileTypes],
  plugins: {
    'lodash-f': lodashPlugin,
  },
  rules: {
    ...lodashPlugin.configs.recommended.rules,
    ...lodashHandPickedRules,
  },
};

const nextjsConfig = {
  files: [supportedFileTypes],
  plugins: {
    '@next/next': nextjs,
  },
  rules: {
    ...nextjs.configs.recommended.rules,
    ...nextjs.configs['core-web-vitals'].rules,
  },
};

const playwrightConfig = {
  files: [`**/*{${allJsExtensions}}`],
  plugins: {
    playwright,
  },
  rules: {
    ...playwright.configs['playwright-test'].rules,
    ...playwrightHandPickedRules,
  },
};

const getJestConfig = (pathsOverrides?: string[]) => {
  return {
    files: pathsOverrides ?? [
      `**/*.{test,spec}.{${allJsExtensions}}`,
      `**/tests/**/*.{${allJsExtensions}}`,
      `**/__tests__/**/*.{${allJsExtensions}}`,
    ],
    plugins: {
      jest,
    },
    languageOptions: {
      globals: jest.environments.globals.globals,
    },
    rules: {
      ...jest.configs.style.rules,
      ...jestHandPickedRules,
      '@typescript-eslint/unbound-method': 0, // see reference: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
    },
  };
};

const getVitestConfig = (pathsOverrides?: string[]) => {
  return {
    files: pathsOverrides ?? [
      `**/*.{test,spec}.{${allJsExtensions}}`,
      `**/tests/**/*.{${allJsExtensions}}`,
      `**/__tests__/**/*.{${allJsExtensions}}`,
    ],
    plugins: {
      vitest,
    },
    rules: vitestHandPickedRules,
  };
};

const prettierOverrides = {
  files: [supportedFileTypes],
  rules: {
    curly: [2, 'all'],
  },
};

const getBaseConfig = (userConfigChoices: SheriffSettings) => {
  const customTSConfigPath = userConfigChoices.pathsOveriddes?.tsconfigLocation;
  const { noRestrictedSyntaxOverride } = userConfigChoices;
  const hasReact = Boolean(userConfigChoices.react);

  return tseslint.config(
    {
      files: [supportedFileTypes],
      extends: [eslintRecommended.configs.recommended],
    },
    {
      files: [supportedFileTypes],
      //@ts-expect-error
      rules: getBaseEslintHandPickedRules(noRestrictedSyntaxOverride),
    },
    {
      files: [`**/*{${allJsExtensions}}`],
      languageOptions: getLanguageOptionsTypescript(customTSConfigPath),
    },
    {
      files: [supportedFileTypes],
      extends: tseslint.configs.strictTypeChecked,
    },
    {
      files: [supportedFileTypes],
      plugins: {
        '@typescript-eslint': tseslint.plugin,
      },
      rules: {
        ...typescriptHandPickedRules,
        ...getTsNamingConventionRule({ isTsx: false }),
      },
    },
    {
      files: [supportedFileTypes],
      plugins: {
        tsdoc,
      },
      rules: {
        'tsdoc/syntax': 2,
      },
    },
    {
      files: [supportedFileTypes],
      plugins: { '@stylistic': stylistic },
      rules: stylisticHandPickedRules,
    },
    {
      files: [supportedFileTypes],
      plugins: { fp },
      rules: fpHandPickedRules,
    },
    {
      files: [supportedFileTypes],
      plugins: { '@regru/prefer-early-return': preferEarlyReturn },
      rules: {
        '@regru/prefer-early-return/prefer-early-return': [
          2,
          {
            maximumStatements: 1,
          },
        ],
      },
    },
    {
      files: [supportedFileTypes],
      plugins: { unicorn },
      rules: unicornHandPickedRules,
    },
    {
      files: [supportedFileTypes],
      plugins: { sonarjs },
      rules: {
        ...sonarjs.configs.recommended.rules,
        ...sonarjsHandPickedRules,
      },
    },
    {
      files: [supportedFileTypes],
      plugins: { 'arrow-return-style': arrowReturnStyle },
      rules: {
        'arrow-return-style/arrow-return-style': [
          2,
          { namedExportsAlwaysUseExplicitReturn: false },
        ],
        'arrow-return-style/no-export-default-arrow': 2,
      },
    },
    {
      files: [supportedFileTypes],
      plugins: { import: pluginImport },
      rules: importHandPickedRules,
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
          node: true,
        },
      },
    },
    {
      files: [
        '**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)',
        '**/*.story.@(ts|tsx|js|jsx|mjs|cjs)',
      ],
      plugins: { storybook },
      rules: {
        ...storybook.configs.recommended.overrides[0].rules,
        ...storybook.configs.csf.overrides[0].rules,
        ...storybook.configs['csf-strict'].rules,
        'import/no-default-export': 0,
      },
    },
    {
      files: ['**/.storybook/main.@(js|cjs|mjs|ts)'],
      plugins: { storybook },
      rules: storybook.configs.recommended.overrides[1].rules,
    },
    {
      files: [supportedFileTypes],
      plugins: { jsdoc },
      rules: jsdocHandPickedRules,
      settings: {
        jsdoc: {
          mode: 'typescript',
        },
      },
    },
    {
      files: [supportedFileTypes],
      plugins: { fsecond },
      rules: { 'fsecond/prefer-destructured-optionals': 2 },
    },
    getAstroConfig(hasReact, customTSConfigPath),
    {
      files: [`**/*.config.{${allJsExtensions}}`],
      rules: {
        'import/no-default-export': 0,
      },
    },
    {
      files: [supportedFileTypes],
      linterOptions: {
        reportUnusedDisableDirectives: 'error',
      },
    },
  );
};

export const getExportableConfig = (
  userConfigChoices: SheriffSettings,
  areAllRulesForced?: boolean,
): FlatESLintConfig[] => {
  if (!userConfigChoices) {
    throw new Error('No settings provided.');
  }

  let exportableConfig = [...getBaseConfig(userConfigChoices)];

  if (userConfigChoices.react || userConfigChoices.next) {
    // we insert reactConfig this way because it's an array. It's an array because it contains multiple configs, currently: react, react-hooks, react-a11y and react-refresh.
    exportableConfig = [
      ...exportableConfig,
      ...getReactConfig(userConfigChoices.pathsOveriddes?.tsconfigLocation),
    ];
  }

  if (
    !areAllRulesForced &&
    userConfigChoices.jest &&
    userConfigChoices.vitest
  ) {
    throw new Error(
      'Jest and Vitest support cannot be activated at once. Please choose one or the other.',
    );
  }

  if (userConfigChoices.jest) {
    exportableConfig.push(
      getJestConfig(userConfigChoices.pathsOveriddes?.tests),
    );
  }

  if (userConfigChoices.vitest) {
    exportableConfig.push(
      //@ts-expect-error
      getVitestConfig(userConfigChoices.pathsOveriddes?.tests),
    );
  }

  if (userConfigChoices.next) {
    exportableConfig.push(nextjsConfig);
  }

  if (userConfigChoices.lodash) {
    exportableConfig.push(lodashConfig);
  }

  if (userConfigChoices.playwright) {
    exportableConfig.push(playwrightConfig);
  }

  exportableConfig.push(eslintConfigPrettier);
  //@ts-expect-error
  exportableConfig.push(prettierOverrides);

  if (userConfigChoices.files) {
    const allowedPatterns = userConfigChoices.files.map(
      (globPattern) => `!${globPattern}`,
    );

    exportableConfig = exportableConfig.map((configSlice) => {
      if (configSlice.ignores?.length && configSlice.ignores.length > 0) {
        return configSlice;
      }

      return {
        ...configSlice,
        ignores: ['**/*', ...allowedPatterns],
      };
    });
  }

  const hasIgnoresRecommended = lodash.isBoolean(
    userConfigChoices.ignores?.recommended,
  )
    ? userConfigChoices.ignores?.recommended
    : true;

  const hasIgnoresInheritedFromGitignore = lodash.isBoolean(
    userConfigChoices.ignores?.inheritedFromGitignore,
  )
    ? userConfigChoices.ignores?.inheritedFromGitignore
    : true;

  exportableConfig.push({
    ignores: [
      ...(hasIgnoresRecommended ? ignores : []),
      ...(hasIgnoresInheritedFromGitignore
        ? getGitignorePatterns({ strict: false }).ignores
        : []),
    ],
  });

  return exportableConfig as FlatESLintConfig[];
};
