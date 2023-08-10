#!/usr/bin/env node

import yargs, { type Arguments } from 'yargs';
import { setSheriffConfig } from './src/utils/setSheriffConfig';
import { setDependencies } from './src/utils/setDependencies';
import { setEslintConfig } from './src/utils/setEslintConfig';
import { setPrettierConfig } from './src/utils/setPrettierConfig';
import { setPrettierIgnore } from './src/utils/setPrettierIgnore';
import { askForCustomPath } from './src/utils/askForCustomPath';
import { askForPrettierSupport } from './src/utils/askForPrettierSupport';
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

  await setEslintConfig();
  if (!isSubProject || global.hasLocalPrettierSupport) {
    await setPrettierConfig();
    await setPrettierIgnore();
  }
  await setDependencies();
}

// eslint-disable-next-line
main();
