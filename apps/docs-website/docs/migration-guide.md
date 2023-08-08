---
sidebar_position: 13
---

# ♻ Migration guide

If you are setting up Sheriff in an already established codebase, follow these steps:

1. Start by running the `create-sheriff-config` command and follow the advices that it prints in the console.
2. Make sure that the only eslint config file present in the whole project is the `eslint.config.js`.
3. If you want to keep your existing custom rules on-top of Sheriff, move them to the `eslint.config.js`, after the `sheriff` config. Refer to the [configuration instructions](#configuration).
4. Make sure to uninstall all the packages that Sheriff already incorporates out-of-the-box. [Here](#eslint-plugins) is the list.
5. In massive codebases it can be troublesome to adapt to all these rules all at once. It is preferable to progressively fix the errors at your own pace, possibly with atomic commits. You can achieve this by leveraging 2 techniques:

   - open the `eslint.config.js` file and add a key `files` in the `sheriffOptions` object. The value accepts an array of filepaths, dictated by [minimatch](https://github.com/isaacs/minimatch) syntax. Only the matching files found in this array will be linted. See example below:

     ```js
     // eslint.config.js

     import sheriff from 'eslint-config-sheriff';
     import { defineFlatConfig } from 'eslint-define-config';

     const sheriffOptions = {
       files: ['./src/**/*'], // 👉 Only the files in the src directory will be linted.
       react: false,
       next: false,
       lodash: false,
       playwright: false,
       jest: false,
       vitest: false,
     };

     export default defineFlatConfig([...sheriff(sheriffOptions)]);
     ```

     :::info

     By default, the `files` key is absent in the object and every js/ts file will be linted. Use this only if you want to specifically lint just a subsection of the codebase.

     :::

   - use [eslint-interactive](https://github.com/mizdra/eslint-interactive).
