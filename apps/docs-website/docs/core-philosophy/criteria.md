---
sidebar_position: 2
description: 🎯 What line of reasoning drives Sheriff development
---

# Criteria

This library is opinionated, but for the better.
Many decisions are already made, so that you don’t have to yourself.<br />
You can now quickstart static analysis in all your TypeScript projects with ease.<br />
Just type `npm init @sherifforg/config` in a CLI and you are good to go.

Ease of use without compromises is the top priority of Sheriff.
The basic principle behind Sheriff’s many design decisions to that of
requiring as little input from the user as possible.<br />
You can think of Sheriff like Prettier or `create-react-app`.
It intentionally comes battery-packed with optimal defaults.
It removes configuration decisions from the equation,
so you or your team can focus on developing the actual product.<br />
If you disagree with something, you can override it, and you can also extend it to enforce me.
See: [configuration](../configuration.mdx).

This config is particularly useful for big teams with developers of various skill levels.<br />
Sheriff was made to prevent all kinds of mistakes and to align teams stylistically.
It is battle-tested in real-world scenarios and shines especially in them.<br />
Sheriff targets pretty much everybody.
Junior developers can learn a lot by using it,
and lead developers can save a lot of time on configuration and maintenance.

Unlike some configs, Sheriff does not aim to include every single ESLint plugin in existence.
The ESLint plugins that qualify for inclusion in Sheriff are usually the ones that would benefit the community the most
and that would be tricky to manually integrate with the rest of the config.
