---
sidebar_position: 15
---

# 🧐 Prior art

## Why yet another Eslint config?

Through the years I came across a few ESLint configurations (have a look [here](./prior-art.md#related-projects) or [here](https://github.com/dustinspecker/awesome-eslint#configs)).<br />
None of these projects share the same goals of Sheriff. Sheriff has a particular vision. The main reasons that led to it's creation are:

- easy to setup and use (thank to `create-sheriff-config`)
- easy to customize (thanks to the `FlatConfig` format)
- sensible defaults, based on years of real world experience in production scenarios

After exploring every possible alternative, i came to the conclusion that none of the other options where close to what i needed for my projects and everyday use. That’s why i still opted for making Sheriff.

## Related projects

- [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)
- [xo](https://github.com/xojs/xo)
- [eslint-kit](https://github.com/eslint-kit/eslint-kit)
- [eslint-config-galex](https://github.com/ljosberinn/eslint-config-galex)
- [eslint-config-hardcore](https://github.com/EvgenyOrekhov/eslint-config-hardcore)
- [eslint-config-everywhere](https://github.com/locol23/eslint-config-everywhere)
- [eslint-plugin-canonical](https://github.com/gajus/eslint-plugin-canonical)
- [eslint-prettier-typescript-config](https://github.com/moia-oss/eslint-prettier-typescript-config)

## Comparisons

The main technical difference between Sheriff and the other projects is that Sheriff is updated to the most recent version of ESLint and supports the new `FlatConfig` instead of relying on weird hacks using the [@rushstack/eslint-patch](https://www.npmjs.com/package/@rushstack/eslint-patch). Because of the technical limitation imposed by this hack, these configs are harder to work with, at multiple levels.

Another key difference is that the design of most of these configs seems to revolve around the idea of stuffing as much rules as possible into the config, regardless of the quality of the experience and the goal of the project.<br />
Sheriff instead was [shaped around solid principles](./core-philosophy/criteria.md) and only includes the rules that let it achieve its goals.

There are of course other differences as well, but you can get an idea for yourself by reading their READMEs.
