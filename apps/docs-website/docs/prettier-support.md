---
sidebar_position: 10
---

# 💅 Prettier support

Sheriff tries to incorporate [Prettier](https://prettier.io/) out-of-the-box.

## Setup

The `npm init @sherifforg/config` command will spin up for you a default `.prettierrc.json` configuration.
You _can_ change it if you like, but [it is discouraged](https://prettier.io/docs/en/option-philosophy.html).
Act with caution.

If you do not use the `npm init @sherifforg/config` command, you need to create a Prettier config yourself,
and remember to create a [`.prettierignore` file](https://prettier.io/docs/en/ignore.html)!

If you already have a Prettier config in your project, you are good to go.
The `npm init @sherifforg/config` command will not create a new Prettier config,
nor will it attempt to change the existing one.

## Usage

By design, Sheriff **does not** incorporate:

- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier).
  Its use is discouraged by the Prettier team itself,
  [as it just slows down your editor](https://prettier.io/docs/en/integrating-with-linters.html#notes).
  It is better to just let ESLint and Prettier run side-by-side.
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier).
  Starting from ESLint v8.53.0,
  [ESLint deprecated formatting rules](https://eslint.org/blog/2023/10/deprecating-formatting-rules/),
  and shortly after `typescript-eslint` followed suit.
  This change made `eslint-config-prettier` completely irrelevant
  and now the only formatting rules left in Sheriff are `@stylistic/padding-line-between-statements` and `curly`,
  neither of which conflict with Prettier.

Instead, for your local editing experience,
we recommend installing a [Prettier editor extension](https://prettier.io/docs/en/editors.html).<br />
If you want to enforce Prettier with a pre-commit hook,
see the [official Prettier docs](https://prettier.io/docs/en/precommit).<br />
To enforce Prettier in CI, see the [Prettier CLI docs](https://prettier.io/docs/en/cli.html).
