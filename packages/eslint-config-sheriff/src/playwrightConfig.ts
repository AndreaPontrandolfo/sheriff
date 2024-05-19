import playwright from 'eslint-plugin-playwright';
import { allJsExtensions } from '@sherifforg/constants';
import { playwrightHandPickedRules } from './handpickedRules/playwrightHandPickedRules';

export const playwrightConfig = {
  files: [`**/*{${allJsExtensions}}`],
  plugins: {
    playwright,
  },
  rules: {
    ...playwright.configs['playwright-test'].rules,
    ...playwrightHandPickedRules,
  },
};
