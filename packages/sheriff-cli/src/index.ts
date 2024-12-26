#!/usr/bin/env node

import fs from 'node:fs';
import { consola } from 'consola';
import { ESLint } from 'eslint';
import { readPackage } from 'read-pkg';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import type { SheriffConfigurablePlugins } from '@sherifforg/types';
import { parse } from '@typescript-eslint/typescript-estree';
import packageJson from '../package.json';
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

const isPluginValid = (
  property: any,
  pluginName: keyof SheriffConfigurablePlugins,
  isPluginFound: boolean,
  severityLevel: 'error' | 'warn',
): boolean => {
  let isError = false;

  if (
    property.key.name === pluginName &&
    property.value.value !== isPluginFound
  ) {
    isError = true;
    if (severityLevel === 'error') {
      consola.error(
        `Expected ${pluginName} to be ${String(isPluginFound)} but found ${property.value.value}`,
      );
      throwError(
        `Expected ${pluginName} to be ${String(isPluginFound)} but found ${property.value.value}`,
      );
    }

    if (severityLevel === 'warn') {
      consola.warn(
        `Expected ${pluginName} to be ${String(isPluginFound)} but found ${property.value.value}.`,
      );
    }
  }

  return !isError;
};

const { argv } = yargs(hideBin(process.argv))
  .version(packageJson.version)
  .alias('v', 'version')
  .option('no-fail', {
    type: 'boolean',
    description:
      'If the check fails, do not exit with a non-zero code. Use this if you want to keep CI passing even when a problem is found.',
    default: false,
  })
  .help()
  .alias('h', 'help');

// eslint-disable-next-line
async function main() {
  consola.start(
    'Checking that the Sheriff options match the dependencies in package.json...',
  );
  const commandArguments = await argv;

  const severityLevel = commandArguments['no-fail'] ? 'warn' : 'error';

  const packageJSON = await readPackage();

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
    consola.error('No ESLint configuration found');

    return;
  }

  const fileContent = fs.readFileSync(configFilePath, 'utf-8');

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
    consola.error(
      'No variable named "sheriffOptions" found in ESLint configuration.',
    );

    return;
  }

  const { properties } = sheriffOptionsVariableDeclaration.declarations[0].init;

  const pluginsValidations = [];

  for (const property of properties) {
    pluginsValidations.push(
      isPluginValid(property, 'react', isReact, severityLevel),
      isPluginValid(property, 'next', isNext, severityLevel),
      isPluginValid(property, 'lodash', isLodash, severityLevel),
      isPluginValid(property, 'remeda', isRemeda, severityLevel),
      isPluginValid(property, 'vitest', isVitest, severityLevel),
      isPluginValid(property, 'jest', isJest, severityLevel),
      isPluginValid(property, 'playwright', isPlaywright, severityLevel),
      isPluginValid(property, 'astro', isAstro, severityLevel),
    );
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const areAllPluginsValid = pluginsValidations.every(Boolean);

  if (areAllPluginsValid) {
    consola.success('All checks passed! 🎉');
  } else {
    consola.warn('Sheriff process ended with warnings.');
  }
}

// eslint-disable-next-line
main();
