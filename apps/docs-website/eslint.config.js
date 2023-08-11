const sheriff = require("eslint-config-sheriff");
const { defineFlatConfig } = require("eslint-define-config");
const docusaurusEslintPlugin = require("@docusaurus/eslint-plugin");
const {
  flat,
  flatCodeBlocks,
  createRemarkProcessor,
} = require("eslint-plugin-mdx");

const sheriffOptions = {
  react: true,
  lodash: false,
  next: false,
  playwright: false,
  jest: false,
  vitest: false,
  files: ["src/**/*.{ts,tsx,mdx}", "docs/**/*.mdx", "blog/**/*.mdx"],
};

module.exports = defineFlatConfig([
  ...sheriff(sheriffOptions),
  {
    files: ["*.tsx", "*.ts"], // .mdx?
    plugins: {
      "@docusaurus": docusaurusEslintPlugin,
    },
    rules: {
      "@docusaurus/no-untranslated-text": 0, // enable when we have translations
      "@docusaurus/string-literal-i18n-messages": 0, // enable when we have translations
    },
  },
  {
    ...flat,
    processor: createRemarkProcessor({
      lintCodeBlocks: true,
      languageMapper: {},
    }),
  },
  {
    ...flatCodeBlocks,
    rules: {
      ...flatCodeBlocks.rules,
    },
  },
]);
