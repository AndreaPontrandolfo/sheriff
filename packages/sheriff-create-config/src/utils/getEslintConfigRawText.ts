import { sheriffStartingOptions } from '@sherifforg/constants';
import { setSheriffConfig } from './setSheriffConfig';
import { throwError } from './throwError';

export const getEslintConfigRawText = async (
  fileType: 'ts' | 'esm',
  customProjectRootPath: string | null,
): Promise<string> => {
  let sheriffConfig = sheriffStartingOptions;

  try {
    sheriffConfig = await setSheriffConfig(customProjectRootPath);
  } catch (error) {
    throwError(
      "Couldn't infer Sheriff user preferences automatically. Setting every option to false...",
      { error },
    );
  }

  const eslintConfigRawText = {
    ts: `import sheriff from 'eslint-config-sheriff';
import { defineFlatConfig } from 'eslint-define-config';
import type { SheriffSettings } from '@sherifforg/types';

const sheriffOptions: SheriffSettings = ${JSON.stringify(
      sheriffConfig,
      null,
      2,
    )};

export default defineFlatConfig([...sheriff(sheriffOptions)]);`,

    esm: `import sheriff from 'eslint-config-sheriff';
import { defineFlatConfig } from 'eslint-define-config';

const sheriffOptions = ${JSON.stringify(sheriffConfig, null, 2)};

export default defineFlatConfig([...sheriff(sheriffOptions)]);`,
  };

  if (fileType === 'ts') {
    return eslintConfigRawText.ts;
  }

  return eslintConfigRawText.esm;
};
