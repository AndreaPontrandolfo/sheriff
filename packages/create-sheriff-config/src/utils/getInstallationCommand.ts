export const getInstallationCommand = (
  pm: string | undefined,
  packagesLatestVersions: string[],
  selectedProject: string | null,
  isFilterRequired = true,
): string => {
  const projectArgument =
    isFilterRequired && selectedProject ? ` --filter=${selectedProject}` : '';

  return `${pm ?? '<your-package-manager>'} add -D ${packagesLatestVersions.join(' ')}${projectArgument}`;
};
