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

const exportableAllJsExtensions = allJsExtensions;
const exportableAllJsxExtensions = allJsxExtensions;
const exportableIgnores = ignores;
const exportableSheriffStartingOptions = sheriffStartingOptions;
const exportableSupportedFileTypes = supportedFileTypes;
const exportableTestsFilePatterns = testsFilePatterns;

const indexedBaseNoRestrictedSyntaxRules =
  getIndexedBaseNoRestrictedSyntaxRules();

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
