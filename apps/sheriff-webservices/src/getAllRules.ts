/* eslint-disable import/newline-after-import */

import eslintRecommended from "@eslint/js";
import tseslint from "typescript-eslint";
import unicorn from "eslint-plugin-unicorn";
import sonarjs from "eslint-plugin-sonarjs";
import playwright from "eslint-plugin-playwright";
import jsdoc from "eslint-plugin-jsdoc"; // eslint-disable-line
import lodashPlugin from "eslint-plugin-lodash-f";
import pluginImport from "eslint-plugin-import";
import nextjs from "@next/eslint-plugin-next";
import fp from "eslint-plugin-fp";
import jest from "eslint-plugin-jest";
import vitest from "eslint-plugin-vitest";
import preferEarlyReturn from "@regru/eslint-plugin-prefer-early-return";
import tsdoc from "eslint-plugin-tsdoc";
import storybook from "eslint-plugin-storybook";
import fsecond from "eslint-plugin-fsecond";
import arrowReturnStyle from "eslint-plugin-arrow-return-style";
import stylistic from "@stylistic/eslint-plugin";
import astro from "eslint-plugin-astro";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import jsxRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import reactAccessibility from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import rel1cxReact from "@eslint-react/eslint-plugin";
import type {
  BarebonesConfigAtom,
  RuleOptions,
  SheriffSettings,
} from "@sherifforg/types";
import { prependRulesWithPluginName } from "./prependRulesWithPluginName.js";

interface Plugin {
  rules: Record<string, RuleOptions>;
}

export const getAllRules = (
  settings: SheriffSettings,
): BarebonesConfigAtom["rules"] => {
  const reactRulesCatalog = {
    ...reactRecommended.rules,
    ...jsxRuntime.rules,
    ...prependRulesWithPluginName(reactAccessibility.rules, "jsx-a11y"),
    ...prependRulesWithPluginName(reactHooks.rules, "react-hooks"),
    ...prependRulesWithPluginName(reactRefresh.rules, "react-refresh"),
    //@ts-expect-error
    ...prependRulesWithPluginName(rel1cxReact.rules, "@eslint-react"),
    ...prependRulesWithPluginName(fsecond.rules, "fsecond"),
  };

  const rules: BarebonesConfigAtom["rules"] = {
    ...eslintRecommended.rules,
    ...prependRulesWithPluginName(
      //@ts-expect-error
      tseslint.plugin.rules ?? [],
      "@typescript-eslint",
    ),
    ...prependRulesWithPluginName(unicorn.rules, "unicorn"),
    ...prependRulesWithPluginName(sonarjs.rules, "sonarjs"),
    ...prependRulesWithPluginName(jsdoc.rules, "jsdoc"),
    ...prependRulesWithPluginName((tsdoc as unknown as Plugin).rules, "tsdoc"),
    ...prependRulesWithPluginName(fp.rules, "fp"),
    ...prependRulesWithPluginName(
      preferEarlyReturn.rules,
      "@regru/prefer-early-return",
    ),
    ...prependRulesWithPluginName(
      (arrowReturnStyle as unknown as Plugin).rules,
      "arrow-return-style",
    ),
    ...prependRulesWithPluginName(
      (stylistic as unknown as Plugin).rules,
      "@stylistic",
    ),
    ...prependRulesWithPluginName(pluginImport.rules, "import"),
    ...prependRulesWithPluginName(storybook.rules, "storybook"),
    ...prependRulesWithPluginName((astro as unknown as Plugin).rules, "astro"),
    ...(settings.react ? reactRulesCatalog : {}),
    ...(settings.next
      ? prependRulesWithPluginName(nextjs.rules, "@next/next")
      : {}),
    ...(settings.playwright
      ? prependRulesWithPluginName(playwright.rules, "playwright")
      : {}),
    ...(settings.lodash
      ? prependRulesWithPluginName(lodashPlugin.rules, "lodash-f")
      : {}),
    ...(settings.jest ? prependRulesWithPluginName(jest.rules, "jest") : {}),
    ...(settings.vitest
      ? prependRulesWithPluginName(
          (vitest as unknown as Plugin).rules,
          "vitest",
        )
      : {}),
  };

  return rules;
};
