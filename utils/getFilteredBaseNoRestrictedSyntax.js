const getFilteredBaseNoRestrictedSyntax = (
  baseNoRestrictedSyntaxRules,
  userProvidedNoRestrictedSyntaxSelectors,
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

module.exports = getFilteredBaseNoRestrictedSyntax;
