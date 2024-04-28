import { consola } from 'consola';
import { colors } from 'consola/utils';
import { createFile } from './createFile';
import { getPackageJsonContents } from './getPackageJsonContents';
import { throwError } from './throwError';
import { patchedFindUp } from './patchedFindUp';
import { getEslintConfigRawText } from './getEslintConfigRawText';

export const setEslintConfig = async (
  isEslintTsPatchRequired: boolean,
  customProjectRootPath: string | null,
): Promise<void> => {
  // TODO: add case for .cjs and .mjs
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
      consola.warn(
        `A ${colors.bold(ESLINT_IGNORE_FILE_NAME)} file was found. Please remove it and transfer the ignored files list to the ${colors.bold(ESLINT_CONFIG_JS_FILE_NAME)} 'ignores' array`,
      );
    }

    if (eslintConfigJsFile) {
      consola.info(
        `${colors.bold(ESLINT_CONFIG_JS_FILE_NAME)} file found. Skipping ${colors.bold(ESLINT_CONFIG_JS_FILE_NAME)} file generation and configuration.`,
      );

      return;
    }

    if (eslintConfigTsFile) {
      consola.info(
        `${colors.bold(ESLINT_CONFIG_TS_FILE_NAME)} file found. Skipping ${colors.bold(ESLINT_CONFIG_TS_FILE_NAME)} file generation and configuration.`,
      );

      return;
    }

    consola.start(
      `Neither a ${colors.bold(ESLINT_CONFIG_TS_FILE_NAME)} nor a ${colors.bold(ESLINT_CONFIG_JS_FILE_NAME)} file were found. Generating and configuring ${
        isEslintTsPatchRequired
          ? colors.bold(ESLINT_CONFIG_TS_FILE_NAME)
          : colors.bold(ESLINT_CONFIG_JS_FILE_NAME)
      } file...`,
    );

    consola.warn(
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
      consola.warn(
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
    throwError("Couldn't walk up the filesystem", { error });
  }
};
