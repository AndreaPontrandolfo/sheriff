import { sheriff } from 'eslint-config-sheriff';
import { defineFlatConfig } from 'eslint-define-config';
import docusaurusEslintPlugin from '@docusaurus/eslint-plugin';
import { flat, flatCodeBlocks, createRemarkProcessor } from 'eslint-plugin-mdx';

const sheriffOptions = {
  react: true,
  lodash: true,
  remeda: false,
  next: false,
  astro: false,
  playwright: false,
  jest: false,
  vitest: false,
};

export default defineFlatConfig([
  ...sheriff(sheriffOptions),
  {
    files: ['*.tsx', '*.ts'], // .mdx?
    plugins: {
      '@docusaurus': docusaurusEslintPlugin,
    },
    rules: {
      '@docusaurus/no-untranslated-text': 0, // enable when we have translations
      '@docusaurus/string-literal-i18n-messages': 0, // enable when we have translations,
      '@docusaurus/no-html-links': 2,
      '@docusaurus/prefer-docusaurus-heading': 2,
    },
  },
  {
    ...flat,
    processor: createRemarkProcessor({
      lintCodeBlocks: false,
      languageMapper: {},
    }),
  },
  {
    ...flatCodeBlocks,
    rules: {
      ...flatCodeBlocks.rules,
    },
  },
  {
    files: ['**/*ts', '**/*tsx'],
    rules: {
      'sonarjs/no-duplicate-string': 0,
      '@typescript-eslint/no-misused-promises': [
        2,
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
    },
  },
  {
    ignores: [
      '.docusaurus/**/*',
      '.turbo/**/*',
      'babel.config.js',
      'CHANGELOG.md',
    ],
  },
]);
