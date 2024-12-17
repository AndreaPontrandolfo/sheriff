import astro from 'eslint-plugin-astro';

export const getAstroConfig = (
  hasReact: boolean,
  // customTSConfigPath: string | string[] | undefined,
) => {
  return [
    ...astro.configs.recommended,
    ...(hasReact ? astro.configs['jsx-a11y-strict'] : []),
    // {
    //   files: ['**/*.astro'],
    //   languageOptions: {
    //     parserOptions: {
    //       project: customTSConfigPath || true,
    //     },
    //   },
    //   settings: {
    //     'import/core-modules': [
    //       'astro:actions',
    //       'astro:assets',
    //       'astro:db',
    //       'astro:content',
    //       'astro:container',
    //       'astro:env',
    //       'astro:i18n',
    //       'astro:middleware',
    //       'astro:transitions',
    //       'astro:transitions/client',
    //     ],
    //     'import/parsers': {
    //       'astro-eslint-parser': ['.astro'],
    //       '@typescript-eslint/parser': ['.ts', '.tsx'],
    //       espree: ['.js'],
    //     },
    //   },
    // },
  ];
};
