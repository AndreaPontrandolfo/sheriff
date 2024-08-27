import { autoInstallPackages } from './autoInstallPackages';
import { getRequiredPackages } from './getRequiredPackages';

export const setDependencies = async (
  isEslintTsPatchRequired: boolean,
  customProjectRootPath: string | null,
): Promise<void> => {
  const packages = getRequiredPackages(isEslintTsPatchRequired);

  await autoInstallPackages(packages, customProjectRootPath);
};
