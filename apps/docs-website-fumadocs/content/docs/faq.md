---
title: FAQ
description: Frequently Asked Questions about Sheriff
icon: SlSpeech
---

## Why you didn’t include ESLint plugins/rules for "X" library?

### eslint-plugin-cypress

[eslint-plugin-cypress](https://github.com/cypress-io/eslint-plugin-cypress).

Don't use [Cypress](https://www.cypress.io/). Use [Playwright](https://playwright.dev/) instead.

### eslint-plugin-testing-library

[eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library).

I believe Sheriff should not encourage wrong testing practices. In my opinion [testing library](https://github.com/testing-library) is one of the least efficient ways to test UIs, by principles. In most codebases it does more harm than good. You can use [Storybook](https://github.com/storybookjs/storybook) to test components in isolation and [Playwright](https://playwright.dev/) for any kind of integration and end-to-end tests.

### eslint-plugin-unused-imports

[eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports).

Anything this plugin does is done better by [knip](https://github.com/webpro/knip).

### import/no-unused-modules

[import/no-unused-modules](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md).

This rule is very slow and and has some issues, it is also hard to get working properly in most codebases. Instead, i recommend [knip](https://github.com/webpro/knip).

## Is Sheriff compatible with "X"?

Generally speaking, everything that is compatible with ESLint, should also be compatible with Sheriff. That being said, in some cases there can be some nuances:

### Vite

[Vite](https://vitejs.dev/).

Compatible out of the box.

### Next.js

[Next.js](https://github.com/vercel/next.js).

Sheriff has explicit support for Next.js. You can enable it in the Sheriff config options. You shouldn't follow any of the steps provided in the [Next.js website](https://nextjs.org/docs/pages/building-your-application/configuring/eslint). Only follow the Sheriff instructions.

It's also recommended to [disable the nextjs default linting from the build process](https://nextjs.org/docs/pages/api-reference/config/eslint#disabling-linting-during-production-builds), to avoid potential conflicts with Sheriff.

```ts twoslash title="next.config.ts"
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
```

### CRA

[CRA](https://create-react-app.dev/).

Compatible. Just add this line to your `.env` file:

```dotenv title=".env"
  DISABLE_ESLINT_PLUGIN=true
```

## Does Sheriff support vanilla Javascript codebases?

Sheriff is a Typescript-first ESLint configuration. It's focused on Typescript codebases. You can almost consider Sheriff a superset of [@typescript-eslint](https://typescript-eslint.io/). <br />
If your codebase is not written in Typescript, you should worry about that first, before worrying about linting.

For this reason, vanilla Javascript is not supported as of right now, but support may come at a later time.
