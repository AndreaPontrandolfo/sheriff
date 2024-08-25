import tseslint from 'typescript-eslint';

export const getLanguageOptionsTypescript = (
  userChosenTSConfig?: string | string[],
) => {
  return {
    parser: tseslint.parser,
    parserOptions: {
      ecmaVersion: 'latest',
      ecmaFeatures: { modules: true },
      project: userChosenTSConfig || true,
    },
  };
};
