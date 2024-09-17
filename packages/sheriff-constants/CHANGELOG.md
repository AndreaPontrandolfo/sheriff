# @sherifforg/constants

## 0.1.1

### Patch Changes

- 28b9143: feat(plugins): added eslint-plugin-remeda support

## 0.1.0

### Minor Changes

- 701edf5: feat!: esm-only bundling (follow up to #225)
  fix: don't bundle node_modules
  fix: webservices types
  feat!: enable verbatimModuleSyntax

## 0.0.4

### Patch Changes

- 350edfb: fix(cli): remove CJS support for config file and fix crash. Fixes #222
  feat(cli): added version and help commands with aliases to cli
  feat(cli): added welcome message

## 0.0.3

### Patch Changes

- a124f56: feat(config): removed eslint-plugin-fp
- c92bee5: feat(config): added getIndexedBaseNoRestrictedSyntaxRules
- fdbb0db: chore(deps): updated some deps
- 028c5d7: chore(deps): bump
- f685bae: feat(config): exposed more variables from main package
  feat(config): reworked overrides
  BREAKING CHANGE: removed the noRestrictedSyntaxOverride config option

  Closes #188

- b4685c3: feat(config): added ESLint v9 support and removed ESLint version 8.57.0 pins
  Fixes #179
  Fixes #185

## 0.0.2

### Patch Changes

- aa57685: feat!: make astro support optional

## 0.0.1

### Patch Changes

- 409ee4a: feat(rules): removed no-complicated-conditional-rendering
  feat(plugins): added eslint-plugin-simple-import-sort plugin
  feat(rules): replaced a unicorn rule with a import rule
  docs(website): updated docs regarding vscode support
- 3252189: fix(cli): locked version of `eslint-ts-patch`
