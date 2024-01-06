import { consola } from 'consola';
import { createFile } from './createFile';
import { throwError } from './throwError';
import { patchedFindUp } from './patchedFindUp';

const prettierIgnoreRawText = `/node_modules/
/dist/
/build/
/artifacts/
/coverage/
.git/`;

export const setPrettierIgnore = async (
  customProjectRootPath: string | null,
): Promise<void> => {
  const PRETTIER_IGNORE_FILE_NAME = '.prettierignore';

  try {
    const prettierIgnoreFile = await patchedFindUp(
      PRETTIER_IGNORE_FILE_NAME,
      customProjectRootPath,
    );

    if (prettierIgnoreFile) {
      consola.info(
        `An already present '${PRETTIER_IGNORE_FILE_NAME}' file was found in the project. Skipping '${PRETTIER_IGNORE_FILE_NAME}' file generation and configuration.`,
      );

      return;
    }
    consola.start(
      `No '${PRETTIER_IGNORE_FILE_NAME}' file was found in the project. Generating and configuring '${PRETTIER_IGNORE_FILE_NAME}' file...`,
    );
    createFile(
      PRETTIER_IGNORE_FILE_NAME,
      prettierIgnoreRawText,
      customProjectRootPath,
    );
  } catch (error) {
    throwError("Couldn't walk up the filesystem", { error });
  }
};
