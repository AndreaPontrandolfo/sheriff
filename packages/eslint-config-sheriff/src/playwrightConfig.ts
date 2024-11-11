import playwright from 'eslint-plugin-playwright';
import { allJsExtensions } from '@sherifforg/constants';
import { playwrightHandPickedRules } from './handpickedRules/playwrightHandPickedRules';

export const getPlaywrightConfig = (pathsOverrides?: string[]) => {
  return [
    {
      ...playwright.configs['flat/recommended'],
      files: pathsOverrides ?? [`**/*{${allJsExtensions}}`],
    },
    {
      files: pathsOverrides ?? [`**/*{${allJsExtensions}}`],
      rules: playwrightHandPickedRules,
    },
  ];
};
