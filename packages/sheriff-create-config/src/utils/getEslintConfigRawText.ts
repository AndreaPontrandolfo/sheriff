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
    ts: `import { defineConfig } from 'eslint/config';
import { sheriff, type SheriffSettings } from 'eslint-config-sheriff';

const sheriffOptions: SheriffSettings = ${JSON.stringify(
      sheriffConfig,
      null,
      2,
    ).replace('"__IMPORT_META_DIRNAME__"', 'import.meta.dirname')};

export default defineConfig(sheriff(sheriffOptions));`,

    esm: `import { defineConfig } from 'eslint/config';
import { sheriff } from 'eslint-config-sheriff';

const sheriffOptions = ${JSON.stringify(sheriffConfig, null, 2).replace(
      '"__IMPORT_META_DIRNAME__"',
      'import.meta.dirname',
    )};

export default defineConfig(sheriff(sheriffOptions));`,
  };

  if (fileType === 'ts') {
    return eslintConfigRawText.ts;
  }

  return eslintConfigRawText.esm;
};
