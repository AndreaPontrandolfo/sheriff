# docs-website

## 2.5.1

### Patch Changes

- b6649e0: feat(cli): added new package @sherifforg/create-config
- Updated dependencies [701edf5]
  - @sherifforg/constants@0.1.0

## 2.5.0

### Minor Changes

- bd82253: feat(cli): renamed create-sheriff-config to @sherifforg/cli
  Fixes #226

### Patch Changes

- @sherifforg/constants@0.0.4

## 2.4.1

### Patch Changes

- 350edfb: fix(cli): remove CJS support for config file and fix crash. Fixes #222
  feat(cli): added version and help commands with aliases to cli
  feat(cli): added welcome message
- 8210524: fix(config): fixed import/no-default-export rule
  Closes #218
- Updated dependencies [350edfb]
  - @sherifforg/constants@0.0.4

## 2.4.0

### Minor Changes

- f685bae: feat(config): exposed more variables from main package
  feat(config): reworked overrides
  BREAKING CHANGE: removed the noRestrictedSyntaxOverride config option

  Closes #188

### Patch Changes

- a124f56: feat(config): removed eslint-plugin-fp
- c92bee5: feat(config): added getIndexedBaseNoRestrictedSyntaxRules
- 4960381: feat(config): removed eslint-config-prettier
- 028c5d7: chore(deps): bump
- b4685c3: feat(config): added ESLint v9 support and removed ESLint version 8.57.0 pins
  Fixes #179
  Fixes #185
- Updated dependencies [a124f56]
- Updated dependencies [c92bee5]
- Updated dependencies [fdbb0db]
- Updated dependencies [028c5d7]
- Updated dependencies [f685bae]
- Updated dependencies [b4685c3]
  - @sherifforg/constants@0.0.3

## 2.3.1

### Patch Changes

- 37bb057: docs(website): updated philosophy
  ci(qa): fixes turbo caching in gh actions
  ci(qa): add more context to qa action
- 1859c47: fix!: typo in config
- Updated dependencies [aa57685]
  - @sherifforg/constants@0.0.2

## 2.3.0

### Minor Changes

- 6e6cbee: feat(rules): added unicorn/prefer-node-protocol rule

### Patch Changes

- 409ee4a: feat(rules): removed no-complicated-conditional-rendering
  feat(plugins): added eslint-plugin-simple-import-sort plugin
  feat(rules): replaced a unicorn rule with a import rule
  docs(website): updated docs regarding vscode support
- Updated dependencies [409ee4a]
- Updated dependencies [3252189]
  - @sherifforg/constants@0.0.1

## 2.2.0

### Minor Changes

- 7a9a7ef: fix(cli): the cli will install eslint@8.57.0

## 2.1.0

### Minor Changes

- 12d4471: docs(website): updated comparison section in the docs
- 74520b0: feat(plugins): added 3 new rules from @eslint-react/eslint-plugin

### Patch Changes

- 0afd2c8: feat(cli): completely revamped CLI experience

## 2.0.0

### Major Changes

- bf2c839: feat(webservices): swapped expressjs with honojs
  feat(docs-website): page rules now also include undeclared rules

### Minor Changes

- 2306ffa: chore(deps): updated node and pnpm versions
- 3f56ab8: feat(rules): added eslint-plugin-arrow-return-style

## 1.8.0

### Minor Changes

- 977b2b4: feat(types): Update @sheriff/types to @sherifforg/types
- aba4e21: ci(monorepo): added merge-checks

## 1.7.0

### Minor Changes

- 3870f73: feat(config): added experimental support for eslint-ts-patch
  feat(CLI): massive improvements to create-sheriff-config
  feat(playground): added workspace cli-playground
  feat(types): @sherifforg/types is now a npm package
- 69b0dba: feat(config): added support for reporting unused directives
- 991f1fa: feat(config): Added eslint-config-flat-gitignore functionality and updated docs

  BREAKING CHANGE: the config key pathsOveriddes.ignores was removed. It has been replaced with "ignores".

## 1.6.0

### Minor Changes

- 00d83c4: build(website): updated ts-eslint to latest
- df2fa02: docs(website): added totalRulesAmount metrics to rules page

### Patch Changes

- 4360bfb: docs(readme): added performance tips docs

## 1.5.0

### Minor Changes

- e89713c: docs(blog): added second blog entry

## 1.4.0

### Minor Changes

- 04bca0a: fix(plugins): removed extra react plugin definition
  docs(website): updated some website sections

## 1.3.0

### Minor Changes

- db87640: feat(website): rules filters are now configurable

### Patch Changes

- 9bf7bb6: feat(plugins): integrated all rules of eslint-plugin-fsecond
- 4adedb8: feat(webservices): restricted cors access

## 1.2.1

### Patch Changes

- Updated dependencies [ea724f4]
  - @sheriff/utils@1.1.0

## 1.2.0

### Minor Changes

- b5b5abf: fix(rules): fixed broken astro support

### Patch Changes

- @sheriff/utils@1.0.1

## 1.1.0

### Minor Changes

- 91b3b38: feat(rules): added astro support. Closes #45
  fix(rules): removed eslint-plugin-etc rules
  BREAKING CHANGE: removed eslint-plugin-etc

### Patch Changes

- Updated dependencies [91b3b38]
  - @sheriff/utils@1.0.1

## 1.0.0

### Major Changes

- fcc5a81: converted eslint-config-sheriff to typescript
- 8fecf9b: feat(docs-website): added algolia searchbar

### Patch Changes

- be8dd36: feat(config): added `pathsOverrides` parameter.

  **BREAKING CHANGE**: The `customTSConfigPath` parameter is now deprecated. You can replace it with `pathsOveriddes.tsconfigLocation`.

- 1b6add1: feat(website): updated social card
- 0f5443f: feat(rules): added support for @typescript-eslint@6
- 1ef0775: docs(blog): updated blogpost
- fc1cd8d: fix: fixed a few spelling mistakes
- 171d08c: docs: some copy adjustments
- Updated dependencies [fcc5a81]
  - @sheriff/utils@1.0.0

## 0.1.0

### Minor Changes

- 12d630f: transition to monorepo

### Patch Changes

- bfea189: updated some links
- Updated dependencies [12d630f]
  - @sheriff/utils@0.1.0
