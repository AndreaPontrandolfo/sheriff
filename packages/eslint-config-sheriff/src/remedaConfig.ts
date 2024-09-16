import remedaPlugin from 'eslint-plugin-remeda';
import { supportedFileTypes } from '@sherifforg/constants';
import tseslint from 'typescript-eslint';
import { type TSESLint } from '@typescript-eslint/utils';

export const remedaConfig: TSESLint.FlatConfig.ConfigArray = tseslint.config({
  files: [supportedFileTypes],
  plugins: { remeda: remedaPlugin },
  //@ts-expect-error
  rules: remedaPlugin.configs.recommended.rules,
});
