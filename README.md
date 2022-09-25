<div style="text-align:center"><img src="https://github.com/AndreaPontrandolfo/sheriff/blob/master/assets/images/sheriff_icon.png" width="148"></div>

# Sheriff

## Table of Contents

1. [Description](#description)
2. [Usage](#usage)
3. [Techs](#techs)
4. [Requirements](#requirements)
5. [Eslint plugins](#eslint-plugins)
6. [Roadmap](#roadmap)
7. [Acknowledgments](#acknowledgments)

## Description

This is a comprehensive Eslint configuration offered as a template.<br>
It takes into account various technologies.

## Usage

Copy and paste the parts of the config that interest you and makes sense for your project.<br>
This config is **highly** opinionated, make sure to meet the [hard requirements](#hard-requirements) in your project.

## Techs

- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Lodash](https://lodash.com/) (*optional*)
- [Playwright](https://playwright.dev/) (*optional*)

## Requirements
 
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

## Eslint plugins 

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

## Roadmap

I plan to transform this into an actual npm package, once Eslint fully rolls out the new "Flat Config" system.

## Acknowledgments

For some of this config i partially used as a base [eslint-config-red](https://github.com/GrosSacASac/JavaScript-Set-Up/blob/master/js/red-javascript-style-guide/index.js).