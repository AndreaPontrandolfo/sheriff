import type { TSESLint } from '@typescript-eslint/utils';

interface GetTsNamingConventionRuleOptions {
  isTsx: boolean;
  isAstroEndpoint?: boolean;
}

export const getTsNamingConventionRule = ({
  isTsx,
  isAstroEndpoint,
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

  // Allow Astro endpoints: https://docs.astro.build/en/guides/endpoints/
  if (isAstroEndpoint) {
    options.push({
      selector: 'function',
      modifiers: ['exported'],
      format: null,
      filter: '^(GET|HEAD|POST|PUT|PATCH|DELETE|OPTIONS|CONNECT|TRACE|ALL)$',
    });
  }

  return {
    '@typescript-eslint/naming-convention': [2, ...options],
  };
};
