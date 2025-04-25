---
sidebar_position: 1
description: 'How to use the Sheriff CLI.'
---

# Get started

## Intro

The Sheriff CLI is composed of 2 packages:

- `@sherifforg/create-config`: **generates** the boilerplate to setup Sheriff in your project
- `@sherifforg/cli`: **self-lint** the Sheriff configuration

The `@sherifforg/cli` is invoked in the CLI with the `sheriff` command.

It is advised to integrate the `@sherifforg/cli` in your **CI pipelines** to ensure that the Sheriff configuration is always correct and up-to-date, but you can also integrate it into pre-commit hooks if that's your preference.

## How to run it

To get started, install it in your project:

```bash npm2yarn
npm i -D @sherifforg/cli
```

Add the command to your `package.json` scripts:

```JSON title="package.json"
{
  "scripts": {
    "sheriff": "sheriff"
  }
}
```

And then run it:

```bash npm2yarn
npm run sheriff
```

## How it works

The `sheriff` command will scan your project dependencies and your Sheriff configuration object. If Sheriff finds some dependencies that don't have the corresponding Sheriff options enabled, it will throw an error.

Example:

```JSON title="package.json"
{
  "name": "my-project",
  "dependencies": {
    "react": "^18.3.1",
  }
}
```

```js title="eslint.config.mjs"
import { sheriff, tseslint } from 'eslint-config-sheriff';

const sheriffOptions = {
  react: false, // ❌ this will throw an error
};

export default tseslint.config(sheriff(sheriffOptions));
```

```js title="eslint.config.mjs"
import { sheriff, tseslint } from 'eslint-config-sheriff';

const sheriffOptions = {
  react: true, // ✅ this will pass
};

export default tseslint.config(sheriff(sheriffOptions));
```

:::warning

Sheriff will scan the config file trying to find a variable named **exactly** `sheriffOptions`. If your configuration object variable is called in any other way, nothing will work. Make sure the variable is named `sheriffOptions`.

:::

## Options

The `@sherifforg/cli` is very flexible and offers a variety of options to customize it's behavior. Look at the [API reference](./cli-usage/commands-reference#sherifforgcli) for detailed info on the available options.

You can:

- skip the check for a specific dependency. This is useful in scenarios where the mismatch is intended, meaning that you don't want Sheriff linting support for a specific dependency even if Sheriff support is available
- let the process finish without throwing erros even if problems with the dependencies are found. In this case the CLI will just signal problems as warnings
