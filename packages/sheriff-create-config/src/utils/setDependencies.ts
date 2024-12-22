import { consola } from 'consola';
import { autoInstallPackages } from './autoInstallPackages';

export const setDependencies = async (
  customProjectRootPath: string | null,
  shouldInstallPrettier: boolean,
): Promise<void> => {
  const requiredDependencies = [
    'eslint',
    'eslint-define-config',
    'eslint-config-sheriff',
  ];

  if (shouldInstallPrettier) {
    requiredDependencies.push('prettier');
  }

  for (const requiredDependency of requiredDependencies) {
    consola.start(`Installing '${requiredDependency}'...`);
  }

  await autoInstallPackages(requiredDependencies, customProjectRootPath);
};
