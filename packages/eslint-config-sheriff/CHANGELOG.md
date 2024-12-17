# eslint-config-sheriff

## 25.3.1

### Patch Changes

- e87996d: feat: updated "engines" field
  Fixes [#318](https://github.com/AndreaPontrandolfo/sheriff/issues/318)

## 25.3.0

### Minor Changes

- bdb3488: feat(rules): removed props: true from no-param-reassign
  chore(config): added @internal to areAllRulesForced
  chore(deps): updates ts-eslint to latest

## 25.2.0

### Minor Changes

- 091ba74: feat(config): added paths configuration for Playwright rules
  feat(rules): reconfigured @typescript-eslint/no-empty-object-type rule
  docs(website): added astro to rules page
  chore(webservices): added eslint-plugin-regexp to webservice
- fcc56c9: feature(rules): changed some rules for nextjs
  Fixes #251

### Patch Changes

- e47654f: feat(plugins): updated deps

## 25.1.0

### Minor Changes

- ce376df: feat(rules): updated eslint-plugin-import and allowed some rules in `*.config.*` files
  Fixes #281
- 527bedd: feature(rules): allow side-effects imports in no-restricted-imports

### Patch Changes

- 09f4162: feature(deps): updated eslint-plugin-react-hooks to V5

## 25.0.0

### Major Changes

- 44643a6: feat: introduced dts-bundle-generator to bundle @sherifforg/types

## 24.0.0

### Major Changes

- ed243c3: feat: force version update

## 23.0.0

### Major Changes

- dd35dfb: feat(types): now Sheriff types are exposed through the eslint-config-sheriff package instead of @sherifforg/types.
  Closes #233

### Patch Changes

- a48a0ba: feat: force version bump
- e598bd7: chore(internals): implemented turbo watch on dev command
  Fixes #227

## 22.0.0

### Major Changes

- 28b9143: feat(plugins): added eslint-plugin-remeda support

### Minor Changes

- e140d5c: feat(rules): removed react/jsx-props-no-spreading
  feat(rules): added no-useless-computed-key
  feat(rules): added unicorn/no-unused-properties
  feat(rules): restricted the confusingBrowserGlobals
  feat(rule): added react/no-this-in-sfc
  chore(deps): updated some deps
  Closes #247

### Patch Changes

- 3cae3df: chore(deps): updated some deps

## 21.2.0

### Minor Changes

- f9f7cd2: fix(config): implemented @eslint-react/eslint-plugin manually
  Fixes #244
- 70f740b: feat(plugins): added `eslint-plugin-regexp`
  feat(rules): removed unicorn/better-regex
  Closes #195

### Patch Changes

- 1e98283: feat(cli): added prompt graceful cancellation
  Fix #241

## 21.1.0

### Minor Changes

- 701edf5: feat!: esm-only bundling (follow up to #225)
  fix: don't bundle node_modules
  fix: webservices types
  feat!: enable verbatimModuleSyntax

## 21.0.0

### Major Changes

- 8210524: fix(config): fixed import/no-default-export rule
  Closes #218

### Minor Changes

- 9eafd0f: feat(config): added no-useless-assignment rule
  Fixes #186

### Patch Changes

- 350edfb: fix(cli): remove CJS support for config file and fix crash. Fixes #222
  feat(cli): added version and help commands with aliases to cli
  feat(cli): added welcome message

## 20.0.0

### Major Changes

- f685bae: feat(config): exposed more variables from main package
  feat(config): reworked overrides
  BREAKING CHANGE: removed the noRestrictedSyntaxOverride config option

  Closes #188

- b4685c3: feat(config): added ESLint v9 support and removed ESLint version 8.57.0 pins
  Fixes #179
  Fixes #185

### Minor Changes

- a124f56: feat(config): removed eslint-plugin-fp
- dd61624: feat(deps): Update eslint-plugin-jsdoc to latest. Closes #182
- 4960381: feat(config): removed eslint-config-prettier
- 734355c: feat(deps): updated eslint-plugin-unicorn to latest

### Patch Changes

- 1d42d3b: feat(deps): update eslint-plugin-playwright to latest
  Fixes #184
- c92bee5: feat(config): added getIndexedBaseNoRestrictedSyntaxRules
- 66b6e50: feat(deps): update eslint-plugin-jest to latest
  Fixes #183
- fdbb0db: chore(deps): updated some deps
- 028c5d7: chore(deps): bump
- 84ab8bb: feat(deps): update eslint-plugin-react to latest
  Fixes #176
- b755626: feat(deps): update eslint-plugin-sonarjs to latest
- fc4e0e5: feat(deps): update @typescript-eslint/eslint-plugin to latest
  Fixes #177
- 76dcc6a: feat(deps): added @types/eslint-plugin-jsx-a11y

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
