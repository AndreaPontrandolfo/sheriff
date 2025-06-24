import { Check, Tally1, Tally2, Tally3, X } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

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
    Doctor: '✅',
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
    Doctor: '❌',
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
    Doctor: '❌',
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
    Doctor: '❌',
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
    Doctor: '❌',
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
    Doctor: '❌',
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
    Doctor: '❌',
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
    Doctor: '❌',
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
    Doctor: '❌',
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

export function ComparisonTableHP() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
          <TableCell></TableCell>
          {eslintConfigs.map((configName) => {
            return (
              <TableHead
                key={configName}
                className="text-foreground h-auto py-3 align-bottom"
              >
                <span className="relative left-[calc(50%-.5rem)] block rotate-180 whitespace-nowrap leading-4 [text-orientation:sideways] [writing-mode:vertical-rl]">
                  {configName}
                </span>
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {features.map((featureName) => {
          return (
            <TableRow
              key={featureName}
              className="*:border-border [&>:not(:last-child)]:border-r"
            >
              <TableHead className="text-foreground font-medium">
                {featureName}
              </TableHead>
              {eslintConfigs.map((configName) => {
                const featureValue =
                  rawData[configName as keyof typeof rawData][
                    featureName as keyof typeof rawData.sheriff
                  ];
                let iconContent = null;
                let screenReaderText = '';

                if (featureName === 'Learning curve') {
                  switch (featureValue) {
                    case '😊': {
                      iconContent = (
                        <Tally1
                          className="inline-flex stroke-emerald-600"
                          size={16}
                          aria-hidden="true"
                        />
                      );
                      screenReaderText = 'Easy learning curve';

                      break;
                    }
                    case '😐': {
                      iconContent = (
                        <Tally2
                          className="inline-flex stroke-yellow-600"
                          size={16}
                          aria-hidden="true"
                        />
                      );
                      screenReaderText = 'Medium learning curve';

                      break;
                    }
                    case '😔': {
                      iconContent = (
                        <Tally3
                          className="inline-flex stroke-red-600"
                          size={16}
                          aria-hidden="true"
                        />
                      );
                      screenReaderText = 'Hard learning curve';

                      break;
                    }
                    default:
                    // Do nothing
                  }
                } else {
                  const isSupported = featureValue === '✅';

                  if (isSupported) {
                    iconContent = (
                      <Check
                        className="inline-flex stroke-emerald-600"
                        size={16}
                        aria-hidden="true"
                      />
                    );
                    screenReaderText = 'Supported';
                  } else {
                    iconContent = (
                      <X
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
          );
        })}
      </TableBody>
    </Table>
  );
}
