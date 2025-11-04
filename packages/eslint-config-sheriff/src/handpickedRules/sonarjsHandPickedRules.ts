import type { TSESLint } from "@typescript-eslint/utils";

export const sonarjsHandPickedRules = {
  "sonarjs/cognitive-complexity": 0,
  "sonarjs/prefer-immediate-return": 0,
  "sonarjs/no-duplicate-string": 0,
} as const satisfies TSESLint.FlatConfig.Rules;
