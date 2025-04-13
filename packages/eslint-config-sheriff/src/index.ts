import {
  allJsExtensions,
  allJsxExtensions,
  ignores,
  sheriffStartingOptions,
  supportedFileTypes,
  testsFilePatterns,
} from '@sherifforg/constants';

//#region - Re-exports
// these '@sherifforg/constants' variables needs to be re-stored like this, otherwise they will not be bundled. They need to be bundled because we are not publishing the 'sheriff-constants' package, but we are using it as a dependency in this package.
const exportableAllJsExtensions = allJsExtensions;
const exportableAllJsxExtensions = allJsxExtensions;
const exportableIgnores = ignores;
const exportableSheriffStartingOptions = sheriffStartingOptions;
const exportableSupportedFileTypes = supportedFileTypes;
const exportableTestsFilePatterns = testsFilePatterns;

export {
  exportableAllJsExtensions as allJsExtensions,
  exportableAllJsxExtensions as allJsxExtensions,
  exportableIgnores as ignores,
  exportableSheriffStartingOptions as sheriffStartingOptions,
  exportableSupportedFileTypes as supportedFileTypes,
  exportableTestsFilePatterns as testsFilePatterns,
};
//#endregion

export {
  getExportableConfig as default,
  getExportableConfig as sheriff,
} from './getExportableConfig';
export type * from '@sherifforg/types';
export { type TSESLint } from '@typescript-eslint/utils';
export { default as tseslint } from 'typescript-eslint';
