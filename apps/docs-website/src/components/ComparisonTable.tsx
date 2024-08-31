import type { JSX } from 'react';

interface TableEntry {
  FlatConfig: '✅' | '❌';
  Maintained: '✅' | '❌';
  Customizable: '✅' | '❌';
  'Rich Docs': '✅' | '❌';
  'Functional programming': '✅' | '❌';
  'Advanced ignores management': '✅' | '❌';
  'Learning curve': '😔' | '😐' | '😊';
  'Incremental adoption': '✅' | '❌';
  'Typesafe config': '✅' | '❌';
  Typescript: '✅' | '❌';
  React: '✅' | '❌';
  Vue: '✅' | '❌';
  Solidjs: '✅' | '❌';
  Svelte: '✅' | '❌';
  GraphQL: '✅' | '❌';
  Unicorn: '✅' | '❌';
  Sonarjs: '✅' | '❌';
  JSDoc: '✅' | '❌';
  TSDoc: '✅' | '❌';
  Import: '✅' | '❌';
  Lodash: '✅' | '❌';
  Nextjs: '✅' | '❌';
  Jest: '✅' | '❌';
  Vitest: '✅' | '❌';
  'Testing-library': '✅' | '❌';
  Playwright: '✅' | '❌';
  Storybook: '✅' | '❌';
  Astro: '✅' | '❌';
}

interface EntriesTable {
  sheriff: TableEntry;
  'eslint-config-airbnb': TableEntry;
  standard: TableEntry;
  'eslint-config-standard': TableEntry;
  '@antfu/eslint-config': TableEntry;
  XO: TableEntry;
  'eslint-config-canonical': TableEntry;
  'eslint-kit': TableEntry;
  'eslint-config-galex': TableEntry;
  'eslint-config-hardcore': TableEntry;
}

const entriesTable: EntriesTable = {
  sheriff: {
    FlatConfig: '✅',
    Maintained: '✅',
    Customizable: '✅',
    'Rich Docs': '✅',
    'Functional programming': '✅',
    'Advanced ignores management': '✅',
    'Learning curve': '😊',
    'Incremental adoption': '✅',
    'Typesafe config': '✅',
    Typescript: '✅',
    React: '✅',
    Vue: '❌',
    Solidjs: '❌',
    Svelte: '❌',
    GraphQL: '❌',
    Unicorn: '✅',
    Sonarjs: '✅',
    JSDoc: '✅',
    TSDoc: '✅',
    Import: '✅',
    Lodash: '✅',
    Nextjs: '✅',
    Jest: '✅',
    Vitest: '✅',
    'Testing-library': '❌',
    Playwright: '✅',
    Storybook: '✅',
    Astro: '✅',
  },
  'eslint-config-airbnb': {
    FlatConfig: '❌',
    Maintained: '❌',
    Customizable: '✅',
    'Rich Docs': '✅',
    'Functional programming': '❌',
    'Advanced ignores management': '❌',
    'Learning curve': '😐',
    'Incremental adoption': '❌',
    'Typesafe config': '❌',
    Typescript: '❌',
    React: '✅',
    Vue: '❌',
    Solidjs: '❌',
    Svelte: '❌',
    GraphQL: '❌',
    Unicorn: '❌',
    Sonarjs: '❌',
    JSDoc: '❌',
    TSDoc: '❌',
    Import: '✅',
    Lodash: '❌',
    Nextjs: '❌',
    Jest: '❌',
    Vitest: '❌',
    'Testing-library': '❌',
    Playwright: '❌',
    Storybook: '❌',
    Astro: '❌',
  },
  standard: {
    FlatConfig: '❌',
    Maintained: '❌',
    Customizable: '❌',
    'Rich Docs': '✅',
    'Functional programming': '❌',
    'Advanced ignores management': '❌',
    'Learning curve': '😔',
    'Incremental adoption': '❌',
    'Typesafe config': '❌',
    Typescript: '❌',
    React: '❌',
    Vue: '❌',
    Solidjs: '❌',
    Svelte: '❌',
    GraphQL: '❌',
    Unicorn: '❌',
    Sonarjs: '❌',
    JSDoc: '❌',
    TSDoc: '❌',
    Import: '✅',
    Lodash: '❌',
    Nextjs: '❌',
    Jest: '❌',
    Vitest: '❌',
    'Testing-library': '❌',
    Playwright: '❌',
    Storybook: '❌',
    Astro: '❌',
  },
  'eslint-config-standard': {
    FlatConfig: '✅',
    Maintained: '❌',
    Customizable: '✅',
    'Rich Docs': '❌',
    'Functional programming': '❌',
    'Advanced ignores management': '❌',
    'Learning curve': '😐',
    'Incremental adoption': '❌',
    'Typesafe config': '❌',
    Typescript: '❌',
    React: '❌',
    Vue: '❌',
    Solidjs: '❌',
    Svelte: '❌',
    GraphQL: '❌',
    Unicorn: '❌',
    Sonarjs: '❌',
    JSDoc: '❌',
    TSDoc: '❌',
    Import: '✅',
    Lodash: '❌',
    Nextjs: '❌',
    Jest: '❌',
    Vitest: '❌',
    'Testing-library': '❌',
    Playwright: '❌',
    Storybook: '❌',
    Astro: '❌',
  },
  '@antfu/eslint-config': {
    FlatConfig: '✅',
    Maintained: '✅',
    Customizable: '✅',
    'Rich Docs': '✅',
    'Functional programming': '❌',
    'Advanced ignores management': '✅',
    'Learning curve': '😊',
    'Incremental adoption': '❌',
    'Typesafe config': '✅',
    Typescript: '✅',
    React: '✅',
    Vue: '✅',
    Solidjs: '✅',
    Svelte: '✅',
    GraphQL: '❌',
    Unicorn: '✅',
    Sonarjs: '❌',
    JSDoc: '✅',
    TSDoc: '❌',
    Import: '✅',
    Lodash: '❌',
    Nextjs: '✅',
    Jest: '❌',
    Vitest: '✅',
    'Testing-library': '❌',
    Playwright: '❌',
    Storybook: '❌',
    Astro: '✅',
  },
  XO: {
    FlatConfig: '❌',
    Maintained: '✅',
    Customizable: '✅',
    'Rich Docs': '✅',
    'Functional programming': '❌',
    'Advanced ignores management': '✅',
    'Learning curve': '😐',
    'Incremental adoption': '❌',
    'Typesafe config': '❌',
    Typescript: '✅',
    React: '✅',
    Vue: '✅',
    Solidjs: '❌',
    Svelte: '❌',
    GraphQL: '❌',
    Unicorn: '✅',
    Sonarjs: '❌',
    JSDoc: '❌',
    TSDoc: '❌',
    Import: '✅',
    Lodash: '❌',
    Nextjs: '❌',
    Jest: '❌',
    Vitest: '❌',
    'Testing-library': '❌',
    Playwright: '❌',
    Storybook: '❌',
    Astro: '❌',
  },
  'eslint-config-canonical': {
    FlatConfig: '❌',
    Maintained: '✅',
    Customizable: '✅',
    'Rich Docs': '✅',
    'Functional programming': '❌',
    'Advanced ignores management': '❌',
    'Learning curve': '😔',
    'Incremental adoption': '❌',
    'Typesafe config': '❌',
    Typescript: '✅',
    React: '✅',
    Vue: '❌',
    Solidjs: '❌',
    Svelte: '❌',
    GraphQL: '✅',
    Unicorn: '✅',
    Sonarjs: '❌',
    JSDoc: '✅',
    TSDoc: '❌',
    Import: '✅',
    Lodash: '✅',
    Nextjs: '✅',
    Jest: '✅',
    Vitest: '✅',
    'Testing-library': '❌',
    Playwright: '❌',
    Storybook: '❌',
    Astro: '❌',
  },
  'eslint-kit': {
    FlatConfig: '❌',
    Maintained: '✅',
    Customizable: '✅',
    'Rich Docs': '✅',
    'Functional programming': '❌',
    'Advanced ignores management': '❌',
    'Learning curve': '😔',
    'Incremental adoption': '✅',
    'Typesafe config': '❌',
    Typescript: '✅',
    React: '✅',
    Vue: '✅',
    Solidjs: '✅',
    Svelte: '✅',
    GraphQL: '❌',
    Unicorn: '✅',
    Sonarjs: '❌',
    JSDoc: '❌',
    TSDoc: '❌',
    Import: '✅',
    Lodash: '❌',
    Nextjs: '✅',
    Jest: '❌',
    Vitest: '❌',
    'Testing-library': '❌',
    Playwright: '❌',
    Storybook: '❌',
    Astro: '❌',
  },
  'eslint-config-galex': {
    FlatConfig: '❌',
    Maintained: '❌',
    Customizable: '✅',
    'Rich Docs': '✅',
    'Functional programming': '❌',
    'Advanced ignores management': '❌',
    'Learning curve': '😔',
    'Incremental adoption': '✅',
    'Typesafe config': '❌',
    Typescript: '✅',
    React: '✅',
    Vue: '❌',
    Solidjs: '❌',
    Svelte: '❌',
    GraphQL: '❌',
    Unicorn: '✅',
    Sonarjs: '✅',
    JSDoc: '❌',
    TSDoc: '❌',
    Import: '✅',
    Lodash: '❌',
    Nextjs: '✅',
    Jest: '✅',
    Vitest: '❌',
    'Testing-library': '✅',
    Playwright: '❌',
    Storybook: '✅',
    Astro: '❌',
  },
  'eslint-config-hardcore': {
    FlatConfig: '❌',
    Maintained: '✅',
    Customizable: '✅',
    'Rich Docs': '✅',
    'Functional programming': '✅',
    'Advanced ignores management': '❌',
    'Learning curve': '😐',
    'Incremental adoption': '❌',
    'Typesafe config': '❌',
    Typescript: '✅',
    React: '✅',
    Vue: '✅',
    Solidjs: '❌',
    Svelte: '❌',
    GraphQL: '❌',
    Unicorn: '✅',
    Sonarjs: '✅',
    JSDoc: '❌',
    TSDoc: '❌',
    Import: '✅',
    Lodash: '❌',
    Nextjs: '❌',
    Jest: '✅',
    Vitest: '❌',
    'Testing-library': '✅',
    Playwright: '❌',
    Storybook: '✅',
    Astro: '❌',
  },
};

export const ComparisonTable = (): JSX.Element => {
  return (
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          {Object.keys(entriesTable).map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.keys(entriesTable.sheriff).map((key) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              {Object.keys(entriesTable).map((entry) => {
                return (
                  <td key={entry}>
                    {
                      entriesTable[entry as keyof typeof entriesTable][
                        key as keyof TableEntry
                      ]
                    }
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
