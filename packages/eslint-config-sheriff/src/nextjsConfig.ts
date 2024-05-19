import nextjs from '@next/eslint-plugin-next';
import { supportedFileTypes } from '@sherifforg/constants';

export const nextjsConfig = {
  files: [supportedFileTypes],
  plugins: {
    '@next/next': nextjs,
  },
  rules: {
    ...nextjs.configs.recommended.rules,
    ...nextjs.configs['core-web-vitals'].rules,
  },
};
