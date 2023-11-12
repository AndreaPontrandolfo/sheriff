---
sidebar_position: 14
---

# ⚡ Performance tips

Depending on the device you are operating on, in-editor performance can be a concern with Sheriff. <br />
`@typescript-eslint` can be particularly taxing on the system, so, some performance considerations are in order.

## Rules performance benchmarking

The currently known slowest rules in Sheriff are:

- `@typescript-eslint/no-misused-promises`
- `@typescript-eslint/no-unsafe-argument`
- `@typescript-eslint/naming-convention`
- `@typescript-eslint/no-floating-promises`
- `import/no-unresolved`
- `import/no-named-as-default`

You can benchmark rules performance by yourself by running the following command in the terminal:

```bash npm2yarn
TIMING=1 npm run eslint .
```

Learn more in the [ESLint official docs section](https://eslint.org/docs/latest/extend/custom-rules#profile-rule-performance).

## Rules performance optimization strategies

There are a few techniques you can leverage to improve linting time. <br />
You can choose which technique to employ or mix-and-match them.

### Disable some of the heaviest rules

As simple as it sounds, you could assess which of the slowest rules you can live without and simply disable them.

### Enable some of the heaviest rules only on CI

This approach has a little more overhead, but you could try to run the heaviest rules only on CI.

Here is an example on how you can achieve it:

```js title="eslint.config.js"
import sheriff from "eslint-config-sheriff";
import { defineFlatConfig } from "eslint-define-config";

const sheriffOptions = {
  react: false,
  next: false,
  lodash: false,
  playwright: false,
  jest: false,
  vitest: false,
};

export default defineFlatConfig([
  ...sheriff(sheriffOptions),
  {
    rules: {
      // highlight-next-line
      "@typescript-eslint/no-misused-promises": process.env.CI ? 2 : 0,
    },
  },
]);
```

This is a tradeoff, as this approach is a DX degradation and could lead to some developer frustration, because perfectly valid code in local environment could instead fail in CI.

### Adopt ESLint cache

ESLint features an internal cache where you can store your previous runs.

This technique has pretty much no downsides and you should employ it in any case, regardless of any other factor.

Read the official docs on ESLint caching here: [command-line-interface#caching](https://eslint.org/docs/latest/use/command-line-interface#caching). <br />
Instead, if your project lives in a monorepo, you can follow [this guide](https://www.shew.dev/monorepos/guardrails/eslint).

### Revise glob patterns

ESLint, Typescript and Sheriff use minimatch syntax to handle glob patterns. <br />
Wide glob patterns can lead to performance degradation.

Pay special attention to:

- [ESLint files and ignore patterns](https://eslint.org/docs/latest/use/configure/configuration-files-new#specifying-files-and-ignores)
- [Typescript include and exclude patterns](https://typescript-eslint.io/linting/troubleshooting/performance-troubleshooting/#wide-includes-in-your-tsconfig)
- [Sheriff files options](./configuration#files)
- [Sheriff pathsOveriddes options](./configuration#pathsoveriddes)
  - [wide-globs-in-parseroptionsproject](https://typescript-eslint.io/linting/typed-linting/monorepos/#wide-globs-in-parseroptionsproject)
