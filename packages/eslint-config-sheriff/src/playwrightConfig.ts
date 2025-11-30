import type { Config } from 'eslint/config';
import playwright from 'eslint-plugin-playwright';
import { allJsExtensions } from '@sherifforg/constants';
import { playwrightHandPickedRules } from './handpickedRules/playwrightHandPickedRules';

export const getPlaywrightConfig = (pathsOverrides?: string[]): Config[] => {
  return [
    {
      ...playwright.configs['flat/recommended'],
      files: pathsOverrides ?? [`**/*{${allJsExtensions}}`],
      rules: {
        ...playwright.configs['flat/recommended'].rules,
        ...playwrightHandPickedRules,
      },
    },
  ];
};
