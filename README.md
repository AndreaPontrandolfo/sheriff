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
10. [♻ Migration guide](#migration-guide)
11. [🌤 Changelog](#changelog)
12. [📋 License](#license)
13. [🚀 Roadmap](#roadmap)
14. [💌 Acknowledgments](#acknowledgments)

## <a name="description"></a>📖 Description

### <a name="introduction"></a>🥳 Introduction

`sheriff` is a comprehensive Eslint configuration.<br>
It takes into account various technologies. See: [techs](#techs).<br>
`sheriff` is very easy top get started with and use. It promotes a _“Zero overhead approach”_. See: [philosophy](#philosophy). <br>
It’s a _"plug & play"_ solution but you can customize it as much as you want. See: [features](#features).

> ⚠️ At the moment, `sheriff` supports only Typescript codebases with modern Ecmascript standards. Maybe in the future i'll take in consideration support for vanilla Javascript. See: [roadmap](#roadmap).

### <a name="why"></a>🤔 Why / Motivations

Managing a complex eslint configurazione takes time and effort. `sheriff` does it for you.

### <a name="philosophy"></a>💭 Philosophy / Criteria

This library is very opinionated, but it's for the better. I took a lot of decisions so you don't have to [^2].<br>
You can now quickstart static analysis in all your Typescript projects with ease. It's just 1 `create-sheriff-config`.<br>
You can think of `sheriff` like `prettier` or `create-react-app`. It's a tool that comes battery-packed with optimal defaults. It remove configuration decisions from the equation, so you or your team can focus on developing the actual product.<br>
And if you don't like something, you can easily override it, and just as easily you can extend it. See: [usage](#usage).

[^2]: This config is particularly useful for big teams with developers of various skill levels. I worked in a lot of different projects and teams through the years and i got accustomed to seeing all kinds of mistake being made. `sheriff` was made to prevent all of those mistakes. It is battle-tested in real-world scenarios, and shines especially in such.

## <a name="setup"></a>🛠️ Setup

This config is **highly** opinionated, so make sure to meet the [hard requirements](#hard-requirements) in your project.
Then, follow these steps:

### 🤖 Automatic setup

Just execute this command in your terminal:

```bash
❯  npx create-sheriff-config
```

...and your good to go!

### 😫 Manual setup

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

   import sheriff from 'eslint-config-sheriff/recommended';

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

   import sheriff from 'eslint-config-sheriff/recommended';
   // my other imports...

   export default [
     // my other configurations...
     ...sheriff,
   ];
   ```

3. [Configure sheriff](#configuration) (_optional_)

[^1]: `sheriff` is based on the [new format of Eslint configs](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new). You cannot extend `sheriff` from a [old config format](https://eslint.org/docs/latest/user-guide/configuring/configuration-files), it wouldn't work.

## <a name="features"></a>✨ Features

- ⚡ **Batteries included**: `sheriff` is a all-in-one solution. You don't need to install or configure separately anything else. Everything is included here.
- 🔓 **No lock-in**: `sheriff` is not a framework. You can extend the `eslint.config.js` beyond `sheriff` as much as you like, just like you normally would. Or you can disable any rule `sheriff` comes with. `sheriff` doesn't impose any limitation.
- 🏑 **Frictionless by design**: to setup `sheriff` and take off, the only input required from the user is running the command `npx create-sheriff-config`. The command will automatically infer the details of your project and figure out the optimal `sheriff` configuration by itself.
- ⇆ **Interoperability**: you can plop `sheriff` in your project at any moment. `create-sheriff-config` will config automatically everything for you and will warn you if you need take any special precautions. Bottomline: it's never to late too install `sheriff`.
- 🏔 **Cutting-edge**: `sheriff` is one of the first attempts in the wild to adhere to the new eslint configuration format, the `FlatConfig`. You can use `sheriff` to easily and safely migrate your project to the new config format without effort. See: [migration guide](#migration-guide).
- 🗄️ **Configurable**: `sheriff` is fully configurable with it's own config file `sheriff.config.js`. See: [configuration](#configuration).<br>
  `sheriff` has opt-in support for a wide array of libraries. See: [techs](#techs).
- ✍ **SemVer**: `sheriff` [releases](https://github.com/AndreaPontrandolfo/sheriff/releases) follows [Semantic Versioning](https://semver.org/) with [Conventional Commits](https://www.conventionalcommits.org/) standards.

## <a name="techs"></a>🖥️ Techs

- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/) (_optional_)
- [Next](https://nextjs.org/) (_optional_)
- [Lodash](https://lodash.com/) (_optional_)
- [Playwright](https://playwright.dev/) (_optional_)

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

- Configure `sheriff` as desired in the `sheriff.config.js` file.
- Override any `sheriff` rule as desired in the `eslint.config.js` file.

## <a name="migration-guide"></a>♻ Migration guide

TODO

## <a name="license"></a>📋 License

See [License](https://github.com/AndreaPontrandolfo/sheriff/blob/master/LICENSE).

## <a name="changelog"></a>🌤 Changelog

See [Releases](https://github.com/AndreaPontrandolfo/sheriff/releases).

## <a name="roadmap"></a>🚀 Roadmap

- [ ] Consider more rules
- [ ] `eslint-plugin-n`
- [x] `eslint-plugin-next`
- [x] Create the `sheriff.config.js` file support
- [x] Create a cli ala `create-react-app`
- [x] Remove `react` as a hard requirement
- [ ] Svelte support
- [ ] Solid support
- [ ] Vue support
- [ ] Astro support
- [ ] Create a documentation website

## <a name="acknowledgments"></a>💌 Acknowledgments

For some of this config i partially used [eslint-config-red](https://github.com/GrosSacASac/JavaScript-Set-Up/blob/master/js/red-javascript-style-guide/index.js) as a base.<br>
I don't take any attribution for the rules in the various eslint-plugins used here (expect for the few that i personally created). Please consider starring the respective projects for the awesome work their authors made. `sheriff` wouldn't be possible without their efforts. <br>
The full list of the plugins used is [here](#eslint-plugins).
