import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CheckIcon, XIcon } from 'lucide-react';

// Data from ComparisonTable.tsx, transformed
const rawData = {
  sheriff: {
    FlatConfig: '✅',
    Maintained: '✅',
    Customizable: '✅',
    'Rich docs': '✅',
    'Functional programming': '✅',
    'Preconfigured ignores': '✅',
    // 'Learning curve': '😊', // Omitted as per plan
    'Incremental adoption': '✅',
    'Typesafe config': '✅',
    Scaffolder: '✅',
    'Self checking in CI': '✅',
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
    Remeda: '✅',
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
    'Rich docs': '✅',
    'Functional programming': '❌',
    'Preconfigured ignores': '❌',
    // 'Learning curve': '😐', // Omitted
    'Incremental adoption': '❌',
    'Typesafe config': '❌',
    Scaffolder: '❌',
    'Self checking in CI': '❌',
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
    Remeda: '❌',
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
    'Rich docs': '✅',
    'Functional programming': '❌',
    'Preconfigured ignores': '❌',
    // 'Learning curve': '😐', // Omitted
    'Incremental adoption': '❌',
    'Typesafe config': '❌',
    Scaffolder: '❌',
    'Self checking in CI': '❌',
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
    Remeda: '❌',
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
    'Rich docs': '❌',
    'Functional programming': '❌',
    'Preconfigured ignores': '❌',
    // 'Learning curve': '😐', // Omitted
    'Incremental adoption': '❌',
    'Typesafe config': '❌',
    Scaffolder: '❌',
    'Self checking in CI': '❌',
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
    Remeda: '❌',
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
    'Rich docs': '✅',
    'Functional programming': '❌',
    'Preconfigured ignores': '✅',
    // 'Learning curve': '😔', // Omitted
    'Incremental adoption': '❌',
    'Typesafe config': '✅',
    Scaffolder: '✅',
    'Self checking in CI': '❌',
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
    Remeda: '❌',
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
    'Rich docs': '✅',
    'Functional programming': '❌',
    'Preconfigured ignores': '✅',
    // 'Learning curve': '😐', // Omitted
    'Incremental adoption': '❌',
    'Typesafe config': '❌',
    Scaffolder: '❌',
    'Self checking in CI': '❌',
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
    Remeda: '❌',
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
    'Rich docs': '✅',
    'Functional programming': '❌',
    'Preconfigured ignores': '❌',
    // 'Learning curve': '😔', // Omitted
    'Incremental adoption': '❌',
    'Typesafe config': '❌',
    Scaffolder: '❌',
    'Self checking in CI': '❌',
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
    Remeda: '❌',
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
    'Rich docs': '✅',
    'Functional programming': '❌',
    'Preconfigured ignores': '❌',
    // 'Learning curve': '😔', // Omitted
    'Incremental adoption': '✅',
    'Typesafe config': '❌',
    Scaffolder: '✅',
    'Self checking in CI': '❌',
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
    Remeda: '❌',
    Nextjs: '✅',
    Jest: '❌',
    Vitest: '❌',
    'Testing-library': '❌',
    Playwright: '❌',
    Storybook: '❌',
    Astro: '❌',
  },
  'eslint-config-hardcore': {
    FlatConfig: '❌',
    Maintained: '✅',
    Customizable: '✅',
    'Rich docs': '✅',
    'Functional programming': '✅',
    'Preconfigured ignores': '❌',
    // 'Learning curve': '😐', // Omitted
    'Incremental adoption': '❌',
    'Typesafe config': '❌',
    Scaffolder: '❌',
    'Self checking in CI': '❌',
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
    Remeda: '❌',
    Nextjs: '❌',
    Jest: '✅',
    Vitest: '❌',
    'Testing-library': '✅',
    Playwright: '❌',
    Storybook: '✅',
    Astro: '❌',
  },
};

const eslintConfigs = Object.keys(rawData);
const features = Object.keys(rawData.sheriff); // All configs share the same features (excluding Learning curve)

const browserDefinitions = eslintConfigs.map((configName) => ({
  name: configName,
}));

const items = features.map((featureName) => {
  const browsersData = eslintConfigs.map((configName) => {
    const supportEmoji =
      rawData[configName as keyof typeof rawData][
        featureName as keyof typeof rawData.sheriff
      ];
    return {
      name: configName,
      supported: supportEmoji === '✅',
    };
  });
  return {
    feature: featureName,
    browsers: browsersData,
  };
});

export default function Component() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
          <TableCell></TableCell>
          {browserDefinitions.map((browser) => (
            <TableHead
              key={browser.name}
              className="text-foreground h-auto py-3 align-bottom"
            >
              <span className="relative left-[calc(50%-.5rem)] block rotate-180 whitespace-nowrap leading-4 [text-orientation:sideways] [writing-mode:vertical-rl]">
                {browser.name}
              </span>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow
            key={item.feature}
            className="*:border-border [&>:not(:last-child)]:border-r"
          >
            <TableHead className="text-foreground font-medium">
              {item.feature}
            </TableHead>
            {item.browsers.map((browser, index) => (
              <TableCell
                key={`${browser.name}-${index}`}
                className="space-y-1 text-center"
              >
                {browser.supported ? (
                  <CheckIcon
                    className="inline-flex stroke-emerald-600"
                    size={16}
                    aria-hidden="true"
                  />
                ) : (
                  <XIcon
                    className="inline-flex stroke-red-600"
                    size={16}
                    aria-hidden="true"
                  />
                )}
                <span className="sr-only">
                  {browser.supported ? 'Supported' : 'Not supported'}
                </span>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
