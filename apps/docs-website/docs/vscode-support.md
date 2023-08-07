---
sidebar_position: 10
---

# VSCode support

The Eslint `FlatConfig` support is currently not enabled by default by the [VSCode Eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). It needs to be enabled manually with a flag.
It's advisable to enable it at the workspace level, meaning in the project `.vscode/settings.json`, like so:

```JSONC
// settings.json

{
  "eslint.experimental.useFlatConfig": true
}
```
