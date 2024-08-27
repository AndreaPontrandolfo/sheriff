// import { resolveConfigFile } from 'prettier';
import { consola } from 'consola';
import { colors } from 'consola/utils';
import { createFile } from './createFile';
import { getPackageJsonContents } from './getPackageJsonContents';
import { patchedFindUp } from './patchedFindUp';
import { throwError } from './throwError';

const prettierConfigRawText = `{}`;

export const setPrettierConfig = async (
  customProjectRootPath: string | null,
): Promise<void> => {
  const root = await getPackageJsonContents(customProjectRootPath);

  if (!root) {
    throwError("couldn't read the package.json.");

    return;
  }

  const PREFERRED_PRETTIER_CONFIG_FILE_NAME = '.prettierrc.json';
  // taken from https://github.com/prettier/prettier/blob/main/src/config/prettier-config/config-searcher.js
  const prettierConfigFileNames = [
    '.prettierrc',
    '.prettierrc.json',
    '.prettierrc.yaml',
    '.prettierrc.yml',
    '.prettierrc.json5',
    '.prettierrc.js',
    '.prettierrc.mjs',
    '.prettierrc.cjs',
    'prettier.config.js',
    'prettier.config.mjs',
    'prettier.config.cjs',
    '.prettierrc.toml',
  ];

  try {
    // DISABLED: this should be the correct way of handling the inference of the prettier config, but the search-up of "resolveConfigFile" cannot be stopped at a specific directory, which is currently a requirement (otherwise it goes up to the root of the monorepo which is not what we want), so this solution cannot be used right now.
    // const prettierConfigurationFilePath = await resolveConfigFile(
    //   customProjectRootPath,
    // );

    const prettierConfigurationFilePath = await patchedFindUp(
      prettierConfigFileNames,
      customProjectRootPath ?? process.cwd(),
    );

    if (
      prettierConfigurationFilePath ||
      root.packageJson.devDependencies?.prettier
    ) {
      if (prettierConfigurationFilePath) {
        consola.info(
          `An already present 'Prettier' configuration was found in the project.`,
        );
      }

      if (root.packageJson.devDependencies?.prettier) {
        consola.info(
          `An already present 'Prettier' dependency was found in the project.`,
        );
      }

      consola.info(
        `Skipping ${colors.bold(PREFERRED_PRETTIER_CONFIG_FILE_NAME)} file generation and configuration.`,
      );

      return;
    }

    consola.start(
      `No 'prettier' configuration or dependency was found in the project. Generating and configuring ${colors.bold(PREFERRED_PRETTIER_CONFIG_FILE_NAME)} file...`,
    );

    createFile(
      PREFERRED_PRETTIER_CONFIG_FILE_NAME,
      prettierConfigRawText,
      customProjectRootPath,
    );
  } catch (error) {
    throwError("Couldn't walk up the filesystem", { error });
  }
};
