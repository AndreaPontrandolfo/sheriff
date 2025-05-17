import type { SheriffConfigurablePlugins } from '@sherifforg/types';

export const sheriffStartingOptions: SheriffConfigurablePlugins = {
  react: false,
  lodash: false,
  remeda: false,
  next: false,
  astro: false,
  playwright: false,
  storybook: true,
  jest: false,
  vitest: false,
} as const;

export const configCombinationDefaultValues = {
  react: true,
  lodash: true,
  remeda: true,
  next: true,
  astro: true,
  playwright: true,
  storybook: true,
  jest: false,
  vitest: true,
} as const;

export const jsExtensions = 'js,mjs,cjs';

export const jsxExtensions = 'jsx,mjsx';

export const tsExtensions = 'ts,mts,cts';

export const tsxExtensions = 'tsx,mtsx';

export const allJsExtensions = `${jsExtensions},${tsExtensions}`;

export const allJsxExtensions = `${jsxExtensions},${tsxExtensions}`;

export const supportedFileTypes = `**/*{${allJsExtensions},${allJsxExtensions},astro}`;

export const testsFilePatterns = [
  `**/*.{test,spec}.{${allJsExtensions}}`,
  `**/tests/**/*.{${allJsExtensions}}`,
  `**/__tests__/**/*.{${allJsExtensions}}`,
] as const;

export const ignores = [
  '**/node_modules/**',
  '**/dist/**',
  '**/build/**',
  '**/artifacts/**',
  '**/coverage/**',
  'eslint.config.{js,mjs,cjs}', // we currently cannot lint the eslint.config.js itself. It is currently only provided as a .js file and this config currently only supports .ts files. Therefore, eslint.config.js can only be re-enabled once this config support pure .js files too, or the ESLint team support the eslint.config.ts file.
] as const;

export const cliOptionsReference = {
  'no-fail': {
    type: 'boolean',
    description:
      'If true: when a inconsistency is found, it will be reported as a warning. If false: when a inconsistency is found, it will be reported as an error and the process will fail with exit code 1.',
    default: false,
  },
  debug: {
    type: 'boolean',
    description: 'Enables verbose logging.',
    default: false,
  },
  'ignore-react': {
    type: 'boolean',
    description: 'Skips React checks (react, react-dom, next).',
    default: false,
  },
  'ignore-next': {
    type: 'boolean',
    description: 'Skips Next.js checks.',
    default: false,
  },
  'ignore-lodash': {
    type: 'boolean',
    description: 'Skips lodash (lodash, lodash-es) checks.',
    default: false,
  },
  'ignore-remeda': {
    type: 'boolean',
    description: 'Skips remeda checks.',
    default: false,
  },
  'ignore-vitest': {
    type: 'boolean',
    description: 'Skips vitest checks.',
    default: false,
  },
  'ignore-jest': {
    type: 'boolean',
    description: 'Skips jest checks.',
    default: false,
  },
  'ignore-playwright': {
    type: 'boolean',
    description: 'Skips playwright (playwright, @playwright/test) checks.',
    default: false,
  },
  'ignore-astro': {
    type: 'boolean',
    description: 'Skips astro checks.',
    default: false,
  },
} as const;

export const createConfigOptionsReference = {
  filter: {
    type: 'string',
    description:
      'Filter for specific workspace. More info here https://www.eslint-config-sheriff.dev/docs/monorepo-support#setup-with-npm-init-sherifforgconfig',
  },
  typescript: {
    type: 'boolean',
    description:
      'eslint.config.ts boilerplate will be added without asking it in the wizard.',
  },
  prettier: {
    type: 'boolean',
    description:
      'Prettier boilerplate will be added without asking it in the wizard.',
  },
  'install-deps': {
    type: 'boolean',
    description:
      'Should the dependencies be installed at the end of the wizard or not.',
    default: true,
  },
} as const;
