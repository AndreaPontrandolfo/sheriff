import jest from 'eslint-plugin-jest';
import { allJsExtensions } from '@sherifforg/constants';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import { jestHandPickedRules } from './handpickedRules/jestHandPickedRules';

export const getJestConfig = (pathsOverrides?: string[]): FlatConfig.Config => {
  return {
    files: pathsOverrides ?? [
      `**/*.{test,spec}.{${allJsExtensions}}`,
      `**/tests/**/*.{${allJsExtensions}}`,
      `**/__tests__/**/*.{${allJsExtensions}}`,
    ],
    plugins: {
      jest,
    },
    languageOptions: {
      globals: jest.environments.globals.globals,
    },
    rules: {
      ...jest.configs.style.rules,
      ...jestHandPickedRules,
      '@typescript-eslint/unbound-method': 0, // see reference: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
    },
  };
};
