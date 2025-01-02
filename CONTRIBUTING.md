# Contributing to Sheriff

First off, thank you for considering contributing to Sheriff! Your support and involvement are crucial to the success and improvement of this project. Sheriff is a community-driven effort, and we value contributions of all kinds.

## Contribution Guidelines

Sheriff thrives on community input. If you have ideas for new rules to implement or tweaks to existing ones, we encourage you to share them!

Useful contributions include fixing bugs or inconsistencies, adding or proposing new features or improving documentation.

### Opening a new Issue

- **Check for duplicates**: Before opening a new issue, ensure that a similar issue does not already exist. If you find a similar issue, consider upvoting the issue or adding a comment to the existing issue instead.
- **Check the docs**: Before opening a new issue, ensure that the [documentation](https://www.eslint-config-sheriff.dev/) does not already cover the topic, especially the [troubleshooting section](https://www.eslint-config-sheriff.dev/docs/troubleshooting).
- **Be specific**: If you are reporting a bug there are various way to help us better understand the problem. Consider to do any of these:
  - providing a minimal reproducible example
  - list the steps to reproduce the issue
  - provide the error logs
- **Use Discussions for ideas**: If you wish to discuss open points or share ideas that do not translate well into actionable issues, please open a Discussion instead, under the appropriate **[Discussions](https://github.com/AndreaPontrandolfo/sheriff/discussions)** tab.
- **Follow the Code of Conduct**: By contributing, you agree to abide by the project’s [Code of Conduct](./CODE_OF_CONDUCT.md).

### Opening a new Pull Request

- **Contribute orientation**: if you want to contribute but don't know where to start, consider checking the [good first issue](https://github.com/AndreaPontrandolfo/sheriff/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) labeled issues. Alternatively, consider checking the [help wanted](https://github.com/AndreaPontrandolfo/sheriff/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) labeled issues.
- **Issues as pre-requirement policy**: Please ensure there is an open issue before creating a pull request. If an issue does not exist, you need to open one first. After this, the maintainers will discuss your proposed changes and provide feedback. If the issue is approved, you can proceed by creating a pull request. Approved issues will be marked with the green `approved` label. If an issue hasn't been approved yet (it still has the `triaging` label), and you create a pull request, it will be immediately declined.
- **Small and focused**: Keep your pull requests as small and as focused as possible. This will make it easier for maintainers to review and merge your changes.
- **Pass quality checks**: Pull requests will only be merged if they pass the quality checks performed by the `pnpm merge-checks` command.
- **Update documentation**: Update documentation to reflect your changes, if applicable.
- **Follow the Code of Conduct**: By contributing, you agree to abide by the project’s [Code of Conduct](./CODE_OF_CONDUCT.md).

## Development

### Requirements

- make sure Git is installed in your system
- make sure Nodejs 20.10.X is installed in your system
- make sure [Pnpm is installed](https://pnpm.io/installation) in your system. If you are not sure how to install it, use corepack:

  ```bash
  corepack enable
  ```

### Step-by-Step Guide

1. Start by forking this repository to your own GitHub account.
2. Clone your fork locally with:

   ```bash
   git clone https://github.com/<your-username>/sheriff.git
   ```

3. Install all required dependencies using:

   ```bash
   pnpm i
   ```

4. Create a new branch for your feature or fix:

   ```bash
   git checkout -b new-feature
   ```

5. Implement your changes in the codebase.

   - If you need to update the documentation website, you can run it locally with:

     ```bash
     pnpm dev:norebuild
     ```

     The website will be available at `http://localhost:3000`.

   - If you need test the CLI, you can run:

     ```bash
     pnpm playground
     ```

     or:

     ```bash
       pnpm playground:mimic-monorepo
     ```

6. Add a `changeset`:

   ```bash
   pnpm changeset
   ```

7. Write clear, concise commit messages. Make sure to follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification:

   ```bash
   git commit -am 'feat(context): added feature'
   ```

8. Push your branch to your fork:

   ```bash
   git push origin new-feature
   ```

9.

10. **Open a Pull Request**: Submit your changes by creating a pull request to the main repository.

Thank you for helping make Sheriff a better project for everyone!
