import { consola } from 'consola';
import { colors } from 'consola/utils';
import { isNumber } from 'lodash-es';
import { addDependency, detectPackageManager } from 'nypm';
import { CURRENT_FROZEN_ESLINT_VERSION } from '@sherifforg/constants';
import { getInstallationCommand } from './getInstallationCommand';
import { getPackageJsonContents } from './getPackageJsonContents';
import { throwError } from './throwError';

export const autoInstallPackages = async (
  packages: string[],
  selectedProject: string | null,
): Promise<void> => {
  const packagesLatestVersions = packages.map((packageName) => {
    if (packageName === 'eslint') {
      return `eslint@${CURRENT_FROZEN_ESLINT_VERSION}`;
    }

    const lastCharacter = packageName.at(-1);

    if (isNumber(lastCharacter)) {
      return packageName;
    }

    return `${packageName}@latest`;
  });

  try {
    const pm = await detectPackageManager(process.cwd());

    if (pm) {
      consola.info(`Detected package manager: ${colors.bold(pm.name)}`);
    }

    if (!pm) {
      consola.error('No package manager detected!');
    }

    if (selectedProject) {
      consola.start(`Installing dependencies in project ${selectedProject}...`);
    }

    if (!selectedProject) {
      consola.start(`Installing dependencies...`);
    }

    try {
      if (selectedProject) {
        const root = await getPackageJsonContents(selectedProject);

        if (!root) {
          throwError("Couldn't read the package.json.");

          return;
        }

        await addDependency(packagesLatestVersions, {
          dev: true,
          workspace: root.packageJson.name,
        });
      }

      if (!selectedProject) {
        await addDependency(packagesLatestVersions, {
          dev: true,
        });
      }

      consola.success(
        `${packages.join(' and ')} ${
          packages.length > 1 ? 'were' : 'was'
        } installed successfully`,
      );
    } catch (error) {
      const failedInstallationMessage = `Couldn't auto-install the required packages.
      You have to install them manually yourself.
      Please try to run: ${getInstallationCommand(
        pm?.name,
        packagesLatestVersions,
        selectedProject,
        false,
      )}`;

      throwError(failedInstallationMessage, { error });
    }
  } catch (error) {
    throwError("Couldn't walk up the filesystem", { error });
  }
};
