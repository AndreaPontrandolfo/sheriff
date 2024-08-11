import getGitignorePatterns from 'eslint-config-flat-gitignore';
import lodash from 'lodash';
import type { FlatESLintConfig } from 'eslint-define-config';
import { SheriffSettings } from '@sherifforg/types';
import { ignores, sheriffStartingOptions } from '@sherifforg/constants';
import { getReactConfig } from './getReactConfig';
import { getBaseConfig } from './getBaseConfig';
import { nextjsConfig } from './nextjsConfig';
import { getAstroConfig } from './getAstroConfig';
import { playwrightConfig } from './playwrightConfig';
import { lodashConfig } from './lodashConfig';
import { getJestConfig } from './getJestConfig';
import { getVitestConfig } from './getVitestConfig';
import { type TSESLint } from '@typescript-eslint/utils';

export const getExportableConfig = (
  userConfigChoices: SheriffSettings = sheriffStartingOptions,
  areAllRulesForced?: boolean,
): FlatESLintConfig[] => {
  let exportableConfig: TSESLint.FlatConfig.ConfigArray = [
    ...getBaseConfig(userConfigChoices),
  ];

  if (userConfigChoices.react || userConfigChoices.next) {
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
      getJestConfig(userConfigChoices.pathsOverrides?.tests),
    );
  }

  if (userConfigChoices.vitest) {
    exportableConfig.push(
      //@ts-expect-error
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
    //@ts-expect-error
    exportableConfig.push(...playwrightConfig);
  }

  if (userConfigChoices.files) {
    const allowedPatterns = userConfigChoices.files.map(
      (globPattern) => `!${globPattern}`,
    );

    exportableConfig = exportableConfig.map((configSlice) => {
      if (configSlice.ignores?.length && configSlice.ignores.length > 0) {
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

  return exportableConfig as FlatESLintConfig[];
};
