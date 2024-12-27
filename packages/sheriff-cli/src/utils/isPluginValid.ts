import { consola } from 'consola';
import { colors } from 'consola/utils';
import type { SheriffConfigurablePlugins } from '@sherifforg/types';
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
  property: any,
  pluginName: keyof SheriffConfigurablePlugins,
  isPluginFound: boolean,
  severityLevel: 'error' | 'warn',
): boolean => {
  let isError = false;

  if (
    property.key.name === pluginName &&
    property.value.value !== isPluginFound
  ) {
    isError = true;
    if (severityLevel === 'error') {
      consola.error(
        `Expected ${pluginName} to be ${colors.bold(String(isPluginFound))} but found ${colors.bold(property.value.value)}`,
      );
      throwError(
        `Expected ${pluginName} to be ${String(isPluginFound)} but found ${property.value.value}`,
      );
    }

    if (severityLevel === 'warn') {
      consola.warn(
        `Expected ${pluginName} to be ${colors.bold(String(isPluginFound))} but found ${colors.bold(property.value.value)}.`,
      );
    }
  }

  return !isError;
};
