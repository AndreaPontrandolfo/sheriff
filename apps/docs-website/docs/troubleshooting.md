---
sidebar_position: 20
---

# 🩹 Troubleshooting

## The command `yarn create @sherifforg/config` fails when using yarn

Depending on the context and under specific conditions, the setup command may fail to install the dependencies when using `yarn`.<br />
If that happens to you, you can install them yourself. The `yarn create @sherifforg/config` command should tell you the correct command for you to run so at the end of the process. If, for some reason, that does not happen, refer to the [manual setup instructions](./setup/manual-setup.mdx).

Alternatively, consider switching your package manager to [pnpm](https://pnpm.io/).

## I'm using Next.js and Sheriff’s rules doesn't seem to apply

In a Next.js project, you shouldn't follow any of Next.js’ ESLint instructions, including the usage of `next lint`. Just use the standard ESlint CLI (`eslint`).

For more information, refer to the [Next.js compatibility documentation](./faq.md#is-sheriff-compatible-with-x).

## My editor feels slow

Make sure to read the appropriate docs [here](./performance-considerations.mdx).
