import { consola } from 'consola';
import { sheriffStartingOptions } from '../constants';
import { getPackageJsonContents } from './getPackageJsonContents';
import { throwError } from './throwError';

// import { spinnerSuccess, updateSpinnerText } from './spinner';

export const setSheriffConfig = async (
  customProjectRootPath: string | null,
): Promise<typeof sheriffStartingOptions> => {
  const finalPluginsConfigurationSetup = sheriffStartingOptions;
  const root = await getPackageJsonContents(customProjectRootPath);

  if (!root) {
    throwError(
      "couldn't read the package.json. Every setting will be set to false",
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

  if (userProjectDependencies.lodash || userProjectDependencies['lodash-es']) {
    consola.start(
      "'Lodash' package found in the project. Setting up support for it...",
    );
    finalPluginsConfigurationSetup.lodash = true;
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
  consola.box(finalPluginsConfigurationSetup);

  return finalPluginsConfigurationSetup;
};
