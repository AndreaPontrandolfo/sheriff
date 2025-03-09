/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import getGitignorePatterns from 'eslint-config-flat-gitignore';
import lodash from 'lodash';
import { ignores, sheriffStartingOptions } from '@sherifforg/constants';
import type { SheriffSettings } from '@sherifforg/types';
import type { TSESLint } from '@typescript-eslint/utils';
import { getAstroConfig } from './getAstroConfig';
import { getBaseConfig } from './getBaseConfig';
import { getJestConfig } from './getJestConfig';
import { getReactConfig } from './getReactConfig';
import { getStorybookConfig } from './getStorybookConfig';
import { getVitestConfig } from './getVitestConfig';
import { lodashConfig } from './lodashConfig';
import { nextjsConfig } from './nextjsConfig';
import { getPlaywrightConfig } from './playwrightConfig';
import { remedaConfig } from './remedaConfig';

export const getExportableConfig = (
  userConfigChoices: SheriffSettings = sheriffStartingOptions,
  /** @internal */
  areAllRulesForced?: boolean,
): TSESLint.FlatConfig.ConfigArray => {
  let exportableConfig: TSESLint.FlatConfig.ConfigArray =
    getBaseConfig(userConfigChoices);

  const hasReact = Boolean(userConfigChoices.react);

  if (hasReact || userConfigChoices.next) {
    // we insert reactConfig this way because it's an array. It's an array because it contains multiple configs, currently: react, react-hooks, react-a11y and react-refresh.
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
      ...getJestConfig(userConfigChoices.pathsOverrides?.tests),
    );
  }

  if (userConfigChoices.vitest) {
    exportableConfig.push(
      getVitestConfig(userConfigChoices.pathsOverrides?.tests),
    );
  }

  if (userConfigChoices.next) {
    exportableConfig.push(...nextjsConfig);
  }

  if (userConfigChoices.lodash) {
    exportableConfig.push(lodashConfig);
  }

  if (userConfigChoices.remeda) {
    exportableConfig.push(...remedaConfig);
  }

  if (userConfigChoices.astro) {
    const customTSConfigPath =
      userConfigChoices.pathsOverrides?.tsconfigLocation;

    exportableConfig.push(...getAstroConfig(hasReact, customTSConfigPath));
  }

  if (userConfigChoices.playwright) {
    exportableConfig.push(
      ...getPlaywrightConfig(userConfigChoices.pathsOverrides?.playwrightTests),
    );
  }

  if (userConfigChoices.storybook) {
    exportableConfig.push(...getStorybookConfig());
  }

  if (userConfigChoices.files) {
    const allowedPatterns = userConfigChoices.files.map(
      (globPattern) => `!${globPattern}`,
    );

    exportableConfig = exportableConfig.map((configSlice) => {
      if (configSlice.ignores?.length && !lodash.isEmpty(configSlice.ignores)) {
        return configSlice;
      }

      return {
        ...configSlice,
        ignores: ['**/*', ...allowedPatterns],
      };
    });
  }

  const hasIgnoresRecommended = lodash.isBoolean(
    userConfigChoices.ignores?.recommended,
  )
    ? userConfigChoices.ignores?.recommended
    : true;

  const hasIgnoresInheritedFromGitignore = lodash.isBoolean(
    userConfigChoices.ignores?.inheritedFromGitignore,
  )
    ? userConfigChoices.ignores?.inheritedFromGitignore
    : true;

  exportableConfig.push({
    ignores: [
      ...(hasIgnoresRecommended ? ignores : []),
      ...(hasIgnoresInheritedFromGitignore
        ? getGitignorePatterns({ strict: false }).ignores
        : []),
    ],
  });

  return exportableConfig;
};
