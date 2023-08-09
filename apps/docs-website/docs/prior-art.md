---
sidebar_position: 12
---

# 🧐 Prior art

## Related projects

- [eslint-config-galex](https://github.com/ljosberinn/eslint-config-galex)
- [eslint-kit](https://github.com/eslint-kit/eslint-kit)
- [eslint-config-everywhere](https://github.com/locol23/eslint-config-everywhere)
- [xo](https://github.com/xojs/xo)
- [eslint-plugin-canonical](https://github.com/gajus/eslint-plugin-canonical)
- [eslint-prettier-typescript-config](https://github.com/moia-oss/eslint-prettier-typescript-config)
- [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)

## Comparisons

The main technical difference between Sheriff and the other projects is that Sheriff is updated to the most recent version of Eslint and supports the new `FlatConfig` instead of relying on weird hacks using the [@rushstack/eslint-patch](https://www.npmjs.com/package/@rushstack/eslint-patch). Because of the technical limitation imposed by this hack, these configs are harder to work with, at multiple levels.

Another key difference is that the design of most of these configs seems to revolve around the idea of stuffing as much rules as possible into the config, regardless of the quality of the experience and the goal of the project.<br />
Sheriff instead was [shaped around solid principles](./category/-core-philosophy) and only includes the rules that let it achieve its goals.

There are of course other differences as well, but you can get an idea for yourself by reading their READMEs.
