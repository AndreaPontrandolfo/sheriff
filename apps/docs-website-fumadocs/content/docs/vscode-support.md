---
title: VSCode Support
description: Configure VSCode settings for optimal Sheriff integration
icon: VscVscode
---

To make the [VSCode ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) work better with Sheriff it's recommended to checkout a few settings. It's advisable to enable them at the workspace level, meaning in the root of the project in `.vscode/settings.json`

## Enable linting on specific file extensions

```jsonc title=".vscode/settings.json"
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
  ],
}
```

### Astro support

For [Astro](https://astro.build/) projects, add the astro extension too:

```jsonc title=".vscode/settings.json"
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "astro", // [!code ++]
  ],
}
```

## `eslint.config.ts` support

Follow these instructions if you are using the `eslint.config.ts` configuration file.

### With ESLint >= 9.18.0

No further action is required. You are good to go!

### With ESLint < 9.18.0

Add this to your `.vscode/settings.json`:

```jsonc title=".vscode/settings.json"
"eslint.options": {
  "flags": ["unstable_ts_config"]
}
```

## Avoid "source.organizeImports"

Sheriff already handles imports sorting, so if you happen to have enabled the VSCode automatic import sorting feature, you should disable it to avoid conflicts:

```jsonc title=".vscode/settings.json"
"editor.codeActionsOnSave": {
    "source.organizeImports": "never"
}
```

If you wish, you can automatically fix some ESLint violations on save, including sorting imports:

```jsonc title=".vscode/settings.json"
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
}
```
