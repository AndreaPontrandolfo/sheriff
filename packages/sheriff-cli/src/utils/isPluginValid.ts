import { consola } from 'consola';
import { colors } from 'consola/utils';
import type { SheriffConfigurablePlugins } from '@sherifforg/types';
import {
  AST_NODE_TYPES,
  type TSESTree,
} from '@typescript-eslint/typescript-estree';
import { throwError } from './throwError';

/**
 * Validates if a plugin configuration is as expected.
 *
 * @param property - The AST object within the "sheriffOptions" variable.
 * @param pluginName - The name of the plugin to validate.
 * @param isPluginFound - Whether the found dependency has the corresponding sheriffOptions property set correctly.
 * @param severityLevel - The severity level of the validation ('error' or 'warn'). Error is used to make CI fail, warn will just log the problem without exiting the process.
 * @returns A boolean indicating whether the plugin configuration is valid.
 * @throws Will throw an error if the validation fails and the severity level is 'error'.
 */
export const isPluginValid = (
  property: TSESTree.ObjectLiteralElement,
  pluginName: keyof SheriffConfigurablePlugins,
  isPluginFound: boolean,
  severityLevel: 'error' | 'warn',
): boolean => {
  let isError = false;

  if (
    property.type === AST_NODE_TYPES.Property &&
    property.key.type === AST_NODE_TYPES.Identifier &&
    property.key.name === pluginName &&
    property.value.type === AST_NODE_TYPES.Literal &&
    property.value.value !== isPluginFound
  ) {
    isError = true;
    const { value } = property.value;

    if (severityLevel === 'error') {
      throwError(
        `Expected ${pluginName} to be ${colors.bold(String(isPluginFound))} but found ${colors.bold(value ? value.toString() : 'unknown')}.`,
      );
    }

    if (severityLevel === 'warn') {
      consola.warn(
        `Expected ${pluginName} to be ${colors.bold(String(isPluginFound))} but found ${colors.bold(value ? value.toString() : 'unknown')}.`,
      );
    }
  }

  return !isError;
};
