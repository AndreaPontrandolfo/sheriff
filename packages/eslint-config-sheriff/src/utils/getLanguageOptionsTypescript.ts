import tseslint from 'typescript-eslint';
import type { TsProjectType } from '@sherifforg/types';
import type { TSESLint } from '@typescript-eslint/utils';
import { isNull } from 'lodash';

export const getLanguageOptionsTypescript = (
  tsProjectType: TsProjectType,
): TSESLint.FlatConfig.LanguageOptions => {
  if (isNull(tsProjectType) || tsProjectType === false) {
    return {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { modules: true },
      },
    };
  }

  if (tsProjectType === 'project') {
    return {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { modules: true },
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    };
  }

  return {
    parser: tseslint.parser,
    parserOptions: {
      ecmaFeatures: { modules: true },
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  };
};
