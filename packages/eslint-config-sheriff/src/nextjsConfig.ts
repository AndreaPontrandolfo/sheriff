import nextjs from '@next/eslint-plugin-next';
import { supportedFileTypes } from '@sherifforg/constants';
import type { TSESLint } from '@typescript-eslint/utils';

export const nextjsConfig = {
  files: [supportedFileTypes],
  plugins: {
    '@next/next': nextjs,
  },
  rules: {
    ...nextjs.configs.recommended.rules,
    ...nextjs.configs['core-web-vitals'].rules,
  },
} as const satisfies TSESLint.FlatConfig.Config;
