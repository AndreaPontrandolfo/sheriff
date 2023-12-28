import { autoInstallPackages } from './autoInstallPackages';
import { getRequiredPackages } from './getRequiredPackages';

export const setDependencies = async (
  isEslintTsPatchRequired: boolean,
): Promise<void> => {
  const packages = getRequiredPackages(isEslintTsPatchRequired);

  await autoInstallPackages(packages);
};
