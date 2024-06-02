import { supportedFileTypes } from '@sherifforg/constants';

export const prettierOverrides = {
  files: [supportedFileTypes],
  rules: {
    curly: [2, 'all'],
  },
};
