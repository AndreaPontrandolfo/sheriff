import { type Config, defineConfig } from 'eslint/config';
import jest from 'eslint-plugin-jest';
import { allJsExtensions } from '@sherifforg/constants';
import { jestHandPickedRules } from './handpickedRules/jestHandPickedRules';

export const getJestConfig = (pathsOverrides?: string[]): Config[] => {
  return defineConfig({
    files: pathsOverrides ?? [
      `**/*.{test,spec}.{${allJsExtensions}}`,
      `**/tests/**/*.{${allJsExtensions}}`,
      `**/__tests__/**/*.{${allJsExtensions}}`,
    ],
    extends: [jest.configs['flat/style']],
    rules: {
      ...jestHandPickedRules,
      '@typescript-eslint/unbound-method': 0, // see: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
    },
  });
};
