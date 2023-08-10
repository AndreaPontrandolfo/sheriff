---
sidebar_position: 11
---

# 🌎 Monorepo support

## General guidelines

While Sheriff can technically be used at the _root_ of monorepos, it's **not** recommended.<br />
It works best when applied to individual packages _within_ a monorepo.

### Examples

```sh title=✅
├── apps
│   ├── website
// highlight-next-line
│   │   └── eslint.config.js
│   ├── docs
// highlight-next-line
│   │   └── eslint.config.js
├── packages
│   ├── ui
// highlight-next-line
│   │   └── eslint.config.js
│   ├── utils
// highlight-next-line
│   │   └── eslint.config.js
│   ├── types
// highlight-next-line
│   │   └── eslint.config.js
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

## Usage in VSCode

To make use of the [Eslint VScode extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) in monorepos, use the [eslint.workingDirectories](https://github.com/microsoft/vscode-eslint#mono-repository-setup) setting.

## Setup with create-sheriff-config

If you want to use `create-sheriff-config` to bootstrap Sheriff in one of your workspaces, you can actually do so by following the general usage rules of workspaces, meaning that you should run the command from the root of your monorepo, and then filter by the workspace you want to apply Sheriff to. A chain of prompts will start to guide you through the correct process of installation.

Examples:

```bash title=pnpm
pnpm dlx create-sheriff-config --filter=packages/my-package
```

```bash title="npm or yarn"
npx create-sheriff-config --filter=packages/my-package
```
