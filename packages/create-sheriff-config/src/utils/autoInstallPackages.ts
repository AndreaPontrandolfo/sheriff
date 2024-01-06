import { execSync } from 'child_process';
import { detect } from 'detect-package-manager';
import { consola } from 'consola';
import { getInstallationCommand } from './getInstallationCommand';
import { throwError } from './throwError';

export const autoInstallPackages = async (
  packages: string[],
  selectedProject: string | null,
): Promise<void> => {
  const packagesLatestVersions = packages.map(
    (packageName) => `${packageName}@latest`,
  );

  try {
    const pm = await detect();

    const failedInstallationMessage = `Couldn't auto-install the required packages.
    You have to install them manually yourself.
    Please try to run: ${getInstallationCommand(
      pm,
      packagesLatestVersions,
      selectedProject,
      false,
    )}`;

    consola.info(`Detected package manager: ${pm}`);

    if (pm === 'pnpm' && selectedProject) {
      consola.start(
        `Installing dependendencies in project ${selectedProject}...`,
      );
    }

    try {
      execSync(
        getInstallationCommand(pm, packagesLatestVersions, selectedProject),
      );
      consola.success(
        `${packages.join(' and ')} ${
          packages.length > 1 ? 'were' : 'was'
        } installed successfully`,
      );
    } catch (error) {
      throwError(failedInstallationMessage, { error });
    }
  } catch (error) {
    throwError("Couldn't walk up the filesystem", { error });
  }
};
