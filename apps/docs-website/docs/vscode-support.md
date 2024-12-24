---
sidebar_position: 12
---

# 🚀 VSCode support

To make the [VSCode ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) work better with Sheriff we can enable a few settings. It's advisable to enable them at the workspace level, meaning in the root of the project at `.vscode/settings.json`

## Enable linting on specific file extensions

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

### Astro support

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

## `eslint.config.ts` support

If you are using the `eslint.config.ts` config, add this to your `.vscode/settings.json`:

```JSONC title=".vscode/settings.json"
"eslint.options": {
  "flags": ["unstable_ts_config"]
}
```

## Avoid "source.organizeImports"

Sheriff already handles imports sorting, so if you happen to have enabled the VSCode automatic import sorting feature, you should disable it to avoid conflicts:

```JSONC title=".vscode/settings.json"
"editor.codeActionsOnSave": {
    "source.organizeImports": "never"
}
```

If you wish, you can automatically fix some ESLint violations on save, including sorting imports:

```JSONC title=".vscode/settings.json"
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
}
```
