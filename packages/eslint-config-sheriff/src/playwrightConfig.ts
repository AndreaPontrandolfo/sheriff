import playwright from "eslint-plugin-playwright";
import { allJsExtensions } from "@sherifforg/constants";
import type { TSESLint } from "@typescript-eslint/utils";
import { playwrightHandPickedRules } from "./handpickedRules/playwrightHandPickedRules";

export const getPlaywrightConfig = (
  pathsOverrides?: string[],
): TSESLint.FlatConfig.ConfigArray => {
  return [
    {
      ...playwright.configs["flat/recommended"],
      files: pathsOverrides ?? [`**/*{${allJsExtensions}}`],
      rules: {
        ...playwright.configs["flat/recommended"].rules,
        ...playwrightHandPickedRules,
      },
    },
  ];
};
