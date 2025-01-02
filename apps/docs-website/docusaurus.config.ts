import { version } from 'eslint-config-sheriff/package.json';
import { themes } from 'prism-react-renderer';
// eslint-disable-next-line @typescript-eslint/naming-convention
import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const currentYear = new Date().getFullYear();

const config: Config = {
  title: 'Sheriff',
  tagline:
    'A comprehensive and opinionated TypeScript-first ESLint configuration.',
  favicon: 'img/sheriff-logo.svg',

  // Set the production url of your site here
  url: 'https://www.eslint-config-sheriff.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  future: {
    experimental_faster: true,
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AndreaPontrandolfo', // Usually your GitHub org/user name.
  projectName: 'sheriff', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [
            [
              require('@docusaurus/remark-plugin-npm2yarn'),
              { sync: true, converters: ['yarn', 'pnpm', 'bun'] },
            ],
          ],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            xslt: true,
          },
          remarkPlugins: [
            [
              require('@docusaurus/remark-plugin-npm2yarn'),
              { sync: true, converters: ['yarn', 'pnpm', 'bun'] },
            ],
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/sheriff-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Sheriff',
      logo: {
        alt: 'Sheriff Logo',
        src: 'img/sheriff-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          position: 'right',
          value: `<div style="font-weight: 500;">v${version}</div>`,
          type: 'html',
        },
        {
          href: 'https://github.com/AndreaPontrandolfo/sheriff',
          position: 'right',
          className: 'navbar-github-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${currentYear.toString()} Sheriff. Built with Docusaurus, hosted on Vercel.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['bash', 'diff', 'json'],
    },
    algolia: {
      appId: 'E76LHB1EJI',
      // Public API key: it is safe to commit it
      apiKey: '8eaed87517914cb02078ae2ad16ee24a',

      indexName: 'eslint-config-sheriff',

      // Optional: see doc section below
      contextualSearch: true,

      // rateLimit: 8,
      // maxDepth: 10,

      // startUrls: ["https://www.eslint-config-sheriff.dev/"],
      // sitemaps: ["https://www.eslint-config-sheriff.dev/sitemap.xml"],

      // ignoreCanonicalTo: true,
      // discoveryPatterns: ['https://YOUR_WEBSITE_URL/**'],

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: "external\\.com|domain\\.com",

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: "/docs/", // or as RegExp: /\/docs\//
      //   to: "/",
      // },

      // Optional: Algolia search parameters
      // searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      // searchPagePath: "search",

      //... other Algolia params
    },
  } satisfies Preset.ThemeConfig,
  markdown: {
    mdx1Compat: {
      comments: false,
      admonitions: false,
      headingIds: true,
    },
  },
};

export default config;
