import lodash from 'lodash';
import tseslint from 'typescript-eslint';
import type { TsProjectType, TsProjectTypeResolution } from '@sherifforg/types';

export const getLanguageOptionsTypescript = (
  tsProjectType: TsProjectType = 'projectService',
  tsconfigRootDir?: string,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
) => {
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
      ...(lodash.isUndefined(tsconfigRootDir) ? {} : { tsconfigRootDir }),
    },
  };
};
