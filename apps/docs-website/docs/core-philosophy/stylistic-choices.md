---
sidebar_position: 4
description: 🔥 Hot takes!
---

# Stylistic choices

- no classes
  - https://github.com/GrosSacASac/JavaScript-Set-Up/blob/master/js/red-javascript-style-guide/why-disallow-class.md
  - Sheriff is trying to promote a "light functional" approach. Javascript classes don't fit such design.
- no reduce
  - https://www.youtube.com/watch?v=qaGjS7-qWzg
  - https://tkdodo.eu/blog/why-i-dont-like-reduce
- no enums
  - https://github.com/shian15810/eslint-plugin-typescript-enum/blob/main/README.md
  - https://www.youtube.com/watch?v=jjMbPt_H3RQ
  - https://www.youtube.com/watch?v=pWPClHdcvVg
  - https://www.youtube.com/watch?v=Anu8vHXsavo
- no overloads
  - generics supersedes them. overloads are a legacy feature that was made available in Typescript before generics were a thing. Overloads are mostly a C#/Angular leftover. Simply put: there are no problems that function overloads solve better than generics.
  - overloads clutter the code and make it more verbose and harder to read, which increase the cognitive overload.
  - overloads clutter the VScode tooltips.
  - overloads force you to write non-standard javascript syntax.
  - overloads are a bad practice. The flexibility that they enable also enable your team to write inconsistent code. Which is exactly the problem that Eslint is designed to solve.
