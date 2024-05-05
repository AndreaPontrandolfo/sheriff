# docs-website

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
