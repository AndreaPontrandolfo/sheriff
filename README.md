<p align="center">
  <a href="https://www.eslint-config-sheriff.dev">
      <img src="https://github.com/AndreaPontrandolfo/sheriff/blob/master/apps/docs-website/static/img/sheriff-logo.svg" width="240">
    <h1 align="center">Sheriff</h1>
  </a>
  <p align="center">
    ✨ A comprehensive and opinionated Typescript-first ESLint configuration ✨
  </p>
</p>

## 🥳 Overview

This repository is a monorepo that hosts the sourcecode of the following projects:

| Link                                                                           | Source                                                                                                            | Description                                                           | Version                                                                                                                                                  |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Sheriff docs website](www.eslint-config-sheriff.dev)                          | [docs-website](https://github.com/AndreaPontrandolfo/sheriff/tree/master/apps/docs-website)                       | Sheriff documentation website                                         | [![GitHub release](https://img.shields.io/github/release/AndreaPontrandolfo/sheriff.svg)](https://github.com/AndreaPontrandolfo/sheriff/releases/latest) |
| [`eslint-config-sheriff`](https://www.npmjs.com/package/eslint-config-sheriff) | [eslint-config-sheriff](https://github.com/AndreaPontrandolfo/sheriff/tree/master/packages/eslint-config-sheriff) | A comprehensive and opinionated Typescript-first ESLint configuration | [![npm](https://img.shields.io/npm/v/eslint-config-sheriff.svg)](https://www.npmjs.com/package/eslint-config-sheriff)                                    |
| [`create-sheriff-config`](https://www.npmjs.com/package/create-sheriff-config) | [create-sheriff-config](https://github.com/AndreaPontrandolfo/sheriff/tree/master/packages/create-sheriff-config) | CLI/starter to bootstrap a Sheriff config                             | [![npm](https://img.shields.io/npm/v/create-sheriff-config.svg)](https://www.npmjs.com/package/create-sheriff-config)                                    |
| [`@sherifforg/types`](https://www.npmjs.com/package/@sherifforg/types)         | [sheriff-types](https://github.com/AndreaPontrandolfo/sheriff/tree/master/packages/sheriff-types)                 | Sheriff types package                                                 | [![npm](https://img.shields.io/npm/v/@sherifforg/types.svg)](https://www.npmjs.com/package/@sherifforg/types)                                            |

## 🚀 Getting Started

Visit the [official docs](https://www.eslint-config-sheriff.dev) to get started with Sheriff.

## 📝 Updates

You can follow the latest updates on the project in the [official blog](https://www.eslint-config-sheriff.dev/blog).

## 🧡 Contributing

### Suggestions

I consider Sheriff a community effort, and I welcome suggestions and contributions of any kind.
Feel free to propose suggestions about new rules to implement, or tweaks to existing rules.<br>
Please use the discussions tab or the issues tab for new rules proposals.

### Development

1. Clone the repo
1. Install the dependencies with pnpm
1. Do the changes

## 🌤 Changelog

[Releases](https://github.com/AndreaPontrandolfo/sheriff/releases).

## 💌 Acknowledgments

For some of this configuration, [eslint-config-red](https://github.com/GrosSacASac/JavaScript-Set-Up/blob/master/js/red-javascript-style-guide/index.js) was partially used as a base.<br>
Additionally, inspiration was drawn from [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) for some of the rules in `no-restricted-syntax`.<br>
I don't take any attribution for the rules in the various eslint-plugins used here (except for the few that I personally created). Please consider starring the respective projects for the awesome work their authors made. Sheriff wouldn't be possible without their efforts.<br>
The full list of the plugins used is [here](https://www.eslint-config-sheriff.dev/docs/eslint-plugins).
