<br>
<p align="center"><img src="https://github.com/AndreaPontrandolfo/sheriff/blob/master/assets/images/sheriff_icon.png" width="148"></p>

# Sheriff

> **Note**
> For a better reading experience, checkout the [official docs](https://sheriffrc.gitbook.io/sheriff/).

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
11. [🌎 Monorepo support](#monorepo-support)
12. [🧐 Prior art](#prior-art)
13. [♻ Migration guide](#migration-guide)
14. [🧡 Contributing](#contributing)
15. [🌤 Changelog](#changelog)
16. [📋 License](#license)
17. [👉 Faq](#faq)
18. [💌 Acknowledgments](#acknowledgments)

## <a name="description"></a>📖 Description

### 🥳 Introduction

Sheriff is a comprehensive Eslint configuration. It supports [various popular technologies](#techs).<br>

> ⚠️ At the moment, Sheriff supports only Typescript codebases with modern Ecmascript standards. Support for vanilla Javascript will come at a later time. See: [roadmap](#roadmap).

### 🔑 Key points

- This library is pioneering in the adoption of the Eslint `FlatConfig`, [introduced in Eslint v8.23.0](https://eslint.org/blog/2022/08/eslint-v8.23.0-released/).<br>
- Sheriff is very easy to get started with and use. It promotes a _“zero overhead approach”_. See: [philosophy](#philosophy). <br>
- It’s a [_"plug & play"_](#automatic-setup) solution but you can customize it as much as you want. See: [features](#features).

### 🤔 Why / Motivations

Managing a complex Eslint configuration takes time and effort. **Sheriff does it for you**.

### <a name="philosophy"></a>💭 Philosophy / Criteria

This library is very opinionated, but it's for the better. I took a lot of decisions so you don't have to [^2].<br>
You can now quickstart static analysis in all your Typescript projects with ease. It's just 1 `create-sheriff-config`.<br>
You can think of Sheriff like `prettier` or `create-react-app`. It's a tool that comes battery-packed with optimal defaults. It removes configuration decisions from the equation, so you or your team can focus on developing the actual product.<br>
And if you don't like something, you can easily override it, and just as easily you can extend it. See: [configuration](#configuration).

[^2]: This config is particularly useful for big teams with developers of various skill levels. Sheriff was made to prevent all kind of mistakes and to align the team on the same playing field. It is battle-tested in real-world scenarios and shines especially in such.

## <a name="setup"></a>🛠️ Setup

This config is **highly** opinionated, so make sure to meet the [hard requirements](#hard-requirements) in your project.<br>
Then, let `create-sheriff-config` handle the whole setup for you automatically, or do it yourself manually.
For greenfield projects, the below setup will be enough. However, for already established codebases, you should also follow the instructions for the [migration path](#migration-guide).

### <a name="automatic-setup"></a>🤖 Automatic setup (_recommended_)

Let the CLI take care of everything! Just run this command in your terminal:

```bash
❯  npx create-sheriff-config
```

or

```bash
❯  pnpx create-sheriff-config
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

   export default [...sheriff];
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

3. [Configure Sheriff](#configuration) (_optional_)
4. [Setup prettier](#prettier-support) (_optional_)

[^1]: Sheriff is based on the [new format of Eslint configs](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new). You cannot extend Sheriff from a [old config format](https://eslint.org/docs/latest/user-guide/configuring/configuration-files), it wouldn't work.

## <a name="features"></a>✨ Features

- ⚡ **Batteries included**: Sheriff is a all-in-one solution. You don't need to install or configure separately anything else. Everything is included here.
- 🔓 **No lock-in**: Sheriff is not a framework. You can extend the `eslint.config.js` beyond Sheriff as much as you like, just like you normally would. Or you can disable any rule Sheriff comes with. Sheriff doesn't impose any limitation. See: [configuration](#configuration).
- 🏑 **Frictionless by design**: to setup Sheriff and take off, the only input required from the user is running the command `npx create-sheriff-config`. The command will automatically infer the details of your project and figure out the optimal Sheriff configuration by itself.
- ⇆ **Interoperability**: you can plop Sheriff in your project at any moment. `create-sheriff-config` will config automatically everything for you and will warn you if you need to take any special precautions. Bottom line: it's never too late to install Sheriff.
- 🏔 **Cutting-edge**: Sheriff is one of the first attempts in the wild to adhere to the new eslint configuration format, the `FlatConfig`. You can use Sheriff to easily and safely migrate your project to the new config format without effort. See: [migration guide](#migration-guide).
- 👊 **Sensible**: Almost all of the rules that were hand-picked in Sheriff were chosen to counter some problematic real-world scenarios that can occur in production projects. No bloat here.
- 🗄️ **Configurable**: Sheriff is fully configurable with its own config file `.sheriffrc.json`. See: [configuration](#configuration).
- 🐙 **Modular**: Sheriff has opt-in support for a [wide array of libraries](#techs).
- ✍ **SemVer**: Sheriff [releases](https://github.com/AndreaPontrandolfo/sheriff/releases) follows [Semantic Versioning](https://semver.org/) with [Conventional Commits](https://www.conventionalcommits.org/) standards.

## <a name="techs"></a>🖥️ Techs

- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Typescript](https://www.typescriptlang.org/) (_out of the box support_)
- [Storybook](https://storybook.js.org/) (_out of the box support_)
- [React](https://reactjs.org/) (_opt-in_)
- [Next](https://nextjs.org/) (_opt-in_)
- [Lodash](https://lodash.com/) (_opt-in_)
- [Playwright](https://playwright.dev/) (_opt-in_)
- [Jest](https://jestjs.io/) (_opt-in_)
- [Vitest](https://vitest.dev/) (_opt-in_)

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
- [eslint-plugin-etc](https://github.com/cartant/eslint-plugin-etc)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)
- [eslint-plugin-fp](https://github.com/jfmengels/eslint-plugin-fp)
- [@shopify/eslint-plugin](https://www.npmjs.com/package/@shopify/eslint-plugin)
- [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)
- [eslint-plugin-tsdoc](https://www.npmjs.com/package/eslint-plugin-tsdoc)
- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) with [eslint-import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript)
- [eslint-plugin-lodash-f](https://github.com/AndreaPontrandolfo/eslint-plugin-lodash)
  - my fork of [eslint-plugin-lodash](https://github.com/wix/eslint-plugin-lodash)
- [@next/eslint-plugin-next](https://www.npmjs.com/package/@next/eslint-plugin-next)
- [eslint-plugin-playwright](https://github.com/playwright-community/eslint-plugin-playwright)
- [eslint-plugin-storybook](https://github.com/storybookjs/eslint-plugin-storybook)

## <a name="rules"></a>🧶 Rules

See [Rules](https://github.com/AndreaPontrandolfo/sheriff/tree/master/docs/rules.json).

## <a name="configuration"></a>🧠 Configuration

- Configure Sheriff as desired in the `.sheriffrc.json` file [^3].<br>
  Every config option can be set on/off (you just pass them a boolean value). As they are all opt-in, they are all disabled by default.

  ```JSONC
  // .sheriffrc.json (default)

  {
    "react": false,
    "next": false,
    "lodash": false,
    "playwright": false,
    "jest": false,
    "vitest": false
  }
  ```

[^3]: Sheriff utilizes [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) under-the-hood to power-up the Sheriff configuration. You are not forced to call the config file ".sheriffrc.json", you can choose one of the alternative file types. See [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) for details.

- Override any Sheriff rule as desired in the `eslint.config.js` file.<br>
  For example:

  ```js
  // eslint.config.js

  import sheriff from 'eslint-config-sheriff';

  export default [...sheriff];
  ```

  Let's say you want to disable a Sheriff rule, like `import/first`:

  ```js
  // eslint.config.js

  import sheriff from 'eslint-config-sheriff';

  export default [
    ...sheriff,
    {
      rules: {
        'import/first': 0, // 👉 'import/first' is now disabled everywhere.
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
      rules: {
        'no-undef': 2,
      },
    },
  ];
  ```

  This is just the standard behavior of the new configuration system of Eslint, which I'm illustrating here for your convenience. Sheriff doesn't alter this in any way.<br>
  For more in-depth information, refer to the [official docs](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new).

## <a name="prettier-support"></a>💅 Prettier support

Sheriff tries to incorporate [prettier](https://prettier.io/) out-of-the-box.<br>
The `create-sheriff-config` command will spin up for you a default `.prettierrc.json` configuration. You _can_ modify it if you need to, but [it is discouraged](https://prettier.io/docs/en/option-philosophy.html). Act with caution.<br>
If you don't use the `create-sheriff-config` command, you will have to provide a prettier config yourself. Also don't forget the [.prettierignore file](https://prettier.io/docs/en/ignore.html).<br>
If you already have a prettier config in your project, the `create-sheriff-config` command won't create a new prettier config, nor will attempt to modify the existing one.<br>
Sheriff comes with the rules of [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) out-of-the-box.<br>
By design, Sheriff **doesn't** incorporate [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier). Its use is discouraged by the prettier team itself, [as it just slows down your editor](https://prettier.io/docs/en/integrating-with-linters.html#notes).<br>
Instead, for your local editing experience, it's recommended to install a [editor extension](https://prettier.io/docs/en/editors.html).<br>
If you want to enforce Prettier at pre-commit stage, see the [official docs](https://prettier.io/docs/en/option-philosophy.html).<br>
To enforce Prettier in CI, see the [CLI docs](https://prettier.io/docs/en/cli.html).

## <a name="monorepo-support"></a>🌎 Monorepo support

While Sheriff can be made to work at the _root_ of monorepos, it is highly advisible to not do so.<br>
It works fine in singular packages inside monorepos. To make use of the [Eslint VScode Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) in monorepos, use the setting: [eslint.workingDirectories](https://github.com/microsoft/vscode-eslint#mono-repository-setup)

## <a name="prior-art"></a>🧐 Prior art

### Related projects

- [eslint-config-galex](https://github.com/ljosberinn/eslint-config-galex)
- [eslint-kit](https://github.com/eslint-kit/eslint-kit)
- [eslint-config-everywhere](https://github.com/locol23/eslint-config-everywhere)
- [xo](https://github.com/xojs/xo)
- [eslint-plugin-canonical](https://github.com/gajus/eslint-plugin-canonical)
- [eslint-prettier-typescript-config](https://github.com/moia-oss/eslint-prettier-typescript-config)
- [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)

### Comparisons

The main difference between Sheriff and the other projects is that Sheriff is updated to the most recent version of Eslint and supports the new `FlatConfig` instead of relying on weird hacks using the [@rushstack/eslint-patch](https://www.npmjs.com/package/@rushstack/eslint-patch).<br>
There are of course other differences as well, but you can get an idea for yourself by reading their READMEs.

## <a name="migration-guide"></a>♻ Migration guide

If you are setting up Sheriff in an already established codebase, follow these steps:

1. Start by running the `create-sheriff-config` command and follow the advices that it prints in the console.
2. Make sure that the only eslint config file present in the whole project is the `eslint.config.js`.
3. If you want to keep your existing custom rules on-top of Sheriff, move them to the `eslint.config.js`, after the `sheriff` config. Refer to the [configuration instructions](#configuration).
4. Make sure to uninstall all the packages that Sheriff already incorporates out-of-the-box. [Here](#eslint-plugins) is the list.
5. In massive codebases it can be troublesome to adapt to all these rules all at once. It is preferable to progressively fix the errors at your own pace, possibly with atomic commits. You can achieve this by leveraging 2 techniques:

   - open the `.sheriffrc.json` file and add a key `files` in the JSON object. The value accepts an array of filepaths, dictaced by [minimatch](https://github.com/isaacs/minimatch) syntax. Only the matching files found in this array will be linted. See example below:

     ```JSONC
     // .sheriffrc.json

     {
       "files": ["./src/**/*"],
       "react": false,
       "next": false,
       "lodash": false,
       "playwright": false,
       "jest": false,
       "vitest": false
     }
     ```

     > **Note**
     > By default, the `files` key is absent in the object and every js/ts file will be linted. Use this only if you want to specifically lint just a subsection of the codebase.

   - use [eslint-interactive](https://github.com/mizdra/eslint-interactive).

## <a name="contributing"></a>🧡 Contributing

### Suggestions

Feel free to propose suggestions about new rules to implement, or tweaks to existing rules.<br>
Please use the discussions tab or the issues tab for new rules proposals.

### Development

1. Clone the repo
2. Install the dependencies with pnpm
3. Do the changes

## <a name="license"></a>📋 License

[MIT License](https://github.com/AndreaPontrandolfo/sheriff/blob/master/LICENSE).

## <a name="changelog"></a>🌤 Changelog

See [Releases](https://github.com/AndreaPontrandolfo/sheriff/releases).

## <a name="faq"></a>👉 FAQ

- Why you didn’t include Eslint plugins/rules for "X" library?
  - [Cypress](https://github.com/cypress-io/eslint-plugin-cypress) ➜ Don't use [Cypress](https://www.cypress.io/). Use [Playwright](https://playwright.dev/) instead.
  - [Testing library](https://github.com/testing-library/eslint-plugin-testing-library) ➜ I believe [testing library](https://github.com/testing-library) is one of the least efficient ways to test UIs. In most codebases it does more harm than good. You can use [Storybook](https://github.com/storybookjs/storybook) to test and develop components in isolation.
- Is Sheriff compatible with "X"?
  - [Vite](https://vitejs.dev/) ➜ Yes.
  - [CRA](https://create-react-app.dev/) ➜ Yes. Just add this line to your `.env` file:
    ```
    DISABLE_ESLINT_PLUGIN=true
    ```
  - [Rome](https://rome.tools/) ➜ No. Rome is not compatible with Eslint in the first place.
  - [Deno](https://deno.land/) ➜ No. Deno is not compatible with Eslint in the first place.
  - [Bun](https://bun.sh/) ➜ Untested.

## <a name="acknowledgments"></a>💌 Acknowledgments

For some of this config i partially used [eslint-config-red](https://github.com/GrosSacASac/JavaScript-Set-Up/blob/master/js/red-javascript-style-guide/index.js) as a base.<br>
Also took inspiration from [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) for some of the rules in `no-restricted-syntax`.<br>
I don't take any attribution for the rules in the various eslint-plugins used here (except for the few that I personally created). Please consider starring the respective projects for the awesome work their authors made. Sheriff wouldn't be possible without their efforts. <br>
The full list of the plugins used is [here](#eslint-plugins).
