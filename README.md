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

This is a comprehensive Eslint configuration offered as a template.<br>
This config supports only modern Ecmascript and Typescript codebases.<br>
It takes into account various technologies.

## <a name="usage"></a>✨ Usage

Copy and paste the parts of the config that interest you and makes sense for your project.<br>
This config is **highly** opinionated, so make sure to meet the [hard requirements](#hard-requirements) in your project.

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

I plan to transform this into an actual npm package, once Eslint fully rolls out the new "Flat Config" system.

## <a name="acknowledgments"></a>🙏 Acknowledgments

For some of this config i partially used as a base [eslint-config-red](https://github.com/GrosSacASac/JavaScript-Set-Up/blob/master/js/red-javascript-style-guide/index.js).