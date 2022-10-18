<br>
<p align="center"><img src="https://github.com/AndreaPontrandolfo/sheriff/blob/master/assets/images/sheriff_icon.png" width="148"></p>

# Sheriff

## <a name="table-of-contents"></a>📜 Table of Contents

1. [📜 Table of Contents](#table-of-contents)
2. [📖 Description](#description)
3. [🛠️ Setup](#setup)
4. [✨ Features](#features)
5. [🖥️ Techs](#techs)
6. [🔑 Requirements](#requirements)
7. [🧳 Eslint plugins](#eslint-plugins)
8. [🧶 Rules](#rules)
9. [🧠 Configuration](#configuration)
10. [💅 Prettier support](#prettier-support)
11. [🧐 Prior art](#prior-art)
12. [♻ Migration guide](#migration-guide)
13. [🧡 Contributing](#contributing)
14. [🌤 Changelog](#changelog)
15. [📋 License](#license)
16. [🚀 Roadmap](#roadmap)
17. [💌 Acknowledgments](#acknowledgments)

> **Note**
> For a better reading experience, explore the [official docs](https://sheriffrc.gitbook.io/sheriff/).

## <a name="description"></a>📖 Description

### 🥳 Introduction

`sheriff` is a comprehensive Eslint configuration. It supports [various popular technologies](#techs).<br>

> ⚠️ At the moment, `sheriff` supports only Typescript codebases with modern Ecmascript standards. Support for vanilla Javascript will come at a later time. See: [roadmap](#roadmap).

### 🔑 Key points

- This library is pioneering in the adoption of the Eslint `FlatConfig`, [introduced in Eslint v8.23.0](https://eslint.org/blog/2022/08/eslint-v8.23.0-released/).<br>
- `sheriff` is very easy to get started with and use. It promotes a _“zero overhead approach”_. See: [philosophy](#philosophy). <br>
- It’s a [_"plug & play"_](#automatic-setup) solution but you can customize it as much as you want. See: [features](#features).

### 🤔 Why / Motivations

Managing a complex Eslint configuration takes time and effort. **`sheriff` does it for you**.

### <a name="philosophy"></a>💭 Philosophy / Criteria

This library is very opinionated, but it's for the better. I took a lot of decisions so you don't have to [^2].<br>
You can now quickstart static analysis in all your Typescript projects with ease. It's just 1 `create-sheriff-config`.<br>
You can think of `sheriff` like `prettier` or `create-react-app`. It's a tool that comes battery-packed with optimal defaults. It removes configuration decisions from the equation, so you or your team can focus on developing the actual product.<br>
And if you don't like something, you can easily override it, and just as easily you can extend it. See: [configuration](#configuration).

[^2]: This config is particularly useful for big teams with developers of various skill levels. I worked on a lot of different projects and teams through the years and I got accustomed to seeing all kinds of mistakes being made. `sheriff` was made to prevent all of those mistakes. It is battle-tested in real-world scenarios and shines especially in such.

## <a name="setup"></a>🛠️ Setup

This config is **highly** opinionated, so make sure to meet the [hard requirements](#hard-requirements) in your project.<br>
Then, let `create-sheriff-config` handle the whole setup for you automatically, or do it yourself manually.

### <a name="automatic-setup"></a>🤖 Automatic setup (_recommended_)

Let the CLI take care of everything! Just run this command in your terminal:

```bash
❯  npx create-sheriff-config
```

...and you are good to go! Happy hacking 🎉

### 😫 Manual setup

Follow these steps:

1. Install the package from [npm](https://www.npmjs.com/package/eslint-config-sheriff).

   ```bash
   # npm
   ❯  npm install -D eslint-config-sheriff

   # yarn
   ❯  yarn add -D eslint-config-sheriff

   # pnpm
   ❯  pnpm add -D eslint-config-sheriff
   ```

2. Create a `eslint.config.js` [^1] file at the root of your project and copy/paste the contents of this snippet:

   ```js
   // eslint.config.js

   import sheriff from 'eslint-config-sheriff';

   export default [
     ...sheriff,
     {
       files: ['**/*{js,ts,jsx,tsx}'],
     },
   ];
   ```

   or, if you already have a `eslint.config.js` in your project, just append `sheriff` to the configs array, like this:

   ```js
   // eslint.config.js

   import sheriff from 'eslint-config-sheriff';
   // my other imports...

   export default [
     // my other configurations...
     ...sheriff,
   ];
   ```

3. [Configure sheriff](#configuration) (_optional_)
4. [Setup prettier](#prettier-support) (_optional_)

[^1]: `sheriff` is based on the [new format of Eslint configs](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new). You cannot extend `sheriff` from a [old config format](https://eslint.org/docs/latest/user-guide/configuring/configuration-files), it wouldn't work.

## <a name="features"></a>✨ Features

- ⚡ **Batteries included**: `sheriff` is a all-in-one solution. You don't need to install or configure separately anything else. Everything is included here.
- 🔓 **No lock-in**: `sheriff` is not a framework. You can extend the `eslint.config.js` beyond `sheriff` as much as you like, just like you normally would. Or you can disable any rule `sheriff` comes with. `sheriff` doesn't impose any limitation. See: [configuration](#configuration).
- 🏑 **Frictionless by design**: to setup `sheriff` and take off, the only input required from the user is running the command `npx create-sheriff-config`. The command will automatically infer the details of your project and figure out the optimal `sheriff` configuration by itself.
- ⇆ **Interoperability**: you can plop `sheriff` in your project at any moment. `create-sheriff-config` will config automatically everything for you and will warn you if you need to take any special precautions. Bottom line: it's never too late to install `sheriff`.
- 🏔 **Cutting-edge**: `sheriff` is one of the first attempts in the wild to adhere to the new eslint configuration format, the `FlatConfig`. You can use `sheriff` to easily and safely migrate your project to the new config format without effort. See: [migration guide](#migration-guide).
- 👊 **Sensible**: Almost all of the rules I hand-picked in `sheriff` were chosen to counter some problematic real-world scenarios that have occurred in some projects. No bloat here.
- 🗄️ **Configurable**: `sheriff` is fully configurable with its own config file `sheriffrc.json`. See: [configuration](#configuration).
- 🐙 **Modular**: `sheriff` has opt-in support for a [wide array of libraries](#techs).
- ✍ **SemVer**: `sheriff` [releases](https://github.com/AndreaPontrandolfo/sheriff/releases) follows [Semantic Versioning](https://semver.org/) with [Conventional Commits](https://www.conventionalcommits.org/) standards.

## <a name="techs"></a>🖥️ Techs

- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/) (_opt-in_)
- [Next](https://nextjs.org/) (_opt-in_)
- [Lodash](https://lodash.com/) (_opt-in_)
- [Playwright](https://playwright.dev/) (_opt-in_)

## <a name="requirements"></a>🔑 Requirements

### Hard requirements

- [Node >=16](https://nodejs.org/en/)
- [Eslint >=8.23.0](https://eslint.org/)
- [Typescript](https://www.typescriptlang.org/)

### Recommendations

- [Node >=18](https://nodejs.org/en/)
- [VScode](https://code.visualstudio.com/)
- [VScode eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [VScode prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## <a name="eslint-plugins"></a>🧳 Eslint plugins

- [@typescript/eslint](https://github.com/typescript-eslint/typescript-eslint)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)
- [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) with [eslint-import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript)
- [eslint-plugin-lodash-f](https://github.com/AndreaPontrandolfo/eslint-plugin-lodash)
  - my fork of [eslint-plugin-lodash](https://github.com/wix/eslint-plugin-lodash)
- [@next/eslint-plugin-next](https://www.npmjs.com/package/@next/eslint-plugin-next)
- [eslint-plugin-playwright](https://github.com/playwright-community/eslint-plugin-playwright)

## <a name="rules"></a>🧶 Rules

See [Rules](https://github.com/AndreaPontrandolfo/sheriff/tree/master/docs/rules.json).

## <a name="configuration"></a>🧠 Configuration

- Configure `sheriff` as desired in the `sheriffrc.json` file [^3].<br>
  Every config option can be set on/off (you just pass them a boolean value). As they are all opt-in, they are all disabled by default.

  ```json5
  // sheriffrc.json (default)

  {
    react: false,
    next: false,
    lodash: false,
    playwright: false,
  }
  ```

[^3]: `sheriff` utilizes [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) under-the-hood to power-up the `sheriff` configuration. You are not forced to call the config file "sheriffrc.json", you can choose one of the alternative file types. See [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) for details.

- Override any `sheriff` rule as desired in the `eslint.config.js` file.<br>
  For example:

  ```js
  // eslint.config.js

  import sheriff from 'eslint-config-sheriff';

  export default [
    ...sheriff,
    {
      files: ['**/*{js,ts,jsx,tsx}'],
    },
  ];
  ```

  Let's say you want to disable a `sheriff` rule, like `import/first`:

  ```js
  // eslint.config.js

  import sheriff from 'eslint-config-sheriff';

  export default [
    ...sheriff,
    {
      files: ['**/*{js,ts,jsx,tsx}'],
    },
    {
      rules: {
        'import/first': 0, // adding this, 'import/first' is now disabled everywhere.
      },
    },
  ];
  ```

  Likewise, let's say you want to enable a new rule:

  ```js
  // eslint.config.js

  import sheriff from 'eslint-config-sheriff';

  export default [
    ...sheriff,
    {
      files: ['**/*{js,ts,jsx,tsx}'],
    },
    {
      rules: {
        'no-undef': 2,
      },
    },
  ];
  ```

  This is just the standard behavior of the new configuration system of Eslint, which I'm illustrating here for your convenience. `sheriff` doesn't alter this in any way.<br>
  For more in-depth information, refer to the [official docs](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new).

## <a name="prettier-support"></a>💅 Prettier support

`sheriff` tries to incorporate [prettier](https://prettier.io/) out-of-the-box.<br>
The `create-sheriff-config` command will spin up for you a default `.prettierrc.json` configuration. You _can_ modify it if you need to, but [it is discouraged](https://prettier.io/docs/en/option-philosophy.html). Act with caution.<br>
If you don't use the `create-sheriff-config` command, you will have to provide a prettier config yourself. Also don't forget the [.prettierignore file](https://prettier.io/docs/en/ignore.html).<br>
If you already have a prettier config in your project, the `create-sheriff-config` command won't create a new prettier config, nor will attempt to modify the existing one.<br>
`sheriff` comes with the rules of [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) out-of-the-box.<br>
By design, `sheriff` **doesn't** incorporate [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier). Its use is discouraged by the prettier team itself, [as it just slows down your editor](https://prettier.io/docs/en/integrating-with-linters.html#notes).<br>
Instead, for your local editing experience, it's recommended to install a [editor extension](https://prettier.io/docs/en/editors.html).<br>
If you want to enforce Prettier at pre-commit stage, see the [official docs](https://prettier.io/docs/en/option-philosophy.html).<br>
To enforce Prettier in CI, see the [CLI docs](https://prettier.io/docs/en/cli.html).

## <a name="prior-art"></a>🧐 Prior art / Related projects

- [eslint-config-galex](https://github.com/ljosberinn/eslint-config-galex)
- [eslint-kit](https://github.com/eslint-kit/eslint-kit)
- [eslint-config-everywhere](https://github.com/locol23/eslint-config-everywhere)
- [xo](https://github.com/xojs/xo)
- [eslint-prettier-typescript-config](https://github.com/moia-oss/eslint-prettier-typescript-config)
- [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)

## <a name="migration-guide"></a>♻ Migration guide

1. Start by running the `create-sheriff-config` command and follow the advices that it prints in the console.
2. If you are setting up `sheriff` in an already established codebase, make sure that the only eslint config file present in the whole project is the `eslint.config.js`.
3. If you want to keep your existing custom rules on-top of `sheriff`, move them to the `eslint.config.js`, after the `sheriff` config array. Refer to the [configuration instructions](#configuration).
4. Make sure to uninstall all the packages that `sheriff` already incorporates out-of-the-box. [Here](#eslint-plugins) is the list.

## <a name="contributing"></a>🧡 Contributing

TODO

## <a name="license"></a>📋 License

[MIT License](https://github.com/AndreaPontrandolfo/sheriff/blob/master/LICENSE).

## <a name="changelog"></a>🌤 Changelog

See [Releases](https://github.com/AndreaPontrandolfo/sheriff/releases).

## <a name="roadmap"></a>🚀 Roadmap

- [x] `eslint-plugin-next`
- [x] Create the `sheriffrc.json` file support
- [x] Create a cli ala `create-react-app`
- [x] Remove `react` as a hard requirement
- [x] Create a documentation website
- [ ] Vanilla JS (typescipt opt-in) support
- [ ] Svelte support
- [ ] Solid support
- [ ] Vue support
- [ ] Astro support

## <a name="acknowledgments"></a>💌 Acknowledgments

For some of this config i partially used [eslint-config-red](https://github.com/GrosSacASac/JavaScript-Set-Up/blob/master/js/red-javascript-style-guide/index.js) as a base.<br>
Also took inspiration from [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) for some of the rules in `no-restricted-syntax`.<br>
I don't take any attribution for the rules in the various eslint-plugins used here (except for the few that I personally created). Please consider starring the respective projects for the awesome work their authors made. `sheriff` wouldn't be possible without their efforts. <br>
The full list of the plugins used is [here](#eslint-plugins).
