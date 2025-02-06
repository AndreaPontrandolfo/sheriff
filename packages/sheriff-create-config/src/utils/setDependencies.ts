import { consola } from 'consola';
import { colors } from 'consola/utils';
import { autoInstallPackages } from './autoInstallPackages';

interface SetDependenciesOptions {
  customProjectRootPath: string | null;
  shouldInstallPrettier: boolean;
  shouldInstallJiti: boolean;
  shouldInstallDependencies: boolean;
}

export const setDependencies = async ({
  customProjectRootPath,
  shouldInstallPrettier,
  shouldInstallJiti,
  shouldInstallDependencies,
}: SetDependenciesOptions): Promise<void> => {
  const requiredDependencies = ['eslint', 'eslint-config-sheriff'];

  if (shouldInstallPrettier) {
    requiredDependencies.push('prettier');
  }

  if (shouldInstallJiti) {
    requiredDependencies.push('jiti');
  }

  if (shouldInstallDependencies) {
    consola.start(
      `Installing ${colors.bold(requiredDependencies.join(', '))}...`,
    );
    await autoInstallPackages(requiredDependencies, customProjectRootPath);
  } else {
    consola.info(
      `${colors.bold(requiredDependencies.join(', '))} would have been installed, but installation was ${colors.yellow('skipped')} as requested by the user.`,
    );
  }
};
