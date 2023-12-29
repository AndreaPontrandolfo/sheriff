import { sheriffStartingOptions } from '../constants';
import { getPackageJsonContents } from './getPackageJsonContents';
import { logger } from './logs';
import { printError } from './printError';
// import { spinnerSuccess, updateSpinnerText } from './spinner';

export const setSheriffConfig = async (
  customProjectRootPath: string | null,
): Promise<typeof sheriffStartingOptions> => {
  const finalPluginsConfigurationSetup = sheriffStartingOptions;
  const root = await getPackageJsonContents(customProjectRootPath);

  if (!root) {
    printError(
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
    logger.verbose(
      "'React' package found in the project. Setting up support for it...",
    );
    finalPluginsConfigurationSetup.react = true;
  }

  if (userProjectDependencies.playwright) {
    logger.verbose(
      "'Playwright' package found in the project. Setting up support for it...",
    );
    finalPluginsConfigurationSetup.playwright = true;
  }

  if (userProjectDependencies.next) {
    logger.verbose(
      "'Next' package found in the project. Setting up support for it...",
    );
    finalPluginsConfigurationSetup.next = true;
  }

  if (userProjectDependencies.lodash || userProjectDependencies['lodash-es']) {
    logger.verbose(
      "'Lodash' package found in the project. Setting up support for it...",
    );
    finalPluginsConfigurationSetup.lodash = true;
  }

  if (userProjectDependencies.jest) {
    logger.verbose(
      "'Jest' package found in the project. Setting up support for it...",
    );
    finalPluginsConfigurationSetup.jest = true;
  }

  if (userProjectDependencies.vitest) {
    logger.verbose(
      "'Vitest' package found in the project. Setting up support for it...",
    );
    finalPluginsConfigurationSetup.vitest = true;
  }

  logger.verbose(
    `Setting Sheriff with options:`,
    finalPluginsConfigurationSetup,
  );

  // updateSpinnerText("Creating '.sheriffrc.json'...");
  return finalPluginsConfigurationSetup;

  // spinnerSuccess(
  //   "Successfully created '.sheriffrc.json' file at project root.",
  // );
};
