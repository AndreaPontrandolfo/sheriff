import { isString } from 'lodash-es';
import { consola } from 'consola';

interface Error {
  error?: unknown;
}

export const throwError = (message: string, { error }: Error = {}): void => {
  if (error) {
    consola.error(message);
    throw new Error(isString(error) ? error : String(error));
  }

  throw new Error(message);
};
