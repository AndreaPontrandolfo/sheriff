#!/usr/bin/env node

import fs from 'node:fs';
import { consola } from 'consola';
import { ESLint } from 'eslint';
import { type NormalizedPackageJson, readPackage } from 'read-pkg';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import {
  AST_NODE_TYPES,
  parse,
  type TSESTree,
} from '@typescript-eslint/typescript-estree';
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
  .option('debug', {
    type: 'boolean',
    description: 'Enables verbose logging.',
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
  try {
    const commandArguments = await argv;

    const severityLevel = commandArguments['no-fail'] ? 'warn' : 'error';
    const isDebugLevel = commandArguments.debug;
    const shouldIgnoreReact = commandArguments['ignore-react'];
    const shouldIgnoreNext = commandArguments['ignore-next'];
    const shouldIgnoreLodash = commandArguments['ignore-lodash'];
    const shouldIgnoreRemeda = commandArguments['ignore-remeda'];
    const shouldIgnoreVitest = commandArguments['ignore-vitest'];
    const shouldIgnoreJest = commandArguments['ignore-jest'];
    const shouldIgnorePlaywright = commandArguments['ignore-playwright'];
    const shouldIgnoreAstro = commandArguments['ignore-astro'];

    consola.level = isDebugLevel ? 5 : 3;

    consola.start(
      'Checking that the Sheriff options match the dependencies in package.json...',
    );

    let packageJSON: NormalizedPackageJson;

    try {
      consola.debug('Searching and reading package.json...');
      packageJSON = await readPackage();
      consola.debug('Finished reading package.json.');
    } catch (error) {
      throwError("Couldn't read package.json", { error });

      return;
    }

    if (!packageJSON.dependencies) {
      consola.info('No dependencies found in package.json');

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

    consola.debug('Checking dependencies in package.json...');
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

    consola.debug('Finished checking dependencies in package.json.');

    const eslint = new ESLint();

    let configFilePath: string | undefined;

    try {
      consola.debug('Searching for ESLint configuration file...');
      configFilePath = await eslint.findConfigFile();
      consola.debug('Finished searching for ESLint configuration file.');
    } catch (error) {
      throwError("Couldn't find an ESLint configuration file", { error });
    }

    if (!configFilePath) {
      throwError('No ESLint configuration found in the cwd of project.');

      return;
    }

    let fileContent = '';

    try {
      consola.debug('Reading ESLint configuration file...');
      fileContent = fs.readFileSync(configFilePath, 'utf-8');
      consola.debug('Finished reading ESLint configuration file.');
    } catch (error) {
      throwError("Couldn't read the contents of ESLint configuration file.", {
        error,
      });
    }

    if (!fileContent) {
      throwError('ESLint configuration file appears to be empty.');

      return;
    }

    consola.debug('Parsing ESLint configuration file...');
    const ast = parse(fileContent);

    consola.debug('Finished parsing ESLint configuration file.');

    consola.debug(
      'Searching for sheriffOptions variable in ESLint configuration file...',
    );
    const sheriffOptionsVariableDeclaration = ast.body.find(
      (declaration1): declaration1 is TSESTree.VariableDeclaration => {
        return (
          declaration1.type === AST_NODE_TYPES.VariableDeclaration &&
          declaration1.declarations.some((declaration2) => {
            return (
              declaration2.id.type === AST_NODE_TYPES.Identifier &&
              declaration2.id.name === 'sheriffOptions'
            );
          })
        );
      },
    );

    consola.debug(
      'Finished searching for sheriffOptions variable in ESLint configuration file.',
    );

    if (!sheriffOptionsVariableDeclaration) {
      // this is only a "info" level log because it's plausible that the user doesn't have a sheriffOptions variable.
      consola.info(
        'No variable named "sheriffOptions" found in ESLint configuration. This could be intended, or maybe you forgot to name the Sheriff options obejct exactly "sheriffOptions". Check the documentation for more info: https://www.eslint-config-sheriff.dev/docs/usage-in-ci#how-it-works',
      );

      return;
    }

    if (
      !sheriffOptionsVariableDeclaration.declarations[0].init ||
      sheriffOptionsVariableDeclaration.declarations[0].init.type !==
        AST_NODE_TYPES.ObjectExpression
    ) {
      throwError('sheriffOptions must be an ObjectExpression.');

      return;
    }

    consola.debug('Validating enabled plugins...');

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

    consola.debug('Finished validating enabled plugins.');

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
