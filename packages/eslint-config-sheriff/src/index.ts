export {
  getExportableConfig as default,
  getExportableConfig as sheriff,
} from './getExportableConfig';
export {
  allJsExtensions,
  allJsxExtensions,
  ignores,
  sheriffStartingOptions,
  supportedFileTypes,
  testsFilePatterns,
} from '@sherifforg/constants';
export type * from '@sherifforg/types';
export { type TSESLint } from '@typescript-eslint/utils';
export { default as tseslint } from 'typescript-eslint';
