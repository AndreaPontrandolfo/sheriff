import { execSync } from 'child_process';
import { detectPackageManager, addDevDependency } from 'nypm';
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
    const pm = await detectPackageManager(process.cwd());

    const failedInstallationMessage = `Couldn't auto-install the required packages.
    You have to install them manually yourself.
    Please try to run: ${getInstallationCommand(
      pm?.name,
      packagesLatestVersions,
      selectedProject,
      false,
    )}`;

    consola.info(`Detected package manager: ${pm?.name}`);

    if (selectedProject) {
      consola.start(
        `Installing dependendencies in project ${selectedProject}...`,
      );
    }

    try {
      // execSync(
      //   getInstallationCommand(pm, packagesLatestVersions, selectedProject),
      // );
      await addDevDependency(packagesLatestVersions[0], {
        cwd: process.cwd(),
        workspace: 'cli-playground',
      });
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
