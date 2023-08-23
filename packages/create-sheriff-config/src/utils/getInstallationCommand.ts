export const getInstallationCommand = (
  pm: string,
  packagesLatestVersions: string[],
  selectedProject: string | undefined,
  isFilterRequired = true,
): string => {
  const projectArgument =
    isFilterRequired && selectedProject ? ` --filter=${selectedProject}` : '';

  return `${pm} add -D ${packagesLatestVersions.join(' ')}${projectArgument}`;
};
