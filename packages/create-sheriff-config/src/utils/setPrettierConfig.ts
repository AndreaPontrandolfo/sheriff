import { createFile } from './createFile';
import { getPackageJsonContents } from './getPackageJsonContents';
import { logger } from './logs';
import { printError } from './printError';
import { patchedFindUp } from './patchedFindUp';

const prettierConfigRawText = `{
  "trailingComma": "all",
  "singleQuote": true,
  "endOfLine": "auto"
}`;

export const setPrettierConfig = async (): Promise<void> => {
  const root = await getPackageJsonContents();

  if (!root) {
    printError("couldn't read the package.json.");

    return;
  }
  const PREFERRED_PRETTIER_CONFIG_FILE_NAME = '.prettierrc.json';
  const prettierConfigFileNames = [
    '.prettierrc',
    '.prettierrc.json',
    '.prettierrc.yml',
    '.prettierrc.yaml',
    '.prettierrc.json5',
    '.prettierrc.js',
    '.prettierrc.cjs',
    'prettier.config.js',
    'prettier.config.cjs',
    '.prettierrc.toml',
  ];

  try {
    const prettierConfigFile = await patchedFindUp(prettierConfigFileNames);

    if (prettierConfigFile || root.packageJson.devDependencies?.prettier) {
      logger.verbose(
        `An already present 'prettier' configuration was found in the project. Skipping '${PREFERRED_PRETTIER_CONFIG_FILE_NAME}' file generation and configuration.`,
      );

      return;
    }
    logger.verbose(
      `No 'prettier' configuration was found in the project. Generating and configuring '${PREFERRED_PRETTIER_CONFIG_FILE_NAME}' file...`,
    );
    createFile(PREFERRED_PRETTIER_CONFIG_FILE_NAME, prettierConfigRawText);
  } catch (error) {
    printError("Couldn't walk up the filesystem", { error });
  }
};
