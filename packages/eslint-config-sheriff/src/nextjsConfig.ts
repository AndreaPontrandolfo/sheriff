import { fixupPluginRules } from '@eslint/compat';
import nextjs from '@next/eslint-plugin-next';
import { supportedFileTypes } from '@sherifforg/constants';

export const nextjsConfig = {
  files: [supportedFileTypes],
  plugins: {
    '@next/next': fixupPluginRules(nextjs),
  },
  rules: {
    ...nextjs.configs.recommended.rules,
    ...nextjs.configs['core-web-vitals'].rules,
    'import/no-default-export': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'function-expression',
      },
    ],
    '@next/next/no-html-link-for-pages': 0, // pages router is legacy at this point. We don't need to support this rule anymore.
  },
};
