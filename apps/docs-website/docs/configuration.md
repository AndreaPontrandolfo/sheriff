---
sidebar_position: 8
---

# 🧠 Configuration

## Base options

- The `eslint-config-sheriff` package exports a `sheriff` function.<br />
  You can configure Sheriff as desired using a simple javascript object as the first input parameter of the `sheriff` function.<br />
  Every config option can be set on/off (you just pass them a boolean value). As they are all opt-in, they are all disabled by default. If you bootstrapped the config with `create-sheriff-config` some of these values will be inferred automatically from your project.

  ```js
  // eslint.config.js

  import sheriff from 'eslint-config-sheriff';
  import { defineFlatConfig } from 'eslint-define-config';

  // 👇 Sheriff configuration object
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

- You can override any Sheriff rule as desired in the `eslint.config.js` file.<br />
  For example, let's say you want to disable a Sheriff rule, like `import/first`:

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

  export default defineFlatConfig([
    ...sheriff(sheriffOptions),
    {
      rules: {
        'import/first': 0, // 👉 'import/first' is now disabled everywhere.
      },
    },
  ]);
  ```

  Likewise, let's say you want to enable a new rule:

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

  export default defineFlatConfig([
    ...sheriff(sheriffOptions),
    {
      rules: {
        'import/first': 2, // 👉 'import/first' is now enabled everywhere.
      },
    },
  ]);
  ```

  This is just the standard behavior of the new configuration system of Eslint, which I'm illustrating here for your convenience. Sheriff doesn't alter this in any way.<br />
  For more in-depth information, refer to the [official docs](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new).

## Extra configuration options

The upcoming configuration options are kind of hidden options, tailored to serve only a niche group of users and designed to address specific use cases. **Use these only if you end up needing them**.

### "files" option

Covered here: [♻ Migration guide](./migration-guide.md)

### "customTSConfigPath" option

If you have multiple `tsconfig.json` files in your project (like `tsconfig.json`, `tsconfig.eslint.json`, `tsconfig.node.json`, etc...) you can specify which config Sheriff will pickup with the `customTSConfigPath` option.
You can pass the path to it as a string in the `sheriffOptions` object. Example:

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
  customTSConfigPath: './tsconfig.eslint.json',
};

export default defineFlatConfig([...sheriff(sheriffOptions)]);
```

### "noRestrictedSyntaxOverride" option

Eslint has a very useful rule called `no-restricted-syntax`. It accepts an array of objects. Each object represent a specific Javascript syntax feature that you may want to opt-out.
Sheriff already come with a preconfigured `no-restricted-syntax` entry. However, if you need to customize it, you have a few options:

- override the rule in full: you provide your own `no-restricted-syntax` rule. You can do this as normal, appending the rule to the `FlatConfig` array.
- extend the Sheriff version of `no-restricted-syntax`: use the key `noRestrictedSyntaxOverride.adjuncts` in the Sheriff configuration object. Example:

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
    noRestrictedSyntaxOverride: {
      adjuncts: [
        {
          selector: 'LabeledStatement',
          message:
            'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        },
        {
          selector: 'ForInStatement',
          message:
            'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        },
        {
          selector: "Identifier[name='Reflect']",
          message:
            'Avoid the Reflect API. It is a very low-level feature that has only rare and specific use-cases if building complex and hacky libraries. There is no need to use this feature for any kind of normal development.',
        },
      ],
    },
  };

  export default defineFlatConfig([...sheriff(sheriffOptions)]);
  ```

- shrink the Sheriff version of `no-restricted-syntax`: use the key `noRestrictedSyntaxOverride.allows` in the Sheriff configuration object. Example:

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
    noRestrictedSyntaxOverride: {
      allows: [
        'LabeledStatement',
        'ForInStatement',
        "Identifier[name='Reflect']",
      ],
    },
  };

  export default defineFlatConfig([...sheriff(sheriffOptions)]);
  ```
