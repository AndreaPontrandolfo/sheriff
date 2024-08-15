import nextjs from '@next/eslint-plugin-next';
import { fixupPluginRules } from '@eslint/compat';
import { supportedFileTypes } from '@sherifforg/constants';

export const nextjsConfig = {
  files: [supportedFileTypes],
  plugins: {
    '@next/next': fixupPluginRules(nextjs),
  },
  rules: {
    ...nextjs.configs.recommended.rules,
    ...nextjs.configs['core-web-vitals'].rules,
  },
};
