# @sherifforg/types

## 3.1.1

### Patch Changes

- 0afd2c8: feat(cli): completely revamped CLI experience

## 3.1.0

### Minor Changes

- 2306ffa: chore(deps): updated node and pnpm versions

## 3.0.0

### Major Changes

- 977b2b4: feat(types): Update @sheriff/types to @sherifforg/types

### Minor Changes

- aba4e21: ci(monorepo): added merge-checks

## 2.0.0

### Major Changes

- 3870f73: feat(config): added experimental support for eslint-ts-patch
  feat(CLI): massive improvements to create-sheriff-config
  feat(playground): added workspace cli-playground
  feat(types): @sherifforg/types is now a npm package

### Minor Changes

- 991f1fa: feat(config): Added eslint-config-flat-gitignore functionality and updated docs

  BREAKING CHANGE: the config key pathsOveriddes.ignores was removed. It has been replaced with "ignores".

## 1.1.1

### Patch Changes

- df2fa02: docs(website): added totalRulesAmount metrics to rules page

## 1.1.0

### Minor Changes

- db87640: feat(website): rules filters are now configurable

### Patch Changes

- d70cb51: feat(webservices): added sheriff webservices

## 1.0.1

### Patch Changes

- 91b3b38: feat(rules): added astro support. Closes #45
  fix(rules): removed eslint-plugin-etc rules
  BREAKING CHANGE: removed eslint-plugin-etc

## 1.0.0

### Major Changes

- fcc5a81: converted eslint-config-sheriff to typescript

### Patch Changes

- be8dd36: feat(config): added `pathsOverrides` parameter.

  **BREAKING CHANGE**: The `customTSConfigPath` parameter is now deprecated. You can replace it with `pathsOveriddes.tsconfigLocation`.

- 0f5443f: feat(rules): added support for @typescript-eslint@6

## 0.1.0

### Minor Changes

- 12d630f: transition to monorepo
