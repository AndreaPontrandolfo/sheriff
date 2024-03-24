import astro from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';

export const getAstroConfig = (
  hasReact: boolean,
  customTSConfigPath: string | string[] | undefined,
) => {
  return {
    files: ['**/*.astro'],
    plugins: {
      astro,
    },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: customTSConfigPath || true,
        extraFileExtensions: ['.astro'],
      },
    },
    processor: 'astro/client-side-ts',
    rules: {
      ...astro.configs.recommended.rules,
      // @ts-expect-error - eslint-plugin-astro typings are wrong
      ...(hasReact ? astro.configs['jsx-a11y-recommended'].rules : {}),
      'astro/valid-compile': 0,
      'astro/semi': 0,
    },
  };
};
