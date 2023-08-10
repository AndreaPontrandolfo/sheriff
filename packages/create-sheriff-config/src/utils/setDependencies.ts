import { autoInstallPackages } from './autoInstallPackages';
import { getRequiredPackages } from './getRequiredPackages';

export const setDependencies = async (): Promise<void> => {
  const packages = getRequiredPackages();

  await autoInstallPackages(packages);
};
