<br>
<p align="center"><img src="https://github.com/AndreaPontrandolfo/sheriff/blob/master/assets/images/sheriff_icon.png" width="148"></p>

# Sheriff

## <a name="table-of-contents"></a>📜 Table of Contents

1. [Table of Contents](#table-of-contents)
2. [Description](#description)
3. [Philosophy](#philosophy)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Techs](#techs)
7. [Requirements](#requirements)
8. [Eslint plugins](#eslint-plugins)
9. [Roadmap](#roadmap)
10. [Acknowledgments](#acknowledgments)

## <a href="description"></a>📖 Description

`sheriff` is a comprehensive Eslint configuration.<br>
It takes into account various technologies (see: [techs](#techs)).<br>
>⚠️ At the moment, `sheriff` supports only Typescript codebases with modern Ecmascript standards. Maybe in the future i'll take in consideration support for vanilla Javascript. Refer to the [roadmap](#roadmap).

## <a href="philosophy"></a>💭 Philosophy / Why / Motivations

This library is very opinionated, but it's for the better. I took a lot of decisions so you don't have too [^2]. You can now quickstart static analysis in all your Typescript projects with ease. It's just 1 `npm install`.<br>
You can think of `sheriff` like `prettier` or `create-react-app`. It's a tool that tool that comes battery-packed with optimal defaults. It remove configuration decisions from the equation, so you or your team can focus on developing the actual product.<br>
And if you don't like something, you can easily override it, and just as easily you can extend it (see: [usage](#usage)).

[^2]: This config is particularly useful for big teams with developers of various skill levels. I worked in a lot of different projects and teams through the years and i got accustomed to seeing all kinds of mistake being made. `sheriff` was made to prevent all of those mistakes. It is battle-tested in real-world scenarios, and shines especially in such scenarios.


## <a name="installation"></a>🛠️ Installation

```bash
# npm
npm install -D eslint-config-sheriff

# yarn
yarn add -D eslint-config-sheriff

# pnpm
pnpm add -D eslint-config-sheriff
```

## <a name="usage"></a>✨ Usage

This config is **highly** opinionated, so make sure to meet the [hard requirements](#hard-requirements) in your project.
Then, follow these steps:
1. [Install](#installation) the package from [npm](https://www.npmjs.com/package/eslint-config-sheriff).
2. Create a 	`eslint.config.js` [^1] file and copy/paste the contents of this snippet: 
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

3. Configure `sheriff` as desired in the `sheriff.config.js` file. (*optional*)
4. Override any sheriff rule as desired in the `eslint.config.js` file. (*optional*)

[^1]: `sheriff` is based on the [new format of Eslint configs](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new). You cannot extend `sheriff` from a [old config format](https://eslint.org/docs/latest/user-guide/configuring/configuration-files), it wouldn't work.


## <a name="techs"></a>🖥️ Techs

- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Lodash](https://lodash.com/) (*optional*)
- [Playwright](https://playwright.dev/) (*optional*)

## <a name="requirements"></a>🔑 Requirements
 
### Hard requirements
- [Node >16](https://nodejs.org/en/)
- [Eslint >8.23.0](https://eslint.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)

### Recommendations
- [Node >18](https://nodejs.org/en/)
- [VScode](https://code.visualstudio.com/)
- [VScode eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [VScode prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## <a name="eslint-plugins"></a>🐙 Eslint plugins 

- [@typescript/eslint](https://github.com/typescript-eslint/typescript-eslint)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-lodash-f](https://github.com/AndreaPontrandolfo/eslint-plugin-lodash)
    - my fork of [eslint-plugin-lodash](https://github.com/wix/eslint-plugin-lodash)
- [eslint-plugin-playwright](https://github.com/playwright-community/eslint-plugin-playwright)
- [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)

## <a name="roadmap"></a>🚀 Roadmap

- [ ] Consider more rules
- [ ] `eslint-plugin-n`
- [ ] `eslint-plugin-next`
- [ ] Create the `sheriff.config.js file`
- [ ] Create a cli ala `create-react-app`
- [ ] Remove `react` as a hard requirement
- [ ] Create a documentation website

## <a name="acknowledgments"></a>🙏 Acknowledgments

For some of this config i partially used [eslint-config-red](https://github.com/GrosSacASac/JavaScript-Set-Up/blob/master/js/red-javascript-style-guide/index.js) as a base.<br>
I don't take any attribution for the rules in the various eslint-plugins used here. Please consider starring the respective projects for the awesome work their authors made. The full list of the plugins used is [here](#eslint-plugins).