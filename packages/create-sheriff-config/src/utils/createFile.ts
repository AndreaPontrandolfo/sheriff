import { writeFile } from 'fs';
import { consola } from 'consola';
import { throwError } from './throwError';

export const createFile = (
  fileName: string,
  fileBody: string,
  customProjectRootPath: string | null,
): void => {
  const completeFilePath = `${customProjectRootPath ?? ''}${
    !customProjectRootPath || customProjectRootPath.endsWith('/') ? '' : '/'
  }${fileName}`;

  writeFile(completeFilePath, fileBody, (error) => {
    if (error) {
      throwError(`Couldn't write ${fileName} file to the filesystem`, {
        error,
      });
    }

    consola.success(`Successfully generated ${fileName} file`);
  });
};
