#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { setDependencies } from './utils/setDependencies';
import { setEslintConfig } from './utils/setEslintConfig';
import { setPrettierConfig } from './utils/setPrettierConfig';
import { setPrettierIgnore } from './utils/setPrettierIgnore';
import { askForCustomPath } from './utils/askForCustomPath';
import { askForPrettierSupport } from './utils/askForPrettierSupport';
import { askForEslintTsPatch } from './utils/askForEslintTsPatch';

// import { Command, program } from 'commander';
// import { widgets } from './src/utils/widgets';
// import { spinnerError, stopSpinner } from "./src/utils/spinner";

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
}

// eslint-disable-next-line
main();
