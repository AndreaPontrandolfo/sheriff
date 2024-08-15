import vitest from '@vitest/eslint-plugin';
import { allJsExtensions } from '@sherifforg/constants';
import { vitestHandPickedRules } from './handpickedRules/vitestHandPickedRules';

export const getVitestConfig = (pathsOverrides?: string[]) => {
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
