import { consola } from 'consola';
import { autoInstallPackages } from './autoInstallPackages';

interface SetDependenciesOptions {
  customProjectRootPath: string | null;
  shouldInstallPrettier: boolean;
  shouldInstallJiti: boolean;
}

export const setDependencies = async ({
  customProjectRootPath,
  shouldInstallPrettier,
  shouldInstallJiti,
}: SetDependenciesOptions): Promise<void> => {
  const requiredDependencies = [
    'eslint',
    'eslint-define-config',
    'eslint-config-sheriff',
  ];

  if (shouldInstallPrettier) {
    requiredDependencies.push('prettier');
  }

  if (shouldInstallJiti) {
    requiredDependencies.push('jiti');
  }

  for (const requiredDependency of requiredDependencies) {
    consola.start(`Installing '${requiredDependency}'...`);
  }

  await autoInstallPackages(requiredDependencies, customProjectRootPath);
};
