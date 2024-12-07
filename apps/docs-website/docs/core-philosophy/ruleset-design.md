---
sidebar_position: 3
description: 📐 What opinions should you expect from Sheriff
---

# Ruleset design

Sheriff doesn’t offer “recommended” or “strict” presets.
This config contains a predefined set of rules meant to act as guidelines for a functional-light programming style.

Sheriff tries to be as faithful to JavaScript as possible,
and views TypeScript as a tool to enhance the capabilities that JavaScript already has.
Because of this, Sheriff discourages TypeScript-only features, like enums and overloads
(and classes, and decorators by extension, even though they also landed in ECMAScript).

If you just dislike some rules, you can disable them on a case-by-case basis.<br />
If you want to adopt a more OOP programming style, or if you feel like the config is too strict, you can disable everything that bothers you.

If you decide to adopt this config, you should try to trust it and let it do its thing.<br />
If you end up fighting it all the way, you may wish to reconsider adopting it.

There are some pretty hot takes in this config.
Learn more in the [stylistic choices](./stylistic-choices.md) section.
There are _even more_ hot-takes in the [FAQs](../faq.md), if you are into that 🌶️.
