import { highlight } from 'cli-highlight';
import { consola } from 'consola';
import { sheriffStartingOptions } from '@sherifforg/constants';
import type { SheriffSettings } from '@sherifforg/types';
import { getPackageJsonContents } from './getPackageJsonContents';
import { throwError } from './throwError';

export const setSheriffConfig = async (
  customProjectRootPath: string | null,
): Promise<SheriffSettings> => {
  const finalPluginsConfigurationSetup: SheriffSettings =
    sheriffStartingOptions;

  // '__IMPORT_META_DIRNAME__' is a placeholder that will be replaced later with import.meta.dirname variable.
  finalPluginsConfigurationSetup.tsconfigRootDir = '__IMPORT_META_DIRNAME__';

  const root = await getPackageJsonContents(customProjectRootPath);

  if (!root) {
    throwError(
      "couldn't read the package.json. Every setting will be set to default values.",
    );

    return finalPluginsConfigurationSetup;
  }

  const userProjectDependencies = {
    ...root.packageJson.dependencies,
    ...root.packageJson.devDependencies,
  };

  if (
    userProjectDependencies.react ||
    userProjectDependencies['react-scripts'] ||
    userProjectDependencies.next
  ) {
    consola.start(
      "'React' package found in the project. Setting up support for it...",
    );
    finalPluginsConfigurationSetup.react = true;
  }

  if (userProjectDependencies.playwright) {
    consola.start(
      "'Playwright' package found in the project. Setting up support for it...",
    );
    finalPluginsConfigurationSetup.playwright = true;
  }

  if (userProjectDependencies.next) {
    consola.start(
      "'Next' package found in the project. Setting up support for it...",
    );
    finalPluginsConfigurationSetup.next = true;
  }

  if (userProjectDependencies.astro) {
    consola.start(
      "'Astro' package found in the project. Setting up support for it...",
    );
    finalPluginsConfigurationSetup.astro = true;
  }

  if (userProjectDependencies.lodash || userProjectDependencies['lodash-es']) {
    consola.start(
      "'Lodash' package found in the project. Setting up support for it...",
    );
    finalPluginsConfigurationSetup.lodash = true;
  }

  if (userProjectDependencies.remeda) {
    consola.start(
      "'Remeda' package found in the project. Setting up support for it...",
    );
    finalPluginsConfigurationSetup.remeda = true;
  }

  if (userProjectDependencies.jest) {
    consola.start(
      "'Jest' package found in the project. Setting up support for it...",
    );
    finalPluginsConfigurationSetup.jest = true;
  }

  if (userProjectDependencies.vitest) {
    consola.start(
      "'Vitest' package found in the project. Setting up support for it...",
    );
    finalPluginsConfigurationSetup.vitest = true;
  }

  consola.info('Setting Sheriff with options:');
  consola.box(
    highlight(
      JSON.stringify(finalPluginsConfigurationSetup, null, 2).replace(
        '"__IMPORT_META_DIRNAME__"',
        'import.meta.dirname',
      ),
    ),
  );

  return finalPluginsConfigurationSetup;
};
