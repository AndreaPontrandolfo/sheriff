import { consola } from 'consola';

interface OptionalError {
  error?: unknown;
}

/**
 *
 * Log an error message with stack trace and cause, then exits the process.
 *
 * // TODO: move this to a "sheriff-utils" package.
 *
 * @param message - The error message to display.
 * @param error - The error object to display as the cause of the error.
 */
export const throwError = (
  message: string,
  { error }: OptionalError = {},
): void => {
  consola.error(new Error(message, error ? { cause: error } : undefined));
  process.exit(1);
};
