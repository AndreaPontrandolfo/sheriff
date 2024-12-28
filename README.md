<div align="center">
  <a href="https://www.eslint-config-sheriff.dev">
    <img alt="Sheriff logo" src="https://github.com/AndreaPontrandolfo/sheriff/blob/master/apps/docs-website/static/img/sheriff-logo.svg" width="240" />
    <h1 align="center">Sheriff</h1>
  </a>
  <p align="center">
    ✨ A comprehensive and opinionated TypeScript-first ESLint configuration ✨
  </p>
<div>

[![Contributor Covenant][conduct-badge]](CODE_OF_CONDUCT.md)
[![npm downloads][downloads-badge]][config-pkg]

  </div>
</div>

## 🥳 Overview

This repository is a monorepo that hosts the source code of the following projects:

| Link                                      | Source                              | Description                                                           | Version                            |
| ----------------------------------------- | ----------------------------------- | --------------------------------------------------------------------- | ---------------------------------- |
| [Sheriff docs website][docs]              | [docs-website][docs-dir]            | Sheriff documentation website                                         |                                    |
| [`eslint-config-sheriff`][config-pkg]     | [eslint-config-sheriff][config-dir] | A comprehensive and opinionated TypeScript-first ESLint configuration | [![npm][config-badge]][config-pkg] |
| [`@sherifforg/create-config`][create-pkg] | [sheriff-create-config][create-dir] | Package used to create Sheriff-based ESLint configs                   | [![npm][create-badge]][create-pkg] |
| [`@sherifforg/cli`][cli-pkg]              | [sheriff-cli][cli-dir]              | The Sheriff CLI. Used to manage Sheriff-based ESLint configs          | [![npm][cli-badge]][cli-pkg]       |

## 🚀 Getting Started

Visit the [official docs][docs] to get started with Sheriff.

## 📝 Updates

You can follow the latest updates on the project in the [official blog](https://www.eslint-config-sheriff.dev/blog).

## 💌 Acknowledgments

For some of this configuration, [eslint-config-red](https://github.com/GrosSacASac/JavaScript-Set-Up/blob/master/js/red-javascript-style-guide/index.js) was partially used as a base.<br />
Additionally, inspiration was drawn from [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) for some of the rules in `no-restricted-syntax`.<br />
I don’t take any attribution for the rules in the various ESLint plugins used here (except for the few that I personally created). Please consider starring the respective projects for the awesome work their authors made. Sheriff wouldn’t be possible without their efforts.<br />
The full list of the plugins used is [here](https://www.eslint-config-sheriff.dev/docs/eslint-plugins).

[docs]: https://www.eslint-config-sheriff.dev
[docs-dir]: https://github.com/AndreaPontrandolfo/sheriff/tree/master/apps/docs-website
[config-pkg]: https://www.npmjs.com/package/eslint-config-sheriff
[config-dir]: https://github.com/AndreaPontrandolfo/sheriff/tree/master/packages/eslint-config-sheriff
[config-badge]: https://img.shields.io/npm/v/eslint-config-sheriff.svg?color=1A786D
[create-pkg]: https://www.npmjs.com/package/@sherifforg/create-config
[create-dir]: https://github.com/AndreaPontrandolfo/sheriff/tree/master/packages/sheriff-create-config
[create-badge]: https://img.shields.io/npm/v/@sherifforg/create-config.svg?color=1A786D
[cli-pkg]: https://www.npmjs.com/package/@sherifforg/cli
[cli-dir]: https://github.com/AndreaPontrandolfo/sheriff/tree/master/packages/sheriff-cli
[cli-badge]: https://img.shields.io/npm/v/@sherifforg/cli.svg?color=1A786D
[downloads-badge]: https://img.shields.io/npm/dm/eslint-config-sheriff.svg?label=npm%20downloads&color=1A786D
[conduct-badge]: https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?color=1A786D
