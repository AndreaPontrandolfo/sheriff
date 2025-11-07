import type { SheriffSettings } from 'eslint-config-sheriff';
import { sheriffStartingOptions } from '@sherifforg/constants';
import { setSheriffConfig } from './setSheriffConfig';
import { throwError } from './throwError';

export const getEslintConfigRawText = async (
  fileType: 'ts' | 'esm',
  customProjectRootPath: string | null,
): Promise<string> => {
  let sheriffConfig: SheriffSettings = sheriffStartingOptions;

  try {
    sheriffConfig = await setSheriffConfig(customProjectRootPath);
  } catch (error) {
    throwError(
      "Couldn't infer Sheriff user preferences automatically. Setting every option to default values...",
      { error },
    );
  }

  const eslintConfigRawText = {
    ts: `import { sheriff, type SheriffSettings, tseslint } from 'eslint-config-sheriff';

const sheriffOptions: SheriffSettings = ${JSON.stringify(
      sheriffConfig,
      null,
      2,
    )};

export default tseslint.config(sheriff(sheriffOptions));`,

    esm: `import { sheriff, tseslint  } from 'eslint-config-sheriff';

const sheriffOptions = ${JSON.stringify(sheriffConfig, null, 2)};

export default tseslint.config(sheriff(sheriffOptions));`,
  };

  if (fileType === 'ts') {
    return eslintConfigRawText.ts;
  }

  return eslintConfigRawText.esm;
};
