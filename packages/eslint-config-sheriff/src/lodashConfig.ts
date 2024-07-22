import lodashPlugin from 'eslint-plugin-lodash-f';
import { supportedFileTypes } from '@sherifforg/constants';
import type { TSESLint } from '@typescript-eslint/utils';
import { lodashHandPickedRules } from './handpickedRules/lodashHandPickedRules';

export const lodashConfig = {
  files: [supportedFileTypes],
  plugins: {
    'lodash-f': lodashPlugin,
  },
  rules: {
    ...lodashPlugin.configs.recommended.rules,
    ...lodashHandPickedRules,
  },
} as const satisfies TSESLint.FlatConfig.Config;
