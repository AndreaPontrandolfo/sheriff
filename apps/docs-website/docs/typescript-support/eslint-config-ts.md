---
sidebar_position: 1
---

# eslint.config.ts

The `eslint.config.ts` file is a Typescript-enabled version of the `eslint.config.js` file.

To make this feature possible, Sheriff leverage [eslint-ts-patch](https://github.com/antfu/eslint-ts-patch) under the hood.<br/>
To learn more, consult the [official documentation of eslint-ts-patch](https://github.com/antfu/eslint-ts-patch).

If you go through the [automatic setup](../setup/automatic-setup.mdx) of Sheriff, at some point the wizard will ask you if you want to setup Sheriff with a `eslint.config.ts` file instead of the default `eslint.config.js` file. Choose `yes` if you want to have a typesafe ESLint configuration file.

Instead, if you choose the manual installation, follow the instruction in the [manual setup page](../setup/manual-setup.mdx).
