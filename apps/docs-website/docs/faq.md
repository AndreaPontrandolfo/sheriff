---
sidebar_position: 19
---

# 📚 FAQ

## Why you didn’t include ESLint plugins/rules for “X” library?

- [Cypress](https://github.com/cypress-io/eslint-plugin-cypress) ➜ Don’t use [Cypress](https://www.cypress.io/). Use [Playwright](https://playwright.dev/) instead
- [Testing library](https://github.com/testing-library/eslint-plugin-testing-library) ➜ I believe Sheriff should not encourage wrong testing practices. In my opinion, [Testing Library](https://github.com/testing-library) is one of the least efficient ways to test UIs, by principles. In most codebases, it does more harm than good. You can use [Storybook](https://github.com/storybookjs/storybook) to test components in isolation and [Playwright](https://playwright.dev/) for integration and end-to-end tests
- [eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports) ➜ Everything this plugin does is done better by [Knip](https://github.com/webpro-nl/knip)
- [`import/no-unused-modules`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md) ➜ This rule is slow and has many bugs, it is also hard to get working properly in most codebases. Instead, I recommend [Knip](https://github.com/webpro-nl/knip)

## Is Sheriff compatible with “X”?

Generally speaking, everything that is compatible with ESLint should also be compatible with Sheriff. That said, there are nuances:

- [Vite](https://vite.dev/) ➜ Compatible out of the box.
- [Next.js](https://github.com/vercel/next.js) ➜ Sheriff has explicit support for Next.js. You can enable it in the Sheriff config options. You should _not_ follow any of the steps provided on the [Next.js website](https://nextjs.org/docs/pages/api-reference/config/eslint). Only follow Sheriff’s instructions
- [CRA](https://create-react-app.dev/) ➜ Compatible. Just add this line to your `.env` file:

  ```.env title=".env"
  DISABLE_ESLINT_PLUGIN=true
  ```

## Does Sheriff support vanilla JavaScript codebases?

Sheriff is a TypeScript-first ESLint configuration. It’s focused on TypeScript codebases. You can almost consider Sheriff a superset of [typescript-eslint](https://typescript-eslint.io/).<br />
If your codebase is not written in TypeScript, you should worry about that first before concerning yourself with linting.

For this reason, vanilla JavaScript is not supported for now, although support may be added later.

## Versioning Policy

Sheriff follows [Semantic Versioning](https://semver.org/) using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and [Changesets](https://github.com/changesets/changesets).
SemVer stipulates that projects should define their “public API” so that users can understand the impact of upgrading to a new version.
If changes to your configuration are needed for it to continue functioning, we consider it to be a SemVer breaking change.
If changes are not needed to your configuration, whether a change is
a feature, a patch, or breaking change is determined on a case-by-case basis.
