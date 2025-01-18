# @sherifforg/cli

## 8.1.0

### Minor Changes

- 823696e: feat(config): replace eslint-define-config with tseslint.config().
  Fixes #343

## 8.0.0

### Major Changes

- 3e6fc65: feat(cli): implemented @sherifforg/cli
  Closes [#332](https://github.com/AndreaPontrandolfo/sheriff/issues/332)

## 7.2.0

### Minor Changes

- 44643a6: feat: introduced dts-bundle-generator to bundle @sherifforg/types

## 7.1.2

### Patch Changes

- dd35dfb: feat(types): now Sheriff types are exposed through the eslint-config-sheriff package instead of @sherifforg/types.
  Closes #233
- a48a0ba: feat: force version bump

## 7.1.1

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

## 7.1.0

### Minor Changes

- 701edf5: feat!: esm-only bundling (follow up to #225)
  fix: don't bundle node_modules
  fix: webservices types
  feat!: enable verbatimModuleSyntax

### Patch Changes

- b6649e0: feat(cli): added new package @sherifforg/create-config

## 7.0.0

### Major Changes

- bd82253: feat(cli): renamed create-sheriff-config to @sherifforg/cli
  Fixes #226

## 6.0.0

### Major Changes

- 350edfb: fix(cli): remove CJS support for config file and fix crash. Fixes #222
  feat(cli): added version and help commands with aliases to cli
  feat(cli): added welcome message

### Patch Changes

- c8f8f09: fix bug with ts-patch installation

## 5.2.2

### Patch Changes

- fdbb0db: chore(deps): updated some deps
- 028c5d7: chore(deps): bump
- b4685c3: feat(config): added ESLint v9 support and removed ESLint version 8.57.0 pins
  Fixes #179
  Fixes #185

## 5.2.1

### Patch Changes

- a8863d8: fix bug with auto install packages to ensure the correct version is installed

## 5.2.0

### Minor Changes

- 9883842: fix(deps): moved @sherifforg/constants to devDeps. Fixes #150

## 5.1.2

### Patch Changes

- 409ee4a: feat(rules): removed no-complicated-conditional-rendering
  feat(plugins): added eslint-plugin-simple-import-sort plugin
  feat(rules): replaced a unicorn rule with a import rule
  docs(website): updated docs regarding vscode support
- 3252189: fix(cli): locked version of `eslint-ts-patch`
- 9e86345: chore(cli): updated nypm and removed custom patch
- Updated dependencies [409ee4a]
- Updated dependencies [3252189]
  - @sherifforg/constants@0.0.1

## 5.1.1

### Patch Changes

- 5f90276: build(deps): added 8.57.0-0 to allowed peer deps

## 5.1.0

### Minor Changes

- 7a9a7ef: fix(cli): the cli will install eslint@8.57.0

## 5.0.0

### Major Changes

- 0afd2c8: feat(cli): completely revamped CLI experience

## 4.2.0

### Minor Changes

- 2306ffa: chore(deps): updated node and pnpm versions

### Patch Changes

- 3f56ab8: feat(rules): added eslint-plugin-arrow-return-style

## 4.1.0

### Minor Changes

- 977b2b4: feat(types): Update @sheriff/types to @sherifforg/types
- aba4e21: ci(monorepo): added merge-checks

## 4.0.0

### Major Changes

- 3870f73: feat(config): added experimental support for eslint-ts-patch
  feat(CLI): massive improvements to create-sheriff-config
  feat(playground): added workspace cli-playground
  feat(types): @sherifforg/types is now a npm package

## 3.0.2

### Patch Changes

- d70cb51: feat(webservices): added sheriff webservices

## 3.0.1

### Patch Changes

- 91b3b38: feat(rules): added astro support. Closes #45
  fix(rules): removed eslint-plugin-etc rules
  BREAKING CHANGE: removed eslint-plugin-etc

## 3.0.0

### Major Changes

- fcc5a81: converted eslint-config-sheriff to typescript

### Patch Changes

- ebc0952: (docs) added readmes

## 2.10.0

### Minor Changes

- 12d630f: transition to monorepo

### Patch Changes

- bfea189: updated some links
