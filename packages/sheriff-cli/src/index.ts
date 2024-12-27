#!/usr/bin/env node

import fs from 'node:fs';
import { consola } from 'consola';
import { ESLint } from 'eslint';
import { type NormalizedPackageJson, readPackage } from 'read-pkg';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { parse } from '@typescript-eslint/typescript-estree';
import packageJson from '../package.json';
import { isPluginValid } from './utils/isPluginValid';
import { throwError } from './utils/throwError';

const taggedDependencies = [
  'react',
  'react-dom',
  'next',
  'lodash',
  'lodash-es',
  'remeda',
  'vitest',
  'jest',
  'playwright',
  '@playwright/test',
  'astro',
];

const { argv } = yargs(hideBin(process.argv))
  .version(packageJson.version)
  .alias('v', 'version')
  .option('no-fail', {
    type: 'boolean',
    description:
      'If the check fails, do not exit with a non-zero code. Use this if you want to keep CI passing even when a problem is found.',
    default: false,
  })
  .option('ignore-react', {
    type: 'boolean',
    description: 'Skip the react check.',
    default: false,
  })
  .option('ignore-next', {
    type: 'boolean',
    description: 'Skip the next check.',
    default: false,
  })
  .option('ignore-lodash', {
    type: 'boolean',
    description: 'Skip the lodash check.',
    default: false,
  })
  .option('ignore-remeda', {
    type: 'boolean',
    description: 'Skip the remeda check.',
    default: false,
  })
  .option('ignore-vitest', {
    type: 'boolean',
    description: 'Skip the vitest check.',
    default: false,
  })
  .option('ignore-jest', {
    type: 'boolean',
    description: 'Skip the jest check.',
    default: false,
  })
  .option('ignore-playwright', {
    type: 'boolean',
    description: 'Skip the playwright check.',
    default: false,
  })
  .option('ignore-astro', {
    type: 'boolean',
    description: 'Skip the astro check.',
    default: false,
  })
  .help()
  .alias('h', 'help');

// eslint-disable-next-line
async function main() {
  consola.start(
    'Checking that the Sheriff options match the dependencies in package.json...',
  );

  try {
    const commandArguments = await argv;

    const severityLevel = commandArguments['no-fail'] ? 'warn' : 'error';
    const shouldIgnoreReact = commandArguments['ignore-react'];
    const shouldIgnoreNext = commandArguments['ignore-next'];
    const shouldIgnoreLodash = commandArguments['ignore-lodash'];
    const shouldIgnoreRemeda = commandArguments['ignore-remeda'];
    const shouldIgnoreVitest = commandArguments['ignore-vitest'];
    const shouldIgnoreJest = commandArguments['ignore-jest'];
    const shouldIgnorePlaywright = commandArguments['ignore-playwright'];
    const shouldIgnoreAstro = commandArguments['ignore-astro'];

    let packageJSON: NormalizedPackageJson;

    try {
      packageJSON = await readPackage();
    } catch (error) {
      throwError("Couldn't read package.json", { error });

      return;
    }

    if (!packageJSON.dependencies) {
      consola.debug('No dependencies found in package.json');

      return;
    }

    let isLodash = false;
    let isRemeda = false;
    let isReact = false;
    let isNext = false;
    let isVitest = false;
    let isJest = false;
    let isPlaywright = false;
    let isAstro = false;

    for (const dependency of Object.keys(packageJSON.dependencies)) {
      if (taggedDependencies.includes(dependency)) {
        if (dependency === 'lodash' || dependency === 'lodash-es') {
          isLodash = true;
        }
        if (dependency === 'remeda') {
          isRemeda = true;
        }
        if (
          dependency === 'react' ||
          dependency === 'react-dom' ||
          dependency === 'next'
        ) {
          isReact = true;
        }
        if (dependency === 'next') {
          isNext = true;
        }
        if (dependency === 'vitest') {
          isVitest = true;
        }
        if (dependency === 'jest') {
          isJest = true;
        }
        if (dependency === 'playwright' || dependency === '@playwright/test') {
          isPlaywright = true;
        }
        if (dependency === 'astro') {
          isAstro = true;
        }
      }
    }

    const eslint = new ESLint();

    let configFilePath: string | undefined;

    try {
      configFilePath = await eslint.findConfigFile();
    } catch (error) {
      throwError("Couldn't find an ESLint configuration file", { error });
    }

    if (!configFilePath) {
      throwError('No ESLint configuration found in the cwd of project.');

      return;
    }

    let fileContent = '';

    try {
      fileContent = fs.readFileSync(configFilePath, 'utf-8');
    } catch (error) {
      throwError("Couldn't read the contents of ESLint configuration file.", {
        error,
      });
    }

    if (!fileContent) {
      throwError('ESLint configuration file appears to be empty.');

      return;
    }

    const ast = parse(fileContent);

    const sheriffOptionsVariableDeclaration = ast.body.find((declaration1) => {
      return (
        declaration1.type === 'VariableDeclaration' &&
        declaration1.declarations.find(
          (declaration2) => declaration2.id.name === 'sheriffOptions',
        )
      );
    });

    if (!sheriffOptionsVariableDeclaration) {
      // this is only a "debug" level log because it's plausible that the user doesn't have a sheriffOptions variable.
      consola.debug(
        'No variable named "sheriffOptions" found in ESLint configuration.',
      );

      return;
    }

    const { properties } =
      sheriffOptionsVariableDeclaration.declarations[0].init;

    const pluginsValidations = [];

    for (const property of properties) {
      pluginsValidations.push(
        shouldIgnoreReact
          ? true
          : isPluginValid(property, 'react', isReact, severityLevel),
        shouldIgnoreNext
          ? true
          : isPluginValid(property, 'next', isNext, severityLevel),
        shouldIgnoreLodash
          ? true
          : isPluginValid(property, 'lodash', isLodash, severityLevel),
        shouldIgnoreRemeda
          ? true
          : isPluginValid(property, 'remeda', isRemeda, severityLevel),
        shouldIgnoreVitest
          ? true
          : isPluginValid(property, 'vitest', isVitest, severityLevel),
        shouldIgnoreJest
          ? true
          : isPluginValid(property, 'jest', isJest, severityLevel),
        shouldIgnorePlaywright
          ? true
          : isPluginValid(property, 'playwright', isPlaywright, severityLevel),
        shouldIgnoreAstro
          ? true
          : isPluginValid(property, 'astro', isAstro, severityLevel),
      );
    }

    const areAllPluginsValid = pluginsValidations.every(Boolean);

    if (areAllPluginsValid) {
      consola.success('All checks passed! 🎉');
    } else {
      consola.warn('Sheriff process ended with warnings.');
    }
  } catch (error) {
    throwError('Failed to parse command arguments', { error });
  }
}

// eslint-disable-next-line
main();
