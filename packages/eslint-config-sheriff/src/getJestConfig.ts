import jest from 'eslint-plugin-jest';
import tseslint from 'typescript-eslint';
import { allJsExtensions } from '@sherifforg/constants';
import { jestHandPickedRules } from './handpickedRules/jestHandPickedRules';

export const getJestConfig = (pathsOverrides?: string[]) => {
  return tseslint.config({
    files: pathsOverrides ?? [
      `**/*.{test,spec}.{${allJsExtensions}}`,
      `**/tests/**/*.{${allJsExtensions}}`,
      `**/__tests__/**/*.{${allJsExtensions}}`,
    ],
    extends: jest.configs['flat/style'],
    // @ts-expect-error
    rules: {
      ...jestHandPickedRules,
      '@typescript-eslint/unbound-method': 0, // see: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
    },
  });
};
