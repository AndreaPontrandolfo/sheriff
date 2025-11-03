import globals from 'globals';
import tseslint from 'typescript-eslint';
import type { TSESLint } from '@typescript-eslint/utils';
import type { TsProjectType, TsProjectTypeResolution } from '@sherifforg/types';

export const getLanguageOptionsTypescriptReact = (
  tsProjectType: TsProjectType = 'projectService',
): TSESLint.FlatConfig.LanguageOptions => {
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

  return {
    parser: tseslint.parser,
    parserOptions: {
      ecmaFeatures: { modules: true, jsx: true },
      ...tsProjectTypeResolution,
      tsconfigRootDir: import.meta.dirname,
      jsxPragma: null, // useful for typescript x react@17 https://github.com/jsx-eslint/eslint-plugin-react/blob/8cf47a8ac2242ee00ea36eac4b6ae51956ba4411/index.js#L165-L179
    },
    globals: globals.browser,
  };
};
