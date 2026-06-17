import type { Config } from 'eslint/config';
import { reactRefresh } from 'eslint-plugin-react-refresh';
import nextjs from '@next/eslint-plugin-next';
import { allJsExtensions, allJsxExtensions } from '@sherifforg/constants';

export const nextjsConfig: Config[] = [
  {
    files: [`**/*.{${allJsExtensions},${allJsxExtensions}}`],
    plugins: {
      '@next/next': nextjs,
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
    },
  },
  {
    files: [
      `**/page.{${allJsExtensions},${allJsxExtensions}}`,
      `**/layout.{${allJsExtensions},${allJsxExtensions}}`,
    ],
    rules: {
      ...reactRefresh.configs.next().rules,
    },
  },
];
