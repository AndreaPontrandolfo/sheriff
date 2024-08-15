import arrowReturnStyle from 'eslint-plugin-arrow-return-style';
import astro from 'eslint-plugin-astro';
import fsecond from 'eslint-plugin-fsecond';
import pluginImport from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import jsdoc from 'eslint-plugin-jsdoc';
import reactAccessibility from 'eslint-plugin-jsx-a11y';
import lodashPlugin from 'eslint-plugin-lodash-f';
import playwright from 'eslint-plugin-playwright';
import jsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sonarjs from 'eslint-plugin-sonarjs';
import storybook from 'eslint-plugin-storybook';
import tsdoc from 'eslint-plugin-tsdoc';
import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';
import eslintRecommended from '@eslint/js';
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
import { prependRulesWithPluginName } from './prependRulesWithPluginName.js';

interface Plugin {
  rules: Record<string, RuleOptions>;
}

export const getAllRules = (
  settings: SheriffSettings,
): BarebonesConfigAtom['rules'] => {
  const reactRulesCatalog = {
    ...reactRecommended.rules,
    ...jsxRuntime.rules,
    ...prependRulesWithPluginName(reactAccessibility.rules, 'jsx-a11y'),
    ...prependRulesWithPluginName(reactHooks.rules, 'react-hooks'),
    ...prependRulesWithPluginName(reactRefresh.rules, 'react-refresh'),
    //@ts-expect-error
    ...prependRulesWithPluginName(rel1cxReact.rules, '@eslint-react'),
    ...prependRulesWithPluginName(fsecond.rules, 'fsecond'),
  };

  const rules: BarebonesConfigAtom['rules'] = {
    ...eslintRecommended.rules,
    ...prependRulesWithPluginName(
      //@ts-expect-error
      tseslint.plugin.rules ?? [],
      '@typescript-eslint',
    ),
    ...prependRulesWithPluginName(unicorn.rules, 'unicorn'),
    //@ts-expect-error
    ...prependRulesWithPluginName(sonarjs.rules, 'sonarjs'),
    ...prependRulesWithPluginName(jsdoc.rules, 'jsdoc'),
    ...prependRulesWithPluginName((tsdoc as unknown as Plugin).rules, 'tsdoc'),
    ...prependRulesWithPluginName(
      preferEarlyReturn.rules,
      '@regru/prefer-early-return',
    ),
    ...prependRulesWithPluginName(
      (arrowReturnStyle as unknown as Plugin).rules,
      'arrow-return-style',
    ),
    ...prependRulesWithPluginName(
      (stylistic as unknown as Plugin).rules,
      '@stylistic',
    ),
    ...prependRulesWithPluginName(simpleImportSort.rules, 'simple-import-sort'),
    ...prependRulesWithPluginName(pluginImport.rules, 'import'),
    ...prependRulesWithPluginName(storybook.rules, 'storybook'),
    ...prependRulesWithPluginName((astro as unknown as Plugin).rules, 'astro'),
    ...(settings.react ? reactRulesCatalog : {}),
    ...(settings.next
      ? prependRulesWithPluginName(nextjs.rules, '@next/next')
      : {}),
    ...(settings.playwright
      ? prependRulesWithPluginName(playwright.rules, 'playwright')
      : {}),
    ...(settings.lodash
      ? prependRulesWithPluginName(lodashPlugin.rules, 'lodash-f')
      : {}),
    ...(settings.jest ? prependRulesWithPluginName(jest.rules, 'jest') : {}),
    ...(settings.vitest
      ? prependRulesWithPluginName(
          (vitest as unknown as Plugin).rules,
          'vitest',
        )
      : {}),
  };

  return rules;
};
