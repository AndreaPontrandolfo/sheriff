import { resolveConfigFile } from 'prettier';
import { createFile } from './createFile';
import { getPackageJsonContents } from './getPackageJsonContents';
import { logger } from './logs';
import { printError } from './printError';

const prettierConfigRawText = `{}`;

export const setPrettierConfig = async (): Promise<void> => {
  const root = await getPackageJsonContents();

  if (!root) {
    printError("couldn't read the package.json.");

    return;
  }

  const PREFERRED_PRETTIER_CONFIG_FILE_NAME = '.prettierrc.json';

  try {
    const prettierConfigurationFilePath = await resolveConfigFile(
      global.customProjectRootPath,
    );

    if (
      prettierConfigurationFilePath ||
      root.packageJson.devDependencies?.prettier
    ) {
      if (prettierConfigurationFilePath) {
        logger.verbose(
          `An already present 'prettier' configuration was found in the project.`,
        );
      }

      if (root.packageJson.devDependencies?.prettier) {
        logger.verbose(
          `An already present 'prettier' dependency was found in the project.`,
        );
      }

      logger.verbose(
        `Skipping '${PREFERRED_PRETTIER_CONFIG_FILE_NAME}' file generation and configuration.`,
      );

      return;
    }

    logger.verbose(
      `No 'prettier' configuration or dependency was found in the project. Generating and configuring '${PREFERRED_PRETTIER_CONFIG_FILE_NAME}' file...`,
    );

    createFile(PREFERRED_PRETTIER_CONFIG_FILE_NAME, prettierConfigRawText);
  } catch (error) {
    printError("Couldn't walk up the filesystem", { error });
  }
};
