import type { NoRestrictedSyntaxSlice } from '@sherifforg/types';

export const getFilteredBaseNoRestrictedSyntax = (
  baseNoRestrictedSyntaxRules: NoRestrictedSyntaxSlice[],
  userProvidedNoRestrictedSyntaxSelectors?: string[],
): NoRestrictedSyntaxSlice[] => {
  if (!userProvidedNoRestrictedSyntaxSelectors) {
    return baseNoRestrictedSyntaxRules;
  }

  const filteredList = baseNoRestrictedSyntaxRules.filter(
    (rule) => !userProvidedNoRestrictedSyntaxSelectors.includes(rule.selector),
  );

  return filteredList;
};
