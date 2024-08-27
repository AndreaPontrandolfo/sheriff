---
sidebar_position: 2
---

# ✨ Features

- ⚡ **Batteries included**: Sheriff is a all-in-one solution. You don't need to install or configure separately anything else. Everything is included here
- ∞ **Seamless**: if you know ESLint, you know Sheriff
- 🔓 **No lock-in**: Sheriff has extended capabilities beyond being a simple eslint config, but it's **not** a framework. You can extend the `eslint.config.js` beyond Sheriff as much as you like, just like you normally would. Or you can disable any rule Sheriff comes with. Sheriff doesn't impose any limitation. See: [configuration](./configuration.mdx)
- 🤝 **Sheriff meets you where you are at**: some other configs bundle linting rules with formatting opinions and impose restrictions on how you should format your code. Sheriff does not. If you want to use Prettier alongside Sheriff, Sheriff provides you with the golden path to do it, if you don't it's ok too!
- 🏑 **Frictionless by design**: to setup Sheriff and take off, the only input required from the user is running the `npm init @sherifforg/config` command. The command will automatically infer the details of your project and figure out the optimal Sheriff configuration by itself
- ⇆ **Interoperability**: you can plop Sheriff in your project at any moment. `npm init @sherifforg/config` will configure automatically everything for you and will warn you if you need to take any special precautions. Bottom line: it's never too late to install Sheriff
- 🏔 **Cutting-edge**: Sheriff is one of the first attempts in the wild to adhere to the new eslint configuration format, the `FlatConfig`. You can use Sheriff to easily and safely migrate your project to the new config format without effort. See: [migration guide](./migration-guide.mdx)
- 👊 **Sensible**: All of the rules that were hand-picked in Sheriff were chosen to counter some problematic real-world scenarios that can occur in production projects and to ensure maximum style consistency. No bloat here. See [criteria](./core-philosophy/criteria.md)
- 🛡️ **Typesafe**: The Sheriff configuration file can be typesafe! See: [eslint-config-ts](./typescript-support/eslint-config-ts.md)
- 🗄️ **Configurable**: Sheriff is fully configurable with its own config object. See: [configuration](./configuration.mdx)
- 🐙 **Modular**: Sheriff has opt-in support for a [wide array of libraries](./techs.md)
- 🆙 **SemVer**: Sheriff [releases](https://github.com/AndreaPontrandolfo/sheriff/releases) follows [Semantic Versioning](https://semver.org/) with [Conventional Commits](https://www.conventionalcommits.org/) standards
