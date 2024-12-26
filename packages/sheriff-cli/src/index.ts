#!/usr/bin/env node

import fs from 'node:fs';
import { consola } from 'consola';
import { ESLint } from 'eslint';
import { readPackage } from 'read-pkg';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { parse } from '@typescript-eslint/typescript-estree';
import packageJson from '../package.json';

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
  .help()
  .alias('h', 'help');

// eslint-disable-next-line
async function main() {
  const commandArguments = await argv;

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

  try {
    const configFile = await eslint.findConfigFile();

    if (!configFile) {
      consola.error('No ESLint configuration found');

      return;
    }

    const fileContent = fs.readFileSync(configFile, 'utf-8');

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

    const { properties } =
      sheriffOptionsVariableDeclaration.declarations[0].init;

    for (const property of properties) {
      if (property.key.name === 'remeda') {
        if (property.value.value !== isRemeda) {
          consola.error(
            `Expected "remeda" to be ${isRemeda} but found ${property.value.value}`,
          );
          process.exit(1);
        }
      }
      if (property.key.name === 'lodash') {
        if (property.value.value !== isLodash) {
          consola.error(
            `Expected "lodash" to be ${isLodash} but found ${property.value.value}`,
          );
          process.exit(1);
        }
      }
      if (property.key.name === 'react') {
        if (property.value.value !== isReact) {
          consola.error(
            `Expected "react" to be ${isReact} but found ${property.value.value}`,
          );
          process.exit(1);
        }
      }
      if (property.key.name === 'next') {
        if (property.value.value !== isNext) {
          consola.error(
            `Expected "next" to be ${isNext} but found ${property.value.value}`,
          );
          process.exit(1);
        }
      }
      if (property.key.name === 'vitest') {
        if (property.value.value !== isVitest) {
          consola.error(
            `Expected "vitest" to be ${isVitest} but found ${property.value.value}`,
          );
          process.exit(1);
        }
      }
      if (property.key.name === 'jest') {
        if (property.value.value !== isJest) {
          consola.error(
            `Expected "jest" to be ${isJest} but found ${property.value.value}`,
          );
          process.exit(1);
        }
      }
      if (property.key.name === 'playwright') {
        if (property.value.value !== isPlaywright) {
          consola.error(
            `Expected "playwright" to be ${isPlaywright} but found ${property.value.value}`,
          );
          process.exit(1);
        }
      }
      if (property.key.name === 'astro') {
        if (property.value.value !== isAstro) {
          consola.error(
            `Expected "astro" to be ${isAstro} but found ${property.value.value}`,
          );
          process.exit(1);
        }
      }
    }
  } catch (error) {
    console.error('🚀 ~ main ~ error:', error);
  }
}

// eslint-disable-next-line
main();
