# sheriff-webservices

## 3.2.9

### Patch Changes

- 28b9143: feat(plugins): added eslint-plugin-remeda support
- e140d5c: feat(rules): removed react/jsx-props-no-spreading
  feat(rules): added no-useless-computed-key
  feat(rules): added unicorn/no-unused-properties
  feat(rules): restricted the confusingBrowserGlobals
  feat(rule): added react/no-this-in-sfc
  chore(deps): updated some deps
  Closes #247
- 3cae3df: chore(deps): updated some deps
- Updated dependencies [28b9143]
- Updated dependencies [e140d5c]
- Updated dependencies [3cae3df]
  - eslint-config-sheriff@22.0.0

## 3.2.8

### Patch Changes

- 1e98283: feat(cli): added prompt graceful cancellation
  Fix #241
- Updated dependencies [f9f7cd2]
- Updated dependencies [1e98283]
- Updated dependencies [70f740b]
  - eslint-config-sheriff@21.2.0

## 3.2.7

### Patch Changes

- 701edf5: feat!: esm-only bundling (follow up to #225)
  fix: don't bundle node_modules
  fix: webservices types
  feat!: enable verbatimModuleSyntax
- Updated dependencies [701edf5]
  - eslint-config-sheriff@21.1.0

## 3.2.6

### Patch Changes

- 350edfb: fix(cli): remove CJS support for config file and fix crash. Fixes #222
  feat(cli): added version and help commands with aliases to cli
  feat(cli): added welcome message
- Updated dependencies [9eafd0f]
- Updated dependencies [350edfb]
- Updated dependencies [8210524]
  - eslint-config-sheriff@21.0.0

## 3.2.5

### Patch Changes

- 1d42d3b: feat(deps): update eslint-plugin-playwright to latest
  Fixes #184
- a124f56: feat(config): removed eslint-plugin-fp
- c92bee5: feat(config): added getIndexedBaseNoRestrictedSyntaxRules
- 66b6e50: feat(deps): update eslint-plugin-jest to latest
  Fixes #183
- dd61624: feat(deps): Update eslint-plugin-jsdoc to latest. Closes #182
- fdbb0db: chore(deps): updated some deps
- 734355c: feat(deps): updated eslint-plugin-unicorn to latest
- 028c5d7: chore(deps): bump
- 84ab8bb: feat(deps): update eslint-plugin-react to latest
  Fixes #176
- b755626: feat(deps): update eslint-plugin-sonarjs to latest
- fc4e0e5: feat(deps): update @typescript-eslint/eslint-plugin to latest
  Fixes #177
- 76dcc6a: feat(deps): added @types/eslint-plugin-jsx-a11y
- b4685c3: feat(config): added ESLint v9 support and removed ESLint version 8.57.0 pins
  Fixes #179
  Fixes #185
- Updated dependencies [1d42d3b]
- Updated dependencies [a124f56]
- Updated dependencies [c92bee5]
- Updated dependencies [66b6e50]
- Updated dependencies [dd61624]
- Updated dependencies [fdbb0db]
- Updated dependencies [4960381]
- Updated dependencies [734355c]
- Updated dependencies [028c5d7]
- Updated dependencies [84ab8bb]
- Updated dependencies [b755626]
- Updated dependencies [fc4e0e5]
- Updated dependencies [76dcc6a]
- Updated dependencies [f685bae]
- Updated dependencies [b4685c3]
  - eslint-config-sheriff@20.0.0

## 3.2.4

### Patch Changes

- Updated dependencies [aa57685]
- Updated dependencies [1859c47]
- Updated dependencies [0fd4217]
  - eslint-config-sheriff@19.0.0

## 3.2.3

### Patch Changes

- Updated dependencies [9883842]
  - eslint-config-sheriff@18.7.0

## 3.2.2

### Patch Changes

- 409ee4a: feat(rules): removed no-complicated-conditional-rendering
  feat(plugins): added eslint-plugin-simple-import-sort plugin
  feat(rules): replaced a unicorn rule with a import rule
  docs(website): updated docs regarding vscode support
- Updated dependencies [6e6cbee]
- Updated dependencies [409ee4a]
  - eslint-config-sheriff@18.6.0

## 3.2.1

### Patch Changes

- Updated dependencies [7879040]
  - eslint-config-sheriff@18.5.0

## 3.2.0

### Minor Changes

- 7a9a7ef: fix(cli): the cli will install eslint@8.57.0

### Patch Changes

- Updated dependencies [7a9a7ef]
  - eslint-config-sheriff@18.4.0

## 3.1.0

### Minor Changes

- b4cc03a: chore(deps): updated unicorn, vitest and internal deps
  feat(rules): added 3 new unicorn rules
- 74520b0: feat(plugins): added 3 new rules from @eslint-react/eslint-plugin

### Patch Changes

- 0afd2c8: feat(cli): completely revamped CLI experience
- Updated dependencies [0afd2c8]
- Updated dependencies [b4cc03a]
- Updated dependencies [12d4471]
- Updated dependencies [74520b0]
  - eslint-config-sheriff@18.3.0

## 3.0.0

### Major Changes

- bf2c839: feat(webservices): swapped expressjs with honojs
  feat(docs-website): page rules now also include undeclared rules

### Minor Changes

- 2306ffa: chore(deps): updated node and pnpm versions
- b8c1ff4: chore(config): updated tseslint
  chore(webservices): updated tseslint

### Patch Changes

- 084818e: chore(deps): updated eslint-plugin-astro to latest
- 8c5ba4d: chore(webservices): tentative changesets comparator fix
- 3f56ab8: feat(rules): added eslint-plugin-arrow-return-style
- Updated dependencies [084818e]
- Updated dependencies [bf2c839]
- Updated dependencies [043c53d]
- Updated dependencies [b8c1ff4]
- Updated dependencies [3f56ab8]
  - eslint-config-sheriff@18.2.0

## 2.1.0

### Minor Changes

- 977b2b4: feat(types): Update @sheriff/types to @sherifforg/types
- aba4e21: ci(monorepo): added merge-checks

### Patch Changes

- Updated dependencies [977b2b4]
- Updated dependencies [aba4e21]
  - eslint-config-sheriff@18.1.0

## 2.0.0

### Major Changes

- faf08ec: feat(deps): Update eslint-config-sheriff version

### Patch Changes

- 54dda70: feat(webservice): added keepalive endpoint
- 4ead06c: fix(webservice): #2 attempt at fixing the webserver
- aa3e426: fix(webservice): added ts module declaration
- Updated dependencies [93c94cf]
- Updated dependencies [69b0dba]
- Updated dependencies [991f1fa]
- Updated dependencies [faf08ec]
  - eslint-config-sheriff@18.0.0

## 1.1.0

### Minor Changes

- df2fa02: docs(website): added totalRulesAmount metrics to rules page

### Patch Changes

- Updated dependencies [00d83c4]
- Updated dependencies [4360bfb]
- Updated dependencies [df2fa02]
  - eslint-config-sheriff@17.1.0

## 1.0.3

### Patch Changes

- Updated dependencies [d31e5b3]
  - eslint-config-sheriff@17.0.0

## 1.0.2

### Patch Changes

- Updated dependencies [04bca0a]
  - eslint-config-sheriff@16.2.0

## 1.0.1

### Patch Changes

- Updated dependencies [b9c995b]
  - eslint-config-sheriff@16.1.0

## 1.0.0

### Major Changes

- d70cb51: feat(webservices): added sheriff webservices

### Minor Changes

- 4adedb8: feat(webservices): restricted cors access
- db87640: feat(website): rules filters are now configurable
- 6e7d8a8: fix(webservices): added fix for render build

### Patch Changes

- 7b02ad6: chore(webservices): node to lts
- fbbe32b: chore: updated lockfile
- 9d6a292: chore(webservices): added engines field
- b83f507: feat(webservices): added serve command
- Updated dependencies [9bf7bb6]
- Updated dependencies [4adedb8]
  - eslint-config-sheriff@16.0.0
