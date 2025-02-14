---
sidebar_position: 4
description: 🔥 Hot takes!
---

# Stylistic choices

## No classes

- [red-javascript-style-guide - Why disallow the class keyword?](https://github.com/GrosSacASac/JavaScript-Set-Up/blob/master/js/red-javascript-style-guide/why-disallow-class.md)
- Sheriff tries to promote a **lightly functional** approach. Classes don’t fit such a design

## No reduce

- [Is reduce() bad? - HTTP 203](https://www.youtube.com/watch?v=qaGjS7-qWzg)
- [Why I don't like reduce | TkDodo's Blog](https://tkdodo.eu/blog/why-i-dont-like-reduce)

:::info

Sheriff actually allows using `reduce` for basic operations like summing up numbers.
Only complex operations are banned.

:::

## No enums

- [eslint-plugin-typescript-enum](https://github.com/shian15810/eslint-plugin-typescript-enum#readme)
- [Enums considered harmful](https://www.youtube.com/watch?v=jjMbPt_H3RQ)
- [How to use TypeScript Enums and why not to, maybe](https://www.youtube.com/watch?v=pWPClHdcvVg)
- [Let's Talk About TypeScript's Worst Feature](https://www.youtube.com/watch?v=Anu8vHXsavo)
- [Effective TypeScript](https://effectivetypescript.com) explicitly warns against them, stating that Enums are a legacy design choice of TypeScript

## No overloads

Overloads…

- are superseded by generics. Overloads are a legacy, C#/Angular leftover that was made available in TypeScript before generics were a thing. There are no problems that overloads solve better than generics
- clutter the code and make it more verbose and harder to read, which increase the cognitive overload
- clutter IDE tooltips
- force you to write non-standard JavaScript syntax
- enable flexibility. In other words, they enable your team to write inconsistent code—exactly the problem that ESLint is designed to solve
- are explicitly warned against in [Effective TypeScript](https://effectivetypescript.com), which (quite correctly) claims that conditional types are preferable in every way
