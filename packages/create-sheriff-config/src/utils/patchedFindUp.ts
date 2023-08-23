import { resolve, dirname } from 'path';
import { findUp } from 'find-up';

export const patchedFindUp = async (
  fileNames: string | string[],
): Promise<string | undefined> => {
  if (!global.customProjectRootPath) {
    const filePath = await findUp(fileNames);

    return filePath;
  }

  if (global.customProjectRootPath) {
    const stopAt = resolve(global.customProjectRootPath);
    const filePath = await findUp(fileNames, {
      cwd: global.customProjectRootPath,
    });

    if (filePath && dirname(filePath) === stopAt) {
      return filePath;
    }
  }

  return undefined;
};
