import { createFile } from './createFile';
import { getPackageJsonContents } from './getPackageJsonContents';
import { logger } from './logs';
import { printError } from './printError';
import { printWarning } from './printWarning';
import { patchedFindUp } from './patchedFindUp';
import { getEslintConfigRawText } from './getEslintConfigRawText';

export const setEslintConfig = async (
  isEslintTsPatchRequired: boolean,
  customProjectRootPath: string | null,
): Promise<void> => {
  const ESLINT_CONFIG_JS_FILE_NAME = 'eslint.config.js';
  const ESLINT_CONFIG_TS_FILE_NAME = 'eslint.config.ts';
  const ESLINT_IGNORE_FILE_NAME = '.eslintignore';

  try {
    const eslintConfigJsFile = await patchedFindUp(
      ESLINT_CONFIG_JS_FILE_NAME,
      customProjectRootPath,
    );
    const eslintConfigTsFile = await patchedFindUp(
      ESLINT_CONFIG_TS_FILE_NAME,
      customProjectRootPath,
    );
    const eslintIgnoreFile = await patchedFindUp(
      ESLINT_IGNORE_FILE_NAME,
      customProjectRootPath,
    );

    if (eslintIgnoreFile) {
      printWarning(
        `A ${ESLINT_IGNORE_FILE_NAME} file was found. Please remove it and transfer the ignored files list to the ${ESLINT_CONFIG_JS_FILE_NAME} 'ignores' array`,
      );
    }

    if (eslintConfigJsFile) {
      logger.verbose(
        `'${ESLINT_CONFIG_JS_FILE_NAME}' file found. Skipping '${ESLINT_CONFIG_JS_FILE_NAME}' file generation and configuration.`,
      );

      return;
    }

    if (eslintConfigTsFile) {
      logger.verbose(
        `'${ESLINT_CONFIG_TS_FILE_NAME}' file found. Skipping '${ESLINT_CONFIG_TS_FILE_NAME}' file generation and configuration.`,
      );

      return;
    }

    logger.verbose(
      `Neither a '${ESLINT_CONFIG_TS_FILE_NAME}' nor a '${ESLINT_CONFIG_JS_FILE_NAME}' file were found. Generating and configuring '${
        isEslintTsPatchRequired
          ? ESLINT_CONFIG_TS_FILE_NAME
          : ESLINT_CONFIG_JS_FILE_NAME
      }' file...`,
    );

    printWarning(
      'If you have other ESLint configs in your project, remove them',
    );

    if (isEslintTsPatchRequired) {
      createFile(
        ESLINT_CONFIG_TS_FILE_NAME,
        await getEslintConfigRawText('ts', customProjectRootPath),
        customProjectRootPath,
      );

      return;
    }

    const root = await getPackageJsonContents(customProjectRootPath);

    if (!root) {
      printWarning(
        "couldn't read the package.json. Defaulting to Commonjs imports style",
      );
      createFile(
        ESLINT_CONFIG_JS_FILE_NAME,
        await getEslintConfigRawText('commonjs', customProjectRootPath),
        customProjectRootPath,
      );
    }
    if (root) {
      if (root.packageJson.type === 'module') {
        createFile(
          ESLINT_CONFIG_JS_FILE_NAME,
          await getEslintConfigRawText('esm', customProjectRootPath),
          customProjectRootPath,
        );
      } else {
        createFile(
          ESLINT_CONFIG_JS_FILE_NAME,
          await getEslintConfigRawText('commonjs', customProjectRootPath),
          customProjectRootPath,
        );
      }
    }
  } catch (error) {
    printError("Couldn't walk up the filesystem", { error });
  }
};
