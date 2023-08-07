---
sidebar_position: 9
---

# Prettier support

Sheriff tries to incorporate [prettier](https://prettier.io/) out-of-the-box.<br />
The `create-sheriff-config` command will spin up for you a default `.prettierrc.json` configuration. You _can_ modify it if you need to, but [it is discouraged](https://prettier.io/docs/en/option-philosophy.html). Act with caution.<br />
If you don't use the `create-sheriff-config` command, you will have to provide a prettier config yourself. Also don't forget the [.prettierignore file](https://prettier.io/docs/en/ignore.html).<br />
If you already have a prettier config in your project, the `create-sheriff-config` command won't create a new prettier config, nor will attempt to modify the existing one.<br />
Sheriff comes with the rules of [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) out-of-the-box.<br />
By design, Sheriff **doesn't** incorporate [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier). Its use is discouraged by the prettier team itself, [as it just slows down your editor](https://prettier.io/docs/en/integrating-with-linters.html#notes).<br />
Instead, for your local editing experience, it's recommended to install a [editor extension](https://prettier.io/docs/en/editors.html).<br />
If you want to enforce Prettier at pre-commit stage, see the [official docs](https://prettier.io/docs/en/option-philosophy.html).<br />
To enforce Prettier in CI, see the [CLI docs](https://prettier.io/docs/en/cli.html).
