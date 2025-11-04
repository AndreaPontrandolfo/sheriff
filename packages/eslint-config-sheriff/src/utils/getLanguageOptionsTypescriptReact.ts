import globals from "globals";
import tseslint from "typescript-eslint";
import type { TSESLint } from "@typescript-eslint/utils";

export const getLanguageOptionsTypescriptReact = (
  userChosenTSConfig?: string | string[],
): TSESLint.FlatConfig.LanguageOptions => {
  return {
    parser: tseslint.parser,
    parserOptions: {
      ecmaFeatures: { modules: true, jsx: true },
      project: userChosenTSConfig || true,
      jsxPragma: null, // useful for typescript x react@17 https://github.com/jsx-eslint/eslint-plugin-react/blob/8cf47a8ac2242ee00ea36eac4b6ae51956ba4411/index.js#L165-L179
    },
    globals: {
      ...globals.browser,
    },
  };
};
