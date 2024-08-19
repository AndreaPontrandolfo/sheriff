---
sidebar_position: 3
description: 📐 What opinions should you expect from Sheriff
---

# Ruleset design

Sheriff don’t offer a “recommended” or “strict” config. This config contains a predefined set of rules meant to act as guidelines for a functional-light programming style.<br />

Sheriff tries to be as faithful to Javascript as possible and conceives Typescript as a tool to enhance the capabilities that Javascript already has. Becuase of this, Sheriff discourages typescript-only features, like enums and overloads (and classes, and decorators by extensions, even though they also landed in Ecmascript).

If you just don’t like some rules you can disable them on a case-by-case basis.<br />
If you want to adopt a more OOP programming style, or if you feel like the config is too strict, you can disable everything that bothers you.

But if you decide to adopt this config, you should trust it and let it do it’s thing. <br />
If you end up fighting it all the way, maybe reconsider about whether or not adopting it.
There are some pretty big hot-takes in this config. Learn more in the [Stylistic choices](./stylistic-choices.md) explanations section. Also in the [FAQs](../faq.md) there are _even more_ hot-takes, if you are into that 🌶️.
