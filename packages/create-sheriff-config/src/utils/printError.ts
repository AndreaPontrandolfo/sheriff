import { isString } from 'lodash-es';
import { logger } from './logs';

interface Error {
  error?: unknown;
}

export const printError = (message: string, { error }: Error = {}): void => {
  logger.error(`❌  ${message}. ${isString(error) ? error : String(error)}`);

  throw new Error(`${isString(error) ? error : String(error)}`);
};
