import type { TSESLint } from '@typescript-eslint/utils';

interface GetTsNamingConventionRuleOptions {
  isTsx: boolean;
  isAstroRoute?: boolean;
}

export const getTsNamingConventionRule = ({
  isTsx,
  isAstroRoute,
}: GetTsNamingConventionRuleOptions): TSESLint.FlatConfig.Rules => {
  const options: unknown[] = [
    {
      selector: 'default',
      format: ['camelCase', isTsx && 'StrictPascalCase'].filter(Boolean),
      leadingUnderscore: 'forbid',
      trailingUnderscore: 'forbid',
    },
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE'],
      modifiers: ['const'],
      types: ['string', 'number'],
      leadingUnderscore: 'forbid',
      trailingUnderscore: 'forbid',
    },
    {
      selector: 'objectLiteralProperty',
      format: null,
      leadingUnderscore: 'allowSingleOrDouble',
      trailingUnderscore: 'forbid',
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
      leadingUnderscore: 'forbid',
      trailingUnderscore: 'forbid',
    },
    // https://typescript-eslint.io/rules/naming-convention/#enforce-that-boolean-variables-are-prefixed-with-an-allowed-verb
    {
      selector: 'variable',
      types: ['boolean'],
      format: ['PascalCase'],
      prefix: ['is', 'are', 'has', 'should', 'can'],
      leadingUnderscore: 'forbid',
      trailingUnderscore: 'forbid',
    },
    {
      selector: 'variable',
      modifiers: ['destructured'],
      format: null,
    },
    {
      selector: 'typeProperty',
      format: null,
    },
  ];

  if (isAstroRoute) {
    options.push(
      // Allow Astro endpoints: https://docs.astro.build/en/guides/endpoints/
      {
        selector: ['variable', 'function'],
        types: ['function'],
        modifiers: ['exported'],
        format: null,
        filter: '^(GET|HEAD|POST|PUT|PATCH|DELETE|OPTIONS|CONNECT|TRACE|ALL)$',
      },
      // Allow Astro route config: https://docs.astro.build/en/reference/routing-reference/
      {
        selector: 'variable',
        modifiers: ['exported'],
        format: null,
        filter: '^(prerender|partial)$',
      },
    );
  }

  return {
    '@typescript-eslint/naming-convention': [2, ...options],
  };
};
