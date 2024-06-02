#!/usr/bin/env node

import { consola } from 'consola';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { askForCustomPath } from './utils/askForCustomPath';
import { askForEslintTsPatch } from './utils/askForEslintTsPatch';
import { askForPrettierSupport } from './utils/askForPrettierSupport';
import { setDependencies } from './utils/setDependencies';
import { setEslintConfig } from './utils/setEslintConfig';
import { setPrettierConfig } from './utils/setPrettierConfig';
import { setPrettierIgnore } from './utils/setPrettierIgnore';

const { argv } = yargs(hideBin(process.argv)).option('filter', {
  type: 'string',
  description: 'Filter for specific workspace',
});

// eslint-disable-next-line
async function main() {
  const commandArguments = await argv;
  const isWorkspace = Boolean(commandArguments.filter);
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
