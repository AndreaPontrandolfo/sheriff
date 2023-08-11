---
sidebar_position: 15
---

# 📚 FAQ

## Why you didn’t include Eslint plugins/rules for "X" library?

- [Cypress](https://github.com/cypress-io/eslint-plugin-cypress) ➜ Don't use [Cypress](https://www.cypress.io/). Use [Playwright](https://playwright.dev/) instead.
- [Testing library](https://github.com/testing-library/eslint-plugin-testing-library) ➜ I believe Sheriff should not encourage wrong testing practices. In my opinion [testing library](https://github.com/testing-library) is one of the least efficient ways to test UIs, by priciples. In most codebases it does more harm than good. You can use [Storybook](https://github.com/storybookjs/storybook) to test components in isolation and [Playwright](https://playwright.dev/) for any kind of integration and end-to-end tests.

## Is Sheriff compatible with "X"?

- [Vite](https://vitejs.dev/) ➜ Yes.
- [Next.js](https://github.com/vercel/next.js) ➜ Yes. Sheriff has explicit support for Next.js. You can enable it in the Sheriff config options.
- [CRA](https://create-react-app.dev/) ➜ Yes. Just add this line to your `.env` file:

  ```.env title=".env"
  DISABLE_ESLINT_PLUGIN=true
  ```

- [Rome](https://rome.tools/) ➜ No. Rome is not compatible with Eslint in the first place.
- [Deno](https://deno.land/) ➜ No. Deno is not compatible with Eslint in the first place.
- [Bun](https://bun.sh/) ➜ Untested.
