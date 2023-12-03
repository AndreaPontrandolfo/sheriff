---
sidebar_position: 2
description: 🎯 What line of reasoning drives Sheriff development
---

# Criteria

This library is very opinionated, but it's for the better. A lot of decisions were taken so you don't have to.<br />
You can now quickstart static analysis in all your Typescript projects with ease. <br />
Just type `npx create-sheriff-config` in a CLI and you are good to go.

Easiness of use without compromises is the top priority of Sheriff. The basic principle behind many design decisions of Sheriff is to require as less inputs from the user as possible. <br />
You can think of Sheriff like `prettier` or `create-react-app`. It's a tool that comes battery-packed with optimal defaults. It removes configuration decisions from the equation, so you or your team can focus on developing the actual product.<br />
And if you don't like something, you can easily override it, and just as easily you can extend it. See: [configuration](../configuration.mdx).

This config is particularly useful for big teams with developers of various skill levels.<br />
Sheriff was made to prevent all kind of mistakes and to align the team on the same playing field. It is battle-tested in real-world scenarios and shines especially in such.<br />
Also, Sheriff target pretty much everybody. Junior developers can learn a lot by using it, and Lead developers can save a lot of time on configuration and maintenance.

Sheriff doesn't have the goal to include every single ESLint plugin in existance. The ESLint plugins that qualify for inclusion in Sheriff are usually the ones that would benefit the community the most and that would be tricky to manually integrate with the rest of the config.
