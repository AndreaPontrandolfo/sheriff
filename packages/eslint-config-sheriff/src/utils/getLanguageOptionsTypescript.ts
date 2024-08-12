import { getLegacyCompatDirname } from './getLegacyCompatDirname';

export const getLanguageOptionsTypescript = (
  disableProjectService: boolean,
) => {
  return {
    parserOptions: {
      ecmaFeatures: { modules: true },
      ...(disableProjectService ? {} : { projectService: true }),
      tsconfigRootDir: disableProjectService
        ? undefined
        : getLegacyCompatDirname(),
    },
  };
};
