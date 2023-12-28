import { resolve, dirname } from 'path';
import { findUp } from 'find-up';

/**
 * Finds the first occurrence of a file in the directory hierarchy starting from the current working directory.
 * If a custom project root path is set, it will start the search from that directory instead.
 *
 * @param fileNames - The name or names of the files to search for.
 * @returns A promise that resolves to the path of the found file, or undefined if no file is found.
 */
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
