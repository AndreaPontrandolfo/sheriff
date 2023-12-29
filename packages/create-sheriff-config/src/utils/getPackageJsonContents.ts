import { type NormalizedReadResult, readPackageUp } from 'read-pkg-up';
import { printError } from './printError';

export const getPackageJsonContents = async (
  customProjectRootPath: string | null,
): Promise<NormalizedReadResult | undefined> => {
  try {
    const packageJsonContents = await readPackageUp({
      cwd: customProjectRootPath ?? process.cwd(),
    });

    if (!packageJsonContents) {
      printError('Package.json not found');
    }

    return packageJsonContents;
  } catch (error) {
    printError("Couldn't parse the package.json", { error });

    return;
  }
};
