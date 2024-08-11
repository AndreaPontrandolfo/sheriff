import playwright from 'eslint-plugin-playwright';
import { allJsExtensions } from '@sherifforg/constants';
import { playwrightHandPickedRules } from './handpickedRules/playwrightHandPickedRules';

export const playwrightConfig = [
  {
    ...playwright.configs['flat/recommended'],
    files: [`**/*{${allJsExtensions}}`],
  },
  {
    files: [`**/*{${allJsExtensions}}`],
    rules: {
      ...playwrightHandPickedRules,
    },
  },
];
