import { allJsExtensions } from '@sherifforg/constants';
import type { TSESLint } from '@typescript-eslint/utils';
import vitest from '@vitest/eslint-plugin';
import { vitestHandPickedRules } from './handpickedRules/vitestHandPickedRules';

export const getVitestConfig = (
  pathsOverrides?: string[],
): TSESLint.FlatConfig.Config => {
  return {
    files: pathsOverrides ?? [
      `**/*.{test,spec}.{${allJsExtensions}}`,
      `**/tests/**/*.{${allJsExtensions}}`,
      `**/__tests__/**/*.{${allJsExtensions}}`,
    ],
    plugins: {
      vitest,
    },
    rules: vitestHandPickedRules,
  };
};
