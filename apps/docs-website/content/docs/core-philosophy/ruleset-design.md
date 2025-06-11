---
title: Ruleset design
description: What opinions should you expect from Sheriff
---

## No complex presets

Sheriff doesn't offer "recommended" or "strict" presets. This config contains a predefined set of rules meant to act as guidelines for a **functional-light** programming style.

## No esoteric Typescript-only features

Sheriff tries to be as faithful to Javascript as possible and conceives Typescript as a tool to enhance the capabilities that Javascript already has. Because of this, Sheriff discourages typescript-only features, like enums and overloads (and classes, and decorators by extensions, even though they also landed in Ecmascript).

## Minimal formatting opinions

Unlike other ESLint configurations, Sheriff tries to be as unopinionated as possible about formatting, to be aligned with the community philosophy on the matter ([1](https://eslint.org/blog/2023/10/deprecating-formatting-rules), [2](https://typescript-eslint.io/blog/deprecating-formatting-rules)).

Sheriff encourage you to [bring your own formatting tool](../prettier-support.md#other-formatting-options).

The only formatting rules that Sheriff currently enforces are `@stylistic/padding-line-between-statements` and `curly`.

## Opinionated but flexible

If you just don't like some rules you can disable them on a case-by-case basis.<br />
If you want to adopt a more OOP programming style, or if you feel like the config is too strict, you can disable everything that bothers you.

But if you decide to adopt this config, you should trust it and let it do it's thing. <br />
If you end up fighting it all the way, maybe reconsider about whether or not adopting it.

There are some pretty big hot-takes in this config. Learn more in the [Stylistic choices](./stylistic-choices.mdx) explanations section.

Also in the [FAQs](../faq.md) there are _even more_ hot-takes, if you are into that 🌶️.
