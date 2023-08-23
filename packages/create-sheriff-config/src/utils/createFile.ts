import { writeFile } from 'fs';
import { printError } from './printError';
import { printSucces } from './printSucces';

export const createFile = (fileName: string, fileBody: string): void => {
  const completeFilePath = `${global.customProjectRootPath ?? ''}${
    !global.customProjectRootPath || global.customProjectRootPath.endsWith('/')
      ? ''
      : '/'
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
