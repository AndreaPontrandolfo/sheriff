# eslint-config-sheriff

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
