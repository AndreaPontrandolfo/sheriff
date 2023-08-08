---
sidebar_position: 2
---

# Manual setup

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

2. Create a `eslint.config.js` file at the root of your project and copy/paste the contents of the following snippet of code:

   ```js
   // eslint.config.js

   import sheriff from 'eslint-config-sheriff';
   import { defineFlatConfig } from 'eslint-define-config';

   const sheriffOptions = {
     react: false,
     next: false,
     lodash: false,
     playwright: false,
     jest: false,
     vitest: false,
   };

   export default defineFlatConfig([...sheriff(sheriffOptions)]);
   ```

   or, if you already have a `eslint.config.js` in your project, just append Sheriff to the configs array, like this:

   ```js
   // eslint.config.js

   import sheriff from 'eslint-config-sheriff'; // add this
   import { defineFlatConfig } from 'eslint-define-config'; // add this
   // my other imports...

   // add this
   const sheriffOptions = {
     react: false,
     next: false,
     lodash: false,
     playwright: false,
     jest: false,
     vitest: false,
   };

   export default [
     ...sheriff(sheriffOptions), // add this
     // my other configurations...
   ];
   ```

3. [Configure Sheriff](#configuration) (_optional_)
4. [Setup prettier](#prettier-support) (_optional_)
5. [Setup VSCode support](#vscode-support) (_optional_)

:::caution

Sheriff is based on the [new format of Eslint configs](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new). You cannot extend Sheriff from an [old config format](https://eslint.org/docs/latest/user-guide/configuring/configuration-files), it wouldn't work.

:::
