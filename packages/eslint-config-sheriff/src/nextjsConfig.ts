import type { Config } from 'eslint/config';
import { fixupPluginRules } from '@eslint/compat';
import nextjs from '@next/eslint-plugin-next';
import { allJsExtensions, allJsxExtensions } from '@sherifforg/constants';

export const nextjsConfig: Config[] = [
  {
    files: [`**/*.{${allJsExtensions},${allJsxExtensions}}`],
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
  },
  {
    files: [
      `**/page.{${allJsExtensions},${allJsxExtensions}}`,
      `**/layout.{${allJsExtensions},${allJsxExtensions}}`,
    ],
    rules: {
      'react-refresh/only-export-components': [
        2,
        {
          allowExportNames: [
            'metadata',
            'generateMetadata',
            'generateStaticParams',
          ],
        },
      ],
    },
  },
];
