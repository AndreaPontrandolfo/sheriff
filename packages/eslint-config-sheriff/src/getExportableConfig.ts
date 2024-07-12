import getGitignorePatterns from 'eslint-config-flat-gitignore';
import eslintConfigPrettier from 'eslint-config-prettier';
import type { FlatESLintConfig } from 'eslint-define-config';
import { isBoolean, isEmpty } from 'lodash';
import { ignores, sheriffStartingOptions } from '@sherifforg/constants';
import type { SheriffSettings } from '@sherifforg/types';
import type { TSESLint } from '@typescript-eslint/utils';
import { getAstroConfig } from './getAstroConfig';
import { getBaseConfig } from './getBaseConfig';
import { getJestConfig } from './getJestConfig';
import { getReactConfig } from './getReactConfig';
import { getVitestConfig } from './getVitestConfig';
import { lodashConfig } from './lodashConfig';
import { nextjsConfig } from './nextjsConfig';
import { playwrightConfig } from './playwrightConfig';
import { prettierOverrides } from './prettierOverrides';

export const getExportableConfig = (
  userConfigChoices: SheriffSettings = sheriffStartingOptions,
  areAllRulesForced?: boolean,
): FlatESLintConfig[] => {
  let exportableConfig: TSESLint.FlatConfig.ConfigArray =
    getBaseConfig(userConfigChoices);

  if (userConfigChoices.react || userConfigChoices.next) {
    exportableConfig.push(
      ...getReactConfig(userConfigChoices.pathsOverrides?.tsconfigLocation),
    );
  }

  if (
    !areAllRulesForced &&
    userConfigChoices.jest &&
    userConfigChoices.vitest
  ) {
    throw new Error(
      'Jest and Vitest support cannot be activated at once. Please choose one or the other.',
    );
  }

  if (userConfigChoices.jest) {
    exportableConfig.push(
      getJestConfig(userConfigChoices.pathsOverrides?.tests),
    );
  }

  if (userConfigChoices.vitest) {
    exportableConfig.push(
      getVitestConfig(userConfigChoices.pathsOverrides?.tests),
    );
  }

  if (userConfigChoices.next) {
    exportableConfig.push(nextjsConfig);
  }

  if (userConfigChoices.lodash) {
    exportableConfig.push(lodashConfig);
  }

  if (userConfigChoices.astro) {
    const customTSConfigPath =
      userConfigChoices.pathsOverrides?.tsconfigLocation;
    const hasReact = Boolean(userConfigChoices.react);

    exportableConfig.push(...getAstroConfig(hasReact, customTSConfigPath));
  }

  if (userConfigChoices.playwright) {
    exportableConfig.push(playwrightConfig);
  }

  exportableConfig.push(eslintConfigPrettier, prettierOverrides);

  if (userConfigChoices.files) {
    const allowedPatterns = userConfigChoices.files.map(
      (globPattern) => `!${globPattern}`,
    );

    exportableConfig = exportableConfig.map((configSlice) => {
      if (configSlice.ignores?.length && !isEmpty(configSlice.ignores)) {
        return configSlice;
      }

      return {
        ...configSlice,
        ignores: ['**/*', ...allowedPatterns],
      };
    });
  }

  const hasIgnoresRecommended = isBoolean(
    userConfigChoices.ignores?.recommended,
  )
    ? userConfigChoices.ignores.recommended
    : true;

  const hasIgnoresInheritedFromGitignore = isBoolean(
    userConfigChoices.ignores?.inheritedFromGitignore,
  )
    ? userConfigChoices.ignores.inheritedFromGitignore
    : true;

  exportableConfig.push({
    ignores: [
      ...(hasIgnoresRecommended ? ignores : []),
      ...(hasIgnoresInheritedFromGitignore
        ? getGitignorePatterns({ strict: false }).ignores
        : []),
    ],
  });

  return exportableConfig as FlatESLintConfig[];
};
