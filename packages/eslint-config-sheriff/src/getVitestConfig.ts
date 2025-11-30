import type { Config } from 'eslint/config';
import { allJsExtensions } from '@sherifforg/constants';
import vitest from '@vitest/eslint-plugin';
import { vitestHandPickedRules } from './handpickedRules/vitestHandPickedRules';

export const getVitestConfig = (pathsOverrides?: string[]): Config => {
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
