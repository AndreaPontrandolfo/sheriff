import { getExportableConfig } from './getExportableConfig';
import {
  baseNoRestrictedSyntaxRules,
  allJsExtensions,
  allJsxExtensions,
  ignores,
  sheriffStartingOptions,
  supportedFileTypes,
  testsFilePatterns,
} from '@sherifforg/constants';

export {
  getExportableConfig as sheriff,
  baseNoRestrictedSyntaxRules,
  allJsExtensions,
  allJsxExtensions,
  ignores,
  sheriffStartingOptions,
  supportedFileTypes,
  testsFilePatterns,
};
export default getExportableConfig;
