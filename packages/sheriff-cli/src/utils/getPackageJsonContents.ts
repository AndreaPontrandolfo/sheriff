import { type NormalizedReadResult, readPackageUp } from 'read-pkg-up';
import { throwError } from './throwError';

export const getPackageJsonContents = async (
  customProjectRootPath: string | null,
): Promise<NormalizedReadResult | undefined> => {
  try {
    const packageJsonContents = await readPackageUp({
      cwd: customProjectRootPath ?? process.cwd(),
    });

    if (!packageJsonContents) {
      throwError('Package.json not found');
    }

    return packageJsonContents;
  } catch (error) {
    throwError("Couldn't parse the package.json", { error });

    return;
  }
};
