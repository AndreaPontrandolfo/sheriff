import globals from 'globals';
import { getLegacyCompatDirname } from './getLegacyCompatDirname';

export const getLanguageOptionsTypescriptReact = (
  disableProjectService: boolean,
) => {
  return {
    parserOptions: {
      ecmaFeatures: { modules: true, jsx: true },
      ...(disableProjectService ? {} : { projectService: true }),
      tsconfigRootDir: disableProjectService
        ? undefined
        : getLegacyCompatDirname(),
      jsxPragma: null, // useful for typescript x react@17 https://github.com/jsx-eslint/eslint-plugin-react/blob/8cf47a8ac2242ee00ea36eac4b6ae51956ba4411/index.js#L165-L179
    },
    globals: {
      ...globals.browser,
    },
  };
};
