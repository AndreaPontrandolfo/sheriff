import tseslint from 'typescript-eslint';
import type { TSESLint } from '@typescript-eslint/utils';

export const getLanguageOptionsTypescript = (
  userChosenTSConfig?: string | string[],
): TSESLint.FlatConfig.LanguageOptions => {
  return {
    parser: tseslint.parser,
    parserOptions: {
      ecmaFeatures: { modules: true },
      project: userChosenTSConfig || true,
    },
  };
};
