import { consola } from 'consola';
import { colors } from 'consola/utils';
import { createFile } from './createFile';
import { patchedFindUp } from './patchedFindUp';
import { throwError } from './throwError';

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
      customProjectRootPath ?? process.cwd(),
    );

    if (prettierIgnoreFile) {
      consola.info(
        `An already present ${colors.bold(PRETTIER_IGNORE_FILE_NAME)} file was found in the project. Skipping ${colors.bold(PRETTIER_IGNORE_FILE_NAME)} file generation and configuration.`,
      );

      return;
    }
    consola.start(
      `No ${colors.bold(PRETTIER_IGNORE_FILE_NAME)} file was found in the project. Generating and configuring ${colors.bold(PRETTIER_IGNORE_FILE_NAME)} file...`,
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
