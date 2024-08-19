import { baseNoRestrictedSyntaxRules } from '@sherifforg/constants';

export const getIndexedBaseNoRestrictedSyntaxRules = () => {
  return baseNoRestrictedSyntaxRules.map((element, index) => {
    return {
      ...element,
      message: `${element.message}\n\nIndex: ${index.toString()}.`,
    };
  });
};
