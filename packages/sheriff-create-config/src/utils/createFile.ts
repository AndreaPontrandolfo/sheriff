import { writeFileSync } from 'node:fs';
import { consola } from 'consola';
import { colors } from 'consola/utils';
import { throwError } from './throwError';

export const createFile = (
  fileName: string,
  fileBody: string,
  customProjectRootPath: string | null,
): void => {
  const completeFilePath = `${customProjectRootPath ?? ''}${
    !customProjectRootPath || customProjectRootPath.endsWith('/') ? '' : '/'
  }${fileName}`;

  try {
    writeFileSync(completeFilePath, fileBody);
    consola.success(`Successfully generated ${colors.bold(fileName)} file`);
  } catch (error) {
    throwError(
      `Couldn't write ${colors.bold(fileName)} file to the filesystem`,
      {
        error,
      },
    );
  }
};
