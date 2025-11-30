import { type Config, defineConfig } from 'eslint/config';
import storybook from 'eslint-plugin-storybook';

export const getStorybookConfig = (): Config[] => {
  return defineConfig({
    extends: [
      storybook.configs['flat/recommended'],
      storybook.configs['flat/csf'],
    ],
    rules: {
      'import/no-default-export': 0,
    },
    ignores: ['!.storybook'],
  });
};
