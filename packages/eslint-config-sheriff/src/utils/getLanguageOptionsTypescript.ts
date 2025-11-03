import tseslint from 'typescript-eslint';
import type { TsProjectType, TsProjectTypeResolution } from '@sherifforg/types';
import type { TSESLint } from '@typescript-eslint/utils';

export const getLanguageOptionsTypescript = (
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
      ecmaFeatures: { modules: true },
      ...tsProjectTypeResolution,
      tsconfigRootDir: import.meta.dirname,
    },
  };
};
