---
title: Troubleshooting
description: Having unexpected issues? Checkout this section
icon: MdTroubleshoot
---

## The Scaffolder fails when using yarn

Depending on the context and under specific conditions, the [Scaffolder](/docs/cli-usage/scaffolder) may fail to install the dependencies when using `yarn`. <br />
In this case you can simply install them yourself. The Scaffolder should spit out the correct command prompt for you to do so at the end of the process. If that doesn't happen, refer to the [manual setup instructions](./setup/manual-setup.mdx).

Alternatively, consider switching package manager to [pnpm](https://pnpm.io/).

## I'm using Nextjs and the Sheriff rules doesn't seem to apply

In a Nextjs project, you shouldn't follow any of Nextjs' ESLint instructions, including the usage of the command `next lint`. Just use the basic ESlint command `eslint`.

Refer to the [Nextjs compatibility documentation](./faq.md#is-sheriff-compatible-with-x).

## My editor feels slow

Consult the [performance tips](./performance-tips.mdx) page.
