/* eslint-disable import/no-default-export */
/* eslint-disable unicorn/prefer-export-from */

import {
  allJsExtensions,
  allJsxExtensions,
  ignores,
  sheriffStartingOptions,
  supportedFileTypes,
  testsFilePatterns,
} from '@sherifforg/constants';
import { getExportableConfig } from './getExportableConfig';
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
  exportableAllJsExtensions as allJsExtensions,
  exportableAllJsxExtensions as allJsxExtensions,
  indexedBaseNoRestrictedSyntaxRules as baseNoRestrictedSyntaxRules,
  exportableIgnores as ignores,
  getExportableConfig as sheriff,
  exportableSheriffStartingOptions as sheriffStartingOptions,
  exportableSupportedFileTypes as supportedFileTypes,
  exportableTestsFilePatterns as testsFilePatterns,
};

export type * from '@sherifforg/types';

export default getExportableConfig;
