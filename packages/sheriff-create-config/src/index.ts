#!/usr/bin/env node
/* eslint-disable sonarjs/no-duplicate-string */

import { consola } from 'consola';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { CLIOptionsCatalog } from '@sherifforg/constants';
import packageJson from '../package.json';
import { askForCustomPath } from './utils/askForCustomPath';
import { askForEslintTsConfig } from './utils/askForEslintTsConfig';
import { askForPrettierInstallation } from './utils/askForPrettierInstallation';
import { askForPrettierSupport } from './utils/askForPrettierSupport';
import { setDependencies } from './utils/setDependencies';
import { setEslintConfig } from './utils/setEslintConfig';
import { setPrettierConfig } from './utils/setPrettierConfig';
import { setPrettierIgnore } from './utils/setPrettierIgnore';
import { showWelcome } from './utils/showWelcome';

const { argv } = yargs(hideBin(process.argv))
  .version(packageJson.version)
  .alias('v', 'version')
  .option('filter', {
    type: CLIOptionsCatalog.filter.type,
    description: CLIOptionsCatalog.filter.description,
  })
  .option('typescript', {
    type: CLIOptionsCatalog.typescript.type,
    description: CLIOptionsCatalog.typescript.description,
  })
  .option('prettier', {
    type: CLIOptionsCatalog.prettier.type,
    description: CLIOptionsCatalog.prettier.description,
  })
  .option('install-deps', {
    type: CLIOptionsCatalog['install-deps'].type,
    description: CLIOptionsCatalog['install-deps'].description,
    default: CLIOptionsCatalog['install-deps'].default,
  })
  .help()
  .alias('h', 'help');

// eslint-disable-next-line
async function main() {
  const commandArguments = await argv;

  /**
   * When true, the command is being run in a package within a monorepo.
   */
  const isWorkspace = Boolean(commandArguments.filter);
  const isTypescriptPreRequested = commandArguments.typescript;
  const isPrettierPreRequested = commandArguments.prettier;
  const isDependenciesInstallationPreRequested =
    commandArguments['install-deps'];

  showWelcome();

  const customProjectRootPath = isWorkspace ? await askForCustomPath() : null;

  const isEslintTsConfig =
    isTypescriptPreRequested ?? (await askForEslintTsConfig());

  await setEslintConfig(isEslintTsConfig, customProjectRootPath);

  let shouldInstallPrettier = false;

  const hasLocalPrettierSupport =
    isPrettierPreRequested ?? (await askForPrettierSupport());

  if (hasLocalPrettierSupport) {
    shouldInstallPrettier = await askForPrettierInstallation();
    await setPrettierConfig(customProjectRootPath);
    await setPrettierIgnore(customProjectRootPath);
  }

  await setDependencies({
    customProjectRootPath,
    shouldInstallPrettier,
    shouldInstallJiti: isEslintTsConfig,
    shouldInstallDependencies: isDependenciesInstallationPreRequested,
  });

  consola.info("You're all set! Happy coding 🎉");
}

// eslint-disable-next-line
main();
