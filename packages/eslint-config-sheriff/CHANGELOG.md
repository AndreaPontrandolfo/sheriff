# eslint-config-sheriff

## 19.0.0

### Major Changes

- aa57685: feat!: make astro support optional
- 1859c47: fix!: typo in config

### Minor Changes

- 0fd4217: feat: allow zero-config sheriff

## 18.7.0

### Minor Changes

- 9883842: fix(deps): moved @sherifforg/constants to devDeps. Fixes #150

## 18.6.0

### Minor Changes

- 6e6cbee: feat(rules): added unicorn/prefer-node-protocol rule
- 409ee4a: feat(rules): removed no-complicated-conditional-rendering
  feat(plugins): added eslint-plugin-simple-import-sort plugin
  feat(rules): replaced a unicorn rule with a import rule
  docs(website): updated docs regarding vscode support

### Patch Changes

- Updated dependencies [409ee4a]
- Updated dependencies [3252189]
  - @sherifforg/constants@0.0.1

## 18.5.0

### Minor Changes

- 7879040: chore(config): force changesets release

## 18.4.0

### Minor Changes

- 7a9a7ef: fix(cli): the cli will install eslint@8.57.0

## 18.3.0

### Minor Changes

- b4cc03a: chore(deps): updated unicorn, vitest and internal deps
  feat(rules): added 3 new unicorn rules
- 12d4471: docs(website): updated comparison section in the docs
- 74520b0: feat(plugins): added 3 new rules from @eslint-react/eslint-plugin

### Patch Changes

- 0afd2c8: feat(cli): completely revamped CLI experience

## 18.2.0

### Minor Changes

- bf2c839: feat(webservices): swapped expressjs with honojs
  feat(docs-website): page rules now also include undeclared rules
- b8c1ff4: chore(config): updated tseslint
  chore(webservices): updated tseslint
- 3f56ab8: feat(rules): added eslint-plugin-arrow-return-style

### Patch Changes

- 084818e: chore(deps): updated eslint-plugin-astro to latest
- 043c53d: fix(rules): fixed naming-convention rule for boolean cases

## 18.1.0

### Minor Changes

- 977b2b4: feat(types): Update @sheriff/types to @sherifforg/types
- aba4e21: ci(monorepo): added merge-checks

## 18.0.0

### Major Changes

- 991f1fa: feat(config): Added eslint-config-flat-gitignore functionality and updated docs

  BREAKING CHANGE: the config key pathsOveriddes.ignores was removed. It has been replaced with "ignores".

- faf08ec: feat(deps): Update eslint-config-sheriff version

### Minor Changes

- 93c94cf: feat(rules): introduces @stylistic/eslint-plugin
- 69b0dba: feat(config): added support for reporting unused directives

## 17.1.0

### Minor Changes

- 00d83c4: build(website): updated ts-eslint to latest

### Patch Changes

- 4360bfb: docs(readme): added performance tips docs
- df2fa02: docs(website): added totalRulesAmount metrics to rules page

## 17.0.0

### Major Changes

- d31e5b3: fix(config): fixed an import of eslint-plugin-react

## 16.2.0

### Minor Changes

- 04bca0a: fix(plugins): removed extra react plugin definition
  docs(website): updated some website sections

## 16.1.0

### Minor Changes

- b9c995b: feat(rules): removed react/jsx-no-leaked-render

## 16.0.0

### Major Changes

- 9bf7bb6: feat(plugins): integrated all rules of eslint-plugin-fsecond

### Patch Changes

- 4adedb8: feat(webservices): restricted cors access

## 15.3.0

### Minor Changes

- ea724f4: fix(astro): added more fine-grained control to files influence

## 15.2.0

### Minor Changes

- b5b5abf: fix(rules): fixed broken astro support

## 15.1.0

### Minor Changes

- 91b3b38: feat(rules): added astro support. Closes #45
  fix(rules): removed eslint-plugin-etc rules
  BREAKING CHANGE: removed eslint-plugin-etc

## 15.0.0

### Major Changes

- be8dd36: feat(config): added `pathsOverrides` parameter.

  **BREAKING CHANGE**: The `customTSConfigPath` parameter is now deprecated. You can replace it with `pathsOveriddes.tsconfigLocation`.

- fcc5a81: converted eslint-config-sheriff to typescript
- 0f5443f: feat(rules): added support for @typescript-eslint@6

### Patch Changes

- ebc0952: (docs) added readmes

## 14.4.0

### Minor Changes

- 12d630f: transition to monorepo

### Patch Changes

- bfea189: updated some links
