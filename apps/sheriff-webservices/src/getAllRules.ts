/* eslint-disable @typescript-eslint/no-unsafe-argument */
import type { ESLint } from 'eslint';
import arrowReturnStyle from 'eslint-plugin-arrow-return-style';
import astro from 'eslint-plugin-astro';
import fsecond from 'eslint-plugin-fsecond';
import pluginImport from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import jsdoc from 'eslint-plugin-jsdoc';
import reactAccessibility from 'eslint-plugin-jsx-a11y';
import lodashPlugin from 'eslint-plugin-lodash-f';
import playwright from 'eslint-plugin-playwright';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import * as regexpPlugin from 'eslint-plugin-regexp';
import remedaPlugin from 'eslint-plugin-remeda';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sonarjs from 'eslint-plugin-sonarjs';
import storybook from 'eslint-plugin-storybook';
import tsdoc from 'eslint-plugin-tsdoc';
import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';
import eslintJs from '@eslint/js';
import rel1cxReact from '@eslint-react/eslint-plugin';
import nextjs from '@next/eslint-plugin-next';
import preferEarlyReturn from '@regru/eslint-plugin-prefer-early-return';
import type {
  BarebonesConfigAtom,
  RuleOptions,
  SheriffSettings,
} from '@sherifforg/types';
import stylistic from '@stylistic/eslint-plugin';
import vitest from '@vitest/eslint-plugin';

interface Plugin {
  rules: Record<string, RuleOptions>;
}

export const getAllRules = (
  settings: SheriffSettings,
  prependRulesWithPluginName: (
    rules: Record<string, RuleOptions> | ESLint.Plugin['rules'] | undefined,
    pluginName: string,
  ) => Record<string, RuleOptions>,
): BarebonesConfigAtom['rules'] => {
  const reactRulesCatalog = {
    // @ts-expect-error
    ...prependRulesWithPluginName(react.rules, 'react'),
    ...prependRulesWithPluginName(reactAccessibility.rules, 'jsx-a11y'),
    ...prependRulesWithPluginName(reactHooks.rules, 'react-hooks'),
    // @ts-expect-error
    ...prependRulesWithPluginName(reactRefresh.rules, 'react-refresh'),
    ...prependRulesWithPluginName(
      (rel1cxReact as unknown as Plugin).rules,
      '@eslint-react',
    ),
    ...prependRulesWithPluginName(fsecond.rules, 'fsecond'),
  };

  const rules: BarebonesConfigAtom['rules'] = {
    ...eslintJs.configs.all.rules,
    ...prependRulesWithPluginName(
      //@ts-expect-error
      tseslint.plugin.rules ?? [],
      '@typescript-eslint',
    ),
    ...prependRulesWithPluginName(unicorn.rules, 'unicorn'),
    //@ts-expect-error
    ...prependRulesWithPluginName(sonarjs.rules, 'sonarjs'),
    ...prependRulesWithPluginName(jsdoc.rules, 'jsdoc'),
    ...prependRulesWithPluginName(tsdoc.rules, 'tsdoc'),
    ...prependRulesWithPluginName(
      preferEarlyReturn.rules,
      '@regru/prefer-early-return',
    ),
    ...prependRulesWithPluginName(regexpPlugin.rules, 'regexp'),
    ...prependRulesWithPluginName(arrowReturnStyle.rules, 'arrow-return-style'),
    // Stylistic's types are wrong, `default` should not be needed.
    ...prependRulesWithPluginName(
      (stylistic as unknown as Plugin).rules,
      '@stylistic',
    ),
    ...prependRulesWithPluginName(simpleImportSort.rules, 'simple-import-sort'),
    ...prependRulesWithPluginName(pluginImport.rules, 'import'),
    ...prependRulesWithPluginName(storybook.rules, 'storybook'),
    ...prependRulesWithPluginName(astro.rules, 'astro'),
    ...(settings.react ? reactRulesCatalog : {}),
    ...(settings.next
      ? prependRulesWithPluginName(nextjs.rules, '@next/next')
      : {}),
    ...(settings.playwright
      ? // @ts-expect-error
        prependRulesWithPluginName(playwright.rules, 'playwright')
      : {}),
    ...(settings.lodash
      ? prependRulesWithPluginName(lodashPlugin.rules, 'lodash-f')
      : {}),
    ...(settings.remeda
      ? prependRulesWithPluginName(remedaPlugin.rules, 'remeda')
      : {}),
    ...(settings.jest ? prependRulesWithPluginName(jest.rules, 'jest') : {}),
    ...(settings.vitest
      ? prependRulesWithPluginName(vitest.rules, 'vitest')
      : {}),
  };

  return rules;
};
