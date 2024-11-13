import { autoInstallPackages } from './autoInstallPackages';
import { getRequiredPackages } from './getRequiredPackages';

export const setDependencies = async (
  customProjectRootPath: string | null,
): Promise<void> => {
  const packages = getRequiredPackages();

  await autoInstallPackages(packages, customProjectRootPath);
};
