---
sidebar_position: 11
---

# 🌎 Monorepo support

While Sheriff can technically be used at the _root_ of monorepos, it's not recommended.<br />
It works best when applied to individual packages _within_ a monorepo.

## Examples

```sh title=✅
├── apps
│   ├── website
// highlight-next-line
│   │   ├── eslint.config.js
│   ├── docs
// highlight-next-line
│   │   ├── eslint.config.js
├── packages
│   ├── ui
// highlight-next-line
│   │   ├── eslint.config.js
│   ├── utils
// highlight-next-line
│   │   ├── eslint.config.js
│   ├── types
// highlight-next-line
│   │   ├── eslint.config.js
├── node_modules
├── README
├── package.json
├── pnpm-lock.yaml
└── .gitignore
```

```sh title=❌
├── apps
│   ├── website
│   ├── docs
├── packages
│   ├── ui
│   ├── utils
│   ├── types
├── node_modules
// highlight-next-line
├── eslint.config.js
├── README
├── package.json
├── pnpm-lock.yaml
└── .gitignore
```

## Monorepo support in VSCode

To make use of the [Eslint VScode extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) in monorepos, use the [eslint.workingDirectories](https://github.com/microsoft/vscode-eslint#mono-repository-setup) setting.
