<br>
<p align="center"><img src="https://github.com/AndreaPontrandolfo/sheriff/blob/master/assets/images/sheriff_icon.png" width="148"></p>

# Sheriff

## <a name="table-of-contents"></a>📜 Table of Contents

1. [Table of Contents](#table-of-contents)
2. [Description](#description)
3. [Usage](#usage)
4. [Techs](#techs)
5. [Requirements](#requirements)
6. [Eslint plugins](#eslint-plugins)
7. [Roadmap](#roadmap)
8. [Acknowledgments](#acknowledgments)

## <a href="description"></a>📖 Description

This is a comprehensive Eslint configuration.<br>
It takes into account various technologies.<br>
>==⚠️ At the moment, this config supports only Typescript codebases with modern Ecmascript standards. Maybe in the future i'll take in consideration support for vanilla Javascript. Refer to the [roadmap](#roadmap).==

## <a href="philosophy"></a>📖 Philosophy

This library is very opinionated, but it's for the better. I took a lot of decisions so you don't have too [^2]. You can now quickstart static analysis in all your Typescript projects with ease. It's just 1 `npm install`.<br>
And if you don't like something, you can easily override it (see: [usage](#usage)).

[^2]: This config is particularly useful for big teams with developers of various skill levels. I worked in a lot of different projects and teams through the years and i got accustomed to seeing all kinds of mistake being made. "sheriff" was made to prevent all of those mistakes. It is battle-tested in real-world scenarios, and shines especially in such scenarios.


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
- [Install](#installation) the package from [npm](https://www.npmjs.com/package/eslint-config-sheriff).
- Create a 	`eslint.config.js` [^1] file and copy/paste the contents of this snippet: 
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
    or, if you already have a `eslint.config.js` in your project, just append "sheriff" to the configs array, like this:
    ```js
    // eslint.config.js

    import sheriff from 'eslint-config-sheriff/recommended';
    // my other imports...

    export default [
        // my other configurations...
        ...sheriff,
    ];
    ```

- Configure "sheriff" as desired in the `sheriff.config.js` file. (*optional*)
- Override any sheriff rule as desired in the `eslint.config.js` file. (*optional*)

[^1]: "sheriff" is based on the [new format of Eslint configs](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new). You cannot extend "sheriff" from a [old config format](https://eslint.org/docs/latest/user-guide/configuring/configuration-files), it wouldn't work.


## <a name="techs"></a>🖥️ Techs

- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Lodash](https://lodash.com/) (*optional*)
- [Playwright](https://playwright.dev/) (*optional*)

## <a name="requirements"></a>🔑 Requirements
 
### Hard requirements
- Node 16+
- [Eslint](https://eslint.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)

### Recommendations
- [VScode](https://code.visualstudio.com/)
- VScode eslint extension
- VScode prettier extension
- Node 18+

## <a name="eslint-plugins"></a>🐙 Eslint plugins 

- prettier ([plugin](https://github.com/prettier/eslint-plugin-prettier)/[config](https://github.com/prettier/eslint-config-prettier))
- [@typescript/eslint](https://github.com/typescript-eslint/typescript-eslint)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-prefer-optional-chaining](https://github.com/horacio-penya/eslint-plugin-prefer-optional-chaining)
- [eslint-plugin-lodash-f](https://github.com/AndreaPontrandolfo/eslint-plugin-lodash)
    - my fork of [eslint-plugin-lodash](https://github.com/wix/eslint-plugin-lodash)
- [eslint-plugin-playwright](https://github.com/playwright-community/eslint-plugin-playwright)
- [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)

## <a name="roadmap"></a>🚀 Roadmap

- [ ] Consider more rules
- [ ] Create a documentation website
- [ ] Create a cli ala `create-react-app`

## <a name="acknowledgments"></a>🙏 Acknowledgments

For some of this config i partially used as a base [eslint-config-red](https://github.com/GrosSacASac/JavaScript-Set-Up/blob/master/js/red-javascript-style-guide/index.js).