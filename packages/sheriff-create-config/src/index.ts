#!/usr/bin/env node
/* eslint-disable sonarjs/no-duplicate-string */

import { consola } from 'consola';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { createConfigOptionsReference } from '@sherifforg/constants';
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
    type: createConfigOptionsReference.filter.type,
    description: createConfigOptionsReference.filter.description,
  })
  .option('typescript', {
    type: createConfigOptionsReference.typescript.type,
    description: createConfigOptionsReference.typescript.description,
  })
  .option('prettier', {
    type: createConfigOptionsReference.prettier.type,
    description: createConfigOptionsReference.prettier.description,
  })
  .option('install-deps', {
    type: createConfigOptionsReference['install-deps'].type,
    description: createConfigOptionsReference['install-deps'].description,
    default: createConfigOptionsReference['install-deps'].default,
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
