---
sidebar_position: 2
description: DIY
---

# Manual setup

Follow these steps:

1. Install the package from [npm](https://www.npmjs.com/package/eslint-config-sheriff).

   ```bash npm2yarn
   npm install -D eslint-config-sheriff
   ```

2. Create a `eslint.config.js` file at the root of your project and copy/paste the contents of the following snippet of code:

   ```js title="eslint.config.js"
   import sheriff from "eslint-config-sheriff";
   import { defineFlatConfig } from "eslint-define-config";

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

   ```js title="eslint.config.js"
   // highlight-next-line
   import sheriff from "eslint-config-sheriff"; // add this
   // highlight-next-line
   import { defineFlatConfig } from "eslint-define-config"; // add this
   // my other imports...

   // highlight-start
   // add this
   const sheriffOptions = {
     react: false,
     next: false,
     lodash: false,
     playwright: false,
     jest: false,
     vitest: false,
   };
   // highlight-end

   export default [
     // highlight-next-line
     ...sheriff(sheriffOptions), // add this
     // my other configurations...
   ];
   ```

3. [Configure Sheriff](../configuration.md) (_optional_)
4. [Setup prettier](../prettier-support.md#setup) (_optional_)
5. [Setup VSCode support](../vscode-support.md) (_optional_)

:::caution

Sheriff is based on the [new format of ESLint configs](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new). You cannot extend Sheriff from an [old config format](https://eslint.org/docs/latest/user-guide/configuring/configuration-files), it wouldn't work.

:::
