---
sidebar_position: 11
---

# 🚀 VSCode support

To make the [VSCode ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) working correctly we'll need to enable a few settings. It's advisable to enable them at the workspace level, meaning in the root of the project at `.vscode/settings.json`

The ESLint `FlatConfig` support is currently not enabled by default. It needs to be enabled manually with a flag, like so:

```JSONC title=".vscode/settings.json"
{
  "eslint.experimental.useFlatConfig": true
}
```

## Enable linting on specified file extensions

```JSONC title=".vscode/settings.json"
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

## Astro support

For [Astro](https://astro.build/) projects, add the astro extension too:

```JSONC title=".vscode/settings.json"
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
    // highlight-next-line
    "astro"
  ]
}
```

## Avoid "source.organizeImports"

Sheriff already handle imports sorting, so you have to disable thew VSCode automatic import sorting feature to avoid conflicts:

```JSONC title=".vscode/settings.json"
"editor.codeActionsOnSave": {
    "source.organizeImports": false
}
```
