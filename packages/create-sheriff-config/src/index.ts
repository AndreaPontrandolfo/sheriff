#!/usr/bin/env node

import { consola } from 'consola';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import packageJson from '../package.json';
import { askForCustomPath } from './utils/askForCustomPath';
import { askForEslintTsPatch } from './utils/askForEslintTsPatch';
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
    type: 'string',
    description: 'Filter for specific workspace',
  })
  .help()
  .alias('h', 'help');

// eslint-disable-next-line
async function main() {
  const commandArguments = await argv;
  const isWorkspace = Boolean(commandArguments.filter);

  showWelcome();
  consola.log(''); // space
  const customProjectRootPath = isWorkspace ? await askForCustomPath() : null;
  const hasLocalPrettierSupport = isWorkspace
    ? await askForPrettierSupport()
    : false;
  const isEslintTsPatchRequired = await askForEslintTsPatch();

  await setEslintConfig(isEslintTsPatchRequired, customProjectRootPath);

  if (!isWorkspace || hasLocalPrettierSupport) {
    await setPrettierConfig(customProjectRootPath);
    await setPrettierIgnore(customProjectRootPath);
  }
  await setDependencies(isEslintTsPatchRequired, customProjectRootPath);
  consola.info("You're all set!");
}

// eslint-disable-next-line
main();
