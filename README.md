<div align="center">
  <a href="https://www.eslint-config-sheriff.dev">
      <img src="https://github.com/AndreaPontrandolfo/sheriff/blob/master/apps/docs-website/static/img/sheriff-logo.svg" width="240">
    <h1 align="center">Sheriff</h1>
  </a>
  <p align="center">
    ✨ A comprehensive and opinionated TypeScript-first ESLint configuration ✨
  </p>
  <div>

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?color=1A786D)](CODE_OF_CONDUCT.md)
[![npm downloads](https://img.shields.io/npm/dm/eslint-config-sheriff.svg?label=npm%20downloads&color=1A786D)](https://www.npmjs.com/package/eslint-config-sheriff)

  </div>
</div>


## 🥳 Overview

This repository is a monorepo that hosts the sourcecode of the following projects:

| Link                                                                           | Source                                                                                                            | Description                                                           | Version                                                                                                                                                  |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Sheriff docs website](https://www.eslint-config-sheriff.dev)                          | [docs-website](https://github.com/AndreaPontrandolfo/sheriff/tree/master/apps/docs-website)                       | Sheriff documentation website                                         | |
| [`eslint-config-sheriff`](https://www.npmjs.com/package/eslint-config-sheriff) | [eslint-config-sheriff](https://github.com/AndreaPontrandolfo/sheriff/tree/master/packages/eslint-config-sheriff) | A comprehensive and opinionated TypeScript-first ESLint configuration | [![npm](https://img.shields.io/npm/v/eslint-config-sheriff.svg?color=1A786D)](https://www.npmjs.com/package/eslint-config-sheriff)                                    |
| [`@sherifforg/create-config`](https://www.npmjs.com/package/@sherifforg/create-config) | [sheriff-create-config](https://github.com/AndreaPontrandolfo/sheriff/tree/master/packages/sheriff-create-config) | Package used to create Sheriff-based ESLint configs                             | [![npm](https://img.shields.io/npm/v/@sherifforg/create-config.svg?color=1A786D)](https://www.npmjs.com/package/@sherifforg/create-config)                                    |
| [`@sherifforg/cli`](https://www.npmjs.com/package/@sherifforg/cli) | [sheriff-cli](https://github.com/AndreaPontrandolfo/sheriff/tree/master/packages/sheriff-cli) | The Sheriff CLI. Used to manage Sheriff-based ESLint configs                             | [![npm](https://img.shields.io/npm/v/@sherifforg/cli.svg?color=1A786D)](https://www.npmjs.com/package/@sherifforg/cli)                                    |

## 🚀 Quickstart

```bash
npm init @sherifforg/config
```

## 📋 Docs

Visit the [official docs](https://www.eslint-config-sheriff.dev/docs/introduction) to learn more.

## 📝 Blog

You can follow the latest updates on the project in the [official blog](https://www.eslint-config-sheriff.dev/blog).

## 💌 Acknowledgments

For some of this configuration, [eslint-config-red](https://github.com/GrosSacASac/JavaScript-Set-Up/blob/master/js/red-javascript-style-guide/index.js) was partially used as a base. Additionally, inspiration was drawn from [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) for some of the rules in `no-restricted-syntax`.

I don't take any attribution for the rules in the various eslint-plugins used here (except for the few that I personally created). 

Please consider starring the respective projects for the awesome work their authors made. Sheriff wouldn't be possible without their efforts.

[Full list of the plugins integrated in Sheriff](https://www.eslint-config-sheriff.dev/docs/eslint-plugins).
