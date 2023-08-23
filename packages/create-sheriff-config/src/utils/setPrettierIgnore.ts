import { createFile } from './createFile';
import { logger } from './logs';
import { printError } from './printError';
import { patchedFindUp } from './patchedFindUp';

const prettierIgnoreRawText = `/node_modules/
/dist/
/build/
/artifacts/
/coverage/
.git/`;

export const setPrettierIgnore = async (): Promise<void> => {
  const PRETTIER_IGNORE_FILE_NAME = '.prettierignore';

  try {
    const prettierIgnoreFile = await patchedFindUp(PRETTIER_IGNORE_FILE_NAME);

    if (prettierIgnoreFile) {
      logger.verbose(
        `An already present '${PRETTIER_IGNORE_FILE_NAME}' file was found in the project. Skipping '${PRETTIER_IGNORE_FILE_NAME}' file generation and configuration.`,
      );

      return;
    }
    logger.verbose(
      `No '${PRETTIER_IGNORE_FILE_NAME}' file was found in the project. Generating and configuring '${PRETTIER_IGNORE_FILE_NAME}' file...`,
    );
    createFile(PRETTIER_IGNORE_FILE_NAME, prettierIgnoreRawText);
  } catch (error) {
    printError("Couldn't walk up the filesystem", { error });
  }
};
