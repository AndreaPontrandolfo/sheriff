import { writeFile } from 'fs';
import { printError } from './printError';
import { printSucces } from './printSucces';

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
      printError(`Couldn't write ${fileName} file to the filesystem`, {
        error,
      });
    }

    printSucces(`Successfully generated ${fileName} file`);
  });
};
