import { baseNoRestrictedSyntaxRules } from '@sherifforg/constants';
import type { NoRestrictedSyntaxSlice } from '@sherifforg/types';

export const getIndexedBaseNoRestrictedSyntaxRules =
  (): NoRestrictedSyntaxSlice[] => {
    return baseNoRestrictedSyntaxRules.map((element, index) => {
      return {
        ...element,
        message: `${element.message}\n\nIndex: ${index.toString()}.`,
      };
    });
  };
