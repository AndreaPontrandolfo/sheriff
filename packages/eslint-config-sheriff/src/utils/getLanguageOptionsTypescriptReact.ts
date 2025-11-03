import globals from 'globals';
import tseslint from 'typescript-eslint';
import type { TSESLint } from '@typescript-eslint/utils';
import type { TsProjectType } from '@sherifforg/types';
import { isNull } from 'lodash';

export const getLanguageOptionsTypescriptReact = (
  tsProjectType: TsProjectType,
): TSESLint.FlatConfig.LanguageOptions => {
  if (isNull(tsProjectType) || tsProjectType === false) {
    return {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { modules: true, jsx: true },
        jsxPragma: null, // useful for typescript x react@17 https://github.com/jsx-eslint/eslint-plugin-react/blob/8cf47a8ac2242ee00ea36eac4b6ae51956ba4411/index.js#L165-L179
      },
      globals: globals.browser,
    };
  }

  if (tsProjectType === 'project') {
    return {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { modules: true, jsx: true },
        project: true,
        tsconfigRootDir: import.meta.dirname,
        jsxPragma: null, // useful for typescript x react@17 https://github.com/jsx-eslint/eslint-plugin-react/blob/8cf47a8ac2242ee00ea36eac4b6ae51956ba4411/index.js#L165-L179
      },
      globals: globals.browser,
    };
  }

  return {
    parser: tseslint.parser,
    parserOptions: {
      ecmaFeatures: { modules: true, jsx: true },
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
      jsxPragma: null, // useful for typescript x react@17 https://github.com/jsx-eslint/eslint-plugin-react/blob/8cf47a8ac2242ee00ea36eac4b6ae51956ba4411/index.js#L165-L179
    },
    globals: globals.browser,
  };
};
