---
sidebar_position: 11
---

# 💅 Prettier support

Sheriff is designed to coexist smoothly with [Prettier](https://prettier.io/), allowing both tools to complement each other effectively.
If you want Prettier support in your project, the next sections will guide you through the setup and usage of it.

## Setup

The `npm init @sherifforg/config` command will attempt to:

- spin up for a default `.prettierrc.json` configuration. You _can_ modify it if you like, but [it is discouraged](https://prettier.io/docs/en/option-philosophy.html). Act with caution. If you already have a Prettier config in your project, the command will not overwrite it, nor will it attempt to modify it.
- install the `prettier` dependency in your project.
- create a [`.prettierignore` file](https://prettier.io/docs/en/ignore.html) in your project.

If you don’t use the `npm init @sherifforg/config` command, you will have to do above setup steps manually.

## Usage

By design, Sheriff **doesn't** incorporate:

- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier). Its use is discouraged by the Prettier team itself, [as it just slows down your editor](https://prettier.io/docs/en/integrating-with-linters.html#notes). It's better to just let ESLint and Prettier run side-by-side.
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier). Starting from ESLint v8.53.0, [ESLint deprecated formatting rules](https://eslint.org/blog/2023/10/deprecating-formatting-rules/), and shortly after typescript-eslint followed suit. This change made `eslint-config-prettier` completely irrelevant and now the only formatting rules left in Sheriff are `@stylistic/padding-line-between-statements` and `curly`, neither of which conflict with Prettier.

Instead, for your local editing experience, it's recommended to install the [Prettier editor extension](https://prettier.io/docs/en/editors.html).<br />
If you want to enforce Prettier at pre-commit stage, see the [official Prettier docs](https://prettier.io/docs/en/precommit).<br />
To enforce Prettier in CI, see the [Prettier CLI docs](https://prettier.io/docs/en/cli.html).

## Other Formatting options

As Sheriff doesn’t enforce any formatting rules (except for `@stylistic/padding-line-between-statements` and `curly`), you can use any formatting tool you want to go alongside Sheriff. You are not limited to Prettier.

Alternatively, you could use [Biome](https://github.com/biomejs/biome) or [dprint](https://github.com/dprint/dprint), but the Sheriff CLI will not provide direct support for them. You will have to integrate them yourself.
