---
sidebar_position: 4
description: 🔥 Hot takes!
---

# Stylistic choices

## No classes

- [red-javascript-style-guide - why disallow class](https://github.com/GrosSacASac/JavaScript-Set-Up/blob/master/js/red-javascript-style-guide/why-disallow-class.md)
- Sheriff tries to promote a “light functional” approach.
  JavaScript classes don’t fit such design.

## No reduce

- [Is reduce() bad? - HTTP 203](https://www.youtube.com/watch?v=qaGjS7-qWzg)
- [Why I don't like reduce | TkDodo's Blog](https://tkdodo.eu/blog/why-i-dont-like-reduce)

:::info

Sheriff actually allows using `reduce` for basic operations like summing up numbers.
Only complex operations are banned.

:::

## No enums

- [eslint-plugin-typescript-enum - README](https://github.com/shian15810/eslint-plugin-typescript-enum#readme)
- [Enums considered harmful](https://www.youtube.com/watch?v=jjMbPt_H3RQ)
- [How to use TypeScript Enums and why not to, maybe](https://www.youtube.com/watch?v=pWPClHdcvVg)
- [Let's Talk About TypeScript's Worst Feature](https://www.youtube.com/watch?v=Anu8vHXsavo)
- [Effective TypeScript](https://effectivetypescript.com) explicitly warn against this, saying that `enums` belong to a legacy design choice of TypeScript.

## No overloads

- Generics supersede them.
  Overloads are a legacy feature that was made available in TypeScript before generics were a thing.
  Overloads are mostly a C#/Angular leftover.
  Simply put: there are no problems that function overloads solve better than generics.
- Overloads clutter the code and make it more verbose and harder to read, which increase the cognitive overload
- Overloads clutter IDE tooltips.
- Overloads force you to write non-standard JavaScript syntax.
- Overloads enable flexibility, which also enables your team to write inconsistent code—exactly the problem ESLint is designed to solve.
- [Effective TypeScript](https://effectivetypescript.com) explicitly warns against this, stating that conditional types are preferable.
