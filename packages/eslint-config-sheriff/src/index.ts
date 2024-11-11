import { getExportableConfig } from './getExportableConfig';
import {
  allJsExtensions,
  allJsxExtensions,
  ignores,
  sheriffStartingOptions,
  supportedFileTypes,
  testsFilePatterns,
} from '@sherifforg/constants';
import { getIndexedBaseNoRestrictedSyntaxRules } from './utils/getIndexedBaseNoRestrictedSyntaxRules';

//#region - these '@sherifforg/constants' variables needs to be re-stored like this, otherwise they will not be bundled. They need to be bundled because we are not publishing the 'sheriff-constants' package, but we are using it as a dependency in this package.
const exportableAllJsExtensions = allJsExtensions;
const exportableAllJsxExtensions = allJsxExtensions;
const exportableIgnores = ignores;
const exportableSheriffStartingOptions = sheriffStartingOptions;
const exportableSupportedFileTypes = supportedFileTypes;
const exportableTestsFilePatterns = testsFilePatterns;

const indexedBaseNoRestrictedSyntaxRules =
  getIndexedBaseNoRestrictedSyntaxRules();
//#endregion

export {
  getExportableConfig as sheriff,
  indexedBaseNoRestrictedSyntaxRules as baseNoRestrictedSyntaxRules,
  exportableAllJsExtensions as allJsExtensions,
  exportableAllJsxExtensions as allJsxExtensions,
  exportableIgnores as ignores,
  exportableSheriffStartingOptions as sheriffStartingOptions,
  exportableSupportedFileTypes as supportedFileTypes,
  exportableTestsFilePatterns as testsFilePatterns,
};

export type * from '@sherifforg/types';

export default getExportableConfig;
