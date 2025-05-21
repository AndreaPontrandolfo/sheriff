import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { LuCheck, LuX, LuTally1, LuTally2, LuTally3 } from 'react-icons/lu';

const rawData = {
  sheriff: {
    FlatConfig: '✅',
    Maintained: '✅',
    Customizable: '✅',
    'Rich docs': '✅',
    'Functional programming': '✅',
    'Preconfigured ignores': '✅',
    'Learning curve': '😊',
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
    'Learning curve': '😐',
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
    'Learning curve': '😐',
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
    'Learning curve': '😐',
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
    'Learning curve': '😔',
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
    'Learning curve': '😐',
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
    'Learning curve': '😔',
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
    'Learning curve': '😔',
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
    'Learning curve': '😐',
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
const features = Object.keys(rawData.sheriff);

export const ComparisonTableHP = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
          <TableCell></TableCell>
          {eslintConfigs.map((configName) => (
            <TableHead
              key={configName}
              className="text-foreground h-auto py-3 align-bottom"
            >
              <span className="relative left-[calc(50%-.5rem)] block rotate-180 whitespace-nowrap leading-4 [text-orientation:sideways] [writing-mode:vertical-rl]">
                {configName}
              </span>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {features.map((featureName) => (
          <TableRow
            key={featureName}
            className="*:border-border [&>:not(:last-child)]:border-r"
          >
            <TableHead className="text-foreground font-medium">
              {featureName}
            </TableHead>
            {eslintConfigs.map((configName) => {
              const featureValue =
                rawData[configName as keyof typeof rawData]?.[
                  featureName as keyof typeof rawData.sheriff
                ];
              let iconContent = null;
              let screenReaderText = '';

              if (featureName === 'Learning curve') {
                if (featureValue === '😊') {
                  iconContent = (
                    <LuTally1
                      className="inline-flex stroke-emerald-600"
                      size={16}
                      aria-hidden="true"
                    />
                  );
                  screenReaderText = 'Easy learning curve';
                } else if (featureValue === '😐') {
                  iconContent = (
                    <LuTally2
                      className="inline-flex stroke-yellow-600"
                      size={16}
                      aria-hidden="true"
                    />
                  );
                  screenReaderText = 'Medium learning curve';
                } else if (featureValue === '😔') {
                  iconContent = (
                    <LuTally3
                      className="inline-flex stroke-red-600"
                      size={16}
                      aria-hidden="true"
                    />
                  );
                  screenReaderText = 'Hard learning curve';
                }
              } else {
                const isSupported = featureValue === '✅';
                if (isSupported) {
                  iconContent = (
                    <LuCheck
                      className="inline-flex stroke-emerald-600"
                      size={16}
                      aria-hidden="true"
                    />
                  );
                  screenReaderText = 'Supported';
                } else {
                  iconContent = (
                    <LuX
                      className="inline-flex stroke-red-600"
                      size={16}
                      aria-hidden="true"
                    />
                  );
                  screenReaderText = 'Not supported';
                }
              }

              return (
                <TableCell key={configName} className="space-y-1 text-center">
                  {iconContent}
                  <span className="sr-only">{screenReaderText}</span>
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
