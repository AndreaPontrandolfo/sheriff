---
sidebar_position: 2
description: You probably need this too
---

# Recommendations

- [Node >=20](https://nodejs.org/en/)
- [VScode](https://code.visualstudio.com/)
- [VScode eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [VScode prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- Either `strict: true` or at least `strictNullChecks: true` in `tsconfig`. Some `@typescript/eslint` rules requires `strictNullChecks` turned on. This shouldn't be a problem because Sheriff is meant to be used with `strict` turned on anyway
