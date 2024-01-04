import { NoRestrictedSyntaxSlice } from '@sherifforg/types';

export const getFilteredBaseNoRestrictedSyntax = (
  baseNoRestrictedSyntaxRules: NoRestrictedSyntaxSlice[],
  userProvidedNoRestrictedSyntaxSelectors?: string[],
) => {
  if (
    !userProvidedNoRestrictedSyntaxSelectors ||
    userProvidedNoRestrictedSyntaxSelectors.length === 0
  ) {
    return baseNoRestrictedSyntaxRules;
  }

  const filteredList = baseNoRestrictedSyntaxRules.filter((rule) => {
    return !userProvidedNoRestrictedSyntaxSelectors.includes(rule.selector);
  });

  return filteredList;
};
