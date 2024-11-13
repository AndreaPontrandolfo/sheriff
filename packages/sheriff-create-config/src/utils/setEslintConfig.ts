import { consola } from 'consola';
import { colors } from 'consola/utils';
import { createFile } from './createFile';
import { getEslintConfigRawText } from './getEslintConfigRawText';
import { getPackageJsonContents } from './getPackageJsonContents';
import { patchedFindUp } from './patchedFindUp';
import { throwError } from './throwError';

export const setEslintConfig = async (
  isEslintTsConfig: boolean,
  customProjectRootPath: string | null,
): Promise<void> => {
  const ESLINT_CONFIG_JS_FILE_NAME = 'eslint.config.js';
  const ESLINT_CONFIG_MJS_FILE_NAME = 'eslint.config.mjs';
  const ESLINT_CONFIG_TS_FILE_NAME = 'eslint.config.ts';
  const ESLINT_IGNORE_FILE_NAME = '.eslintignore';

  try {
    const eslintConfigTsFile = await patchedFindUp(
      ESLINT_CONFIG_TS_FILE_NAME,
      customProjectRootPath,
    );
    const eslintConfigMjsFile = await patchedFindUp(
      ESLINT_CONFIG_MJS_FILE_NAME,
      customProjectRootPath,
    );
    const eslintConfigJsFile = await patchedFindUp(
      ESLINT_CONFIG_JS_FILE_NAME,
      customProjectRootPath,
    );
    const eslintIgnoreFile = await patchedFindUp(
      ESLINT_IGNORE_FILE_NAME,
      customProjectRootPath,
    );

    if (eslintIgnoreFile) {
      consola.warn(
        `A ${colors.bold(ESLINT_IGNORE_FILE_NAME)} file was found. Please remove it and transfer the ignored files list to the ${colors.bold(ESLINT_CONFIG_JS_FILE_NAME)} 'ignores' array`,
      );
    }

    const foundConfigFile =
      eslintConfigTsFile || eslintConfigMjsFile || eslintConfigJsFile;

    if (foundConfigFile) {
      consola.info(
        `${colors.bold(foundConfigFile)} file found. Skipping ${colors.bold(foundConfigFile)} file generation and configuration.`,
      );

      return;
    }

    consola.start(
      `No ESLint config files were found. Generating and configuring ${
        isEslintTsConfig
          ? colors.bold(ESLINT_CONFIG_TS_FILE_NAME)
          : colors.bold(ESLINT_CONFIG_JS_FILE_NAME)
      } file...`,
    );

    consola.warn(
      'If you have other ESLint configs in your project, remove them',
    );

    if (isEslintTsConfig) {
      createFile(
        ESLINT_CONFIG_TS_FILE_NAME,
        await getEslintConfigRawText('ts', customProjectRootPath),
        customProjectRootPath,
      );

      return;
    }

    const root = await getPackageJsonContents(customProjectRootPath);

    if (!root) {
      consola.warn("couldn't read the package.json. Defaulting to MJS.");
      createFile(
        ESLINT_CONFIG_MJS_FILE_NAME,
        await getEslintConfigRawText('esm', customProjectRootPath),
        customProjectRootPath,
      );
    }

    // TODO: this is a useless distinction, we could just create always the mjs file.
    if (root) {
      if (root.packageJson.type === 'module') {
        createFile(
          ESLINT_CONFIG_JS_FILE_NAME,
          await getEslintConfigRawText('esm', customProjectRootPath),
          customProjectRootPath,
        );
      } else {
        createFile(
          ESLINT_CONFIG_MJS_FILE_NAME,
          await getEslintConfigRawText('esm', customProjectRootPath),
          customProjectRootPath,
        );
      }
    }
  } catch (error) {
    throwError("Couldn't walk up the filesystem", { error });
  }
};
