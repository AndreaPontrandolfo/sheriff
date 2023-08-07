---
sidebar_position: 11
---

# Monorepo support

While Sheriff can be made to work at the _root_ of monorepos, it is highly advisible to not do so.<br />
It works fine in singular packages inside monorepos.

## Monorepo support in VSCode

To make use of the [Eslint VScode extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) in monorepos, use the [eslint.workingDirectories](https://github.com/microsoft/vscode-eslint#mono-repository-setup) setting.
