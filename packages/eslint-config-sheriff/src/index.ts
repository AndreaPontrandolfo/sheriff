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

const indexedBaseNoRestrictedSyntaxRules =
  getIndexedBaseNoRestrictedSyntaxRules();

export {
  getExportableConfig as sheriff,
  indexedBaseNoRestrictedSyntaxRules as baseNoRestrictedSyntaxRules,
  allJsExtensions,
  allJsxExtensions,
  ignores,
  sheriffStartingOptions,
  supportedFileTypes,
  testsFilePatterns,
};
export default getExportableConfig;
