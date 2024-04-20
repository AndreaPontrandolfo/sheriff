/* eslint-disable react/no-array-index-key */

interface TableEntry {
  Project: string;
  FlatConfig: "✅" | "❌";
  Maintained: "✅" | "❌";
  Customizable: "✅" | "❌";
  "Rich Docs": "✅" | "❌";
  "Functional programming": "✅" | "❌";
  "Advanced ignores management": "✅" | "❌";
  "Learning curve": "😔" | "😐" | "😊";
  "Incremental adoption": "✅" | "❌";
  Typescript: "✅" | "❌";
  React: "✅" | "❌";
  Vue: "✅" | "❌";
  Solidjs: "✅" | "❌";
  Svelte: "✅" | "❌";
  GraphQL: "✅" | "❌";
  Unicorn: "✅" | "❌";
  Sonarjs: "✅" | "❌";
  JSDoc: "✅" | "❌";
  TSDoc: "✅" | "❌";
  Import: "✅" | "❌";
  Lodash: "✅" | "❌";
  Nextjs: "✅" | "❌";
  Jest: "✅" | "❌";
  Vitest: "✅" | "❌";
  "Testing-library": "✅" | "❌";
  Playwright: "✅" | "❌";
  Storybook: "✅" | "❌";
  Astro: "✅" | "❌";
}

const tableEntries: TableEntry[] = [
  {
    Project: "Sheriff",
    FlatConfig: "✅",
    Maintained: "✅",
    Customizable: "✅",
    "Rich Docs": "✅",
    "Functional programming": "✅",
    "Advanced ignores management": "✅",
    "Learning curve": "😊",
    "Incremental adoption": "✅",
    Typescript: "✅",
    React: "✅",
    Vue: "❌",
    Solidjs: "❌",
    Svelte: "❌",
    GraphQL: "❌",
    Unicorn: "✅",
    Sonarjs: "✅",
    JSDoc: "✅",
    TSDoc: "✅",
    Import: "✅",
    Lodash: "✅",
    Nextjs: "✅",
    Jest: "✅",
    Vitest: "✅",
    "Testing-library": "❌",
    Playwright: "✅",
    Storybook: "✅",
    Astro: "✅",
  },
  {
    Project: "eslint-config-airbnb-typescript",
    FlatConfig: "❌",
    Maintained: "✅",
    Customizable: "✅",
    "Rich Docs": "✅",
    "Functional programming": "❌",
    "Advanced ignores management": "❌",
    "Learning curve": "😐",
    "Incremental adoption": "❌",
    Typescript: "✅",
    React: "✅",
    Vue: "❌",
    Solidjs: "❌",
    Svelte: "❌",
    GraphQL: "❌",
    Unicorn: "❌",
    Sonarjs: "❌",
    JSDoc: "❌",
    TSDoc: "❌",
    Import: "✅",
    Lodash: "❌",
    Nextjs: "❌",
    Jest: "❌",
    Vitest: "❌",
    "Testing-library": "❌",
    Playwright: "❌",
    Storybook: "❌",
    Astro: "❌",
  },
  {
    Project: "@antfu/eslint-config",
    FlatConfig: "✅",
    Maintained: "✅",
    Customizable: "✅",
    "Rich Docs": "✅",
    "Functional programming": "❌",
    "Advanced ignores management": "✅",
    "Learning curve": "😊",
    "Incremental adoption": "❌",
    Typescript: "✅",
    React: "✅",
    Vue: "✅",
    Solidjs: "✅",
    Svelte: "✅",
    GraphQL: "❌",
    Unicorn: "✅",
    Sonarjs: "❌",
    JSDoc: "✅",
    TSDoc: "❌",
    Import: "✅",
    Lodash: "❌",
    Nextjs: "✅",
    Jest: "❌",
    Vitest: "✅",
    "Testing-library": "❌",
    Playwright: "❌",
    Storybook: "❌",
    Astro: "✅",
  },
  {
    Project: "XO",
    FlatConfig: "❌",
    Maintained: "✅",
    Customizable: "✅",
    "Rich Docs": "✅",
    "Functional programming": "❌",
    "Advanced ignores management": "✅",
    "Learning curve": "😐",
    "Incremental adoption": "❌",
    Typescript: "✅",
    React: "✅",
    Vue: "✅",
    Solidjs: "❌",
    Svelte: "❌",
    GraphQL: "❌",
    Unicorn: "✅",
    Sonarjs: "❌",
    JSDoc: "❌",
    TSDoc: "❌",
    Import: "✅",
    Lodash: "❌",
    Nextjs: "❌",
    Jest: "❌",
    Vitest: "❌",
    "Testing-library": "❌",
    Playwright: "❌",
    Storybook: "❌",
    Astro: "❌",
  },
  {
    Project: "eslint-kit",
    FlatConfig: "❌",
    Maintained: "✅",
    Customizable: "✅",
    "Rich Docs": "✅",
    "Functional programming": "❌",
    "Advanced ignores management": "❌",
    "Learning curve": "😔",
    "Incremental adoption": "✅",
    Typescript: "✅",
    React: "✅",
    Vue: "✅",
    Solidjs: "✅",
    Svelte: "✅",
    GraphQL: "❌",
    Unicorn: "✅",
    Sonarjs: "❌",
    JSDoc: "❌",
    TSDoc: "❌",
    Import: "✅",
    Lodash: "❌",
    Nextjs: "✅",
    Jest: "❌",
    Vitest: "❌",
    "Testing-library": "❌",
    Playwright: "❌",
    Storybook: "❌",
    Astro: "❌",
  },
  {
    Project: "eslint-config-galex",
    FlatConfig: "❌",
    Maintained: "❌",
    Customizable: "✅",
    "Rich Docs": "✅",
    "Functional programming": "❌",
    "Advanced ignores management": "❌",
    "Learning curve": "😔",
    "Incremental adoption": "✅",
    Typescript: "✅",
    React: "✅",
    Vue: "❌",
    Solidjs: "❌",
    Svelte: "❌",
    GraphQL: "❌",
    Unicorn: "✅",
    Sonarjs: "✅",
    JSDoc: "❌",
    TSDoc: "❌",
    Import: "✅",
    Lodash: "❌",
    Nextjs: "✅",
    Jest: "✅",
    Vitest: "❌",
    "Testing-library": "✅",
    Playwright: "❌",
    Storybook: "✅",
    Astro: "❌",
  },
  {
    Project: "eslint-config-hardcore",
    FlatConfig: "❌",
    Maintained: "✅",
    Customizable: "✅",
    "Rich Docs": "✅",
    "Functional programming": "✅",
    "Advanced ignores management": "❌",
    "Learning curve": "😐",
    "Incremental adoption": "❌",
    Typescript: "✅",
    React: "✅",
    Vue: "✅",
    Solidjs: "❌",
    Svelte: "❌",
    GraphQL: "❌",
    Unicorn: "✅",
    Sonarjs: "✅",
    JSDoc: "❌",
    TSDoc: "❌",
    Import: "✅",
    Lodash: "❌",
    Nextjs: "❌",
    Jest: "✅",
    Vitest: "❌",
    "Testing-library": "✅",
    Playwright: "❌",
    Storybook: "✅",
    Astro: "❌",
  },
];

export const ComparisonTable = (): JSX.Element => {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(tableEntries[0]).map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableEntries.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {Object.values(row).map((value, colIndex) => (
                <td key={colIndex}>{value}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
