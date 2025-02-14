---
sidebar_position: 15
---

# 🤖 Usage in CI

## Intro

The Sheriff CLI is composed of 2 packages:

- `@sherifforg/create-config` **generates** the boilerplate to setup Sheriff in your project
- `@sherifforg/cli` **lints** the Sheriff configuration

The `@sherifforg/cli` is invoked via the `sheriff` command.

It is advised to integrate `@sherifforg/cli` in your CI pipelines to ensure that the Sheriff configuration is always correct and up-to-date, but you can also integrate it into pre-commit hooks if that’s your preference.

## Usage

To get started, install it in your project:

```bash npm2yarn
npm i -D @sherifforg/cli
```

And then run it:

```bash npm2yarn
npx sheriff
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

Sheriff will scan the config file trying to find a variable named **exactly** `sheriffOptions`. If your configuration object variable is called anything else, the CLI will fail to flag any issues. Ensure the variable is named `sheriffOptions`.

:::

## Options

`@sherifforg/cli` is very flexible and offers a variety of options to customize it’s behavior. Look at the [API reference](./cli-reference#sherifforgcli) for the available options.

You can:

- skip the check for a specific dependency. This is useful in scenarios where a mismatch is intended, i.e. you don't want Sheriff linting support for a specific dependency, even if Sheriff support is available
- let the process finish without throwing errors even if problems with the dependencies are found. In this case, the CLI will convert all problems to warnings
