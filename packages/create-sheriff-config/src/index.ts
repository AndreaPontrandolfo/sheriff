#!/usr/bin/env node

import yargs, { type Arguments } from 'yargs';
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

type Command =
  | Arguments<{
      filter: string | undefined;
    }>
  | undefined;

const command = yargs(process.argv.slice(2)).argv as Command;

// eslint-disable-next-line
async function main() {
  const isSubProject = Boolean(command?.filter);

  if (isSubProject) {
    await askForCustomPath();
    await askForPrettierSupport();
  }

  const isEslintTsPatchRequired = await askForEslintTsPatch();

  await setEslintConfig();
  if (!isSubProject || global.hasLocalPrettierSupport) {
    await setPrettierConfig();
    await setPrettierIgnore();
  }
  await setDependencies();
}

// eslint-disable-next-line
main();
