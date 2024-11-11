import { consola } from 'consola';
import { isString } from 'lodash-es';

interface Error {
  error?: unknown;
}

export const throwError = (message: string, { error }: Error = {}): void => {
  if (error) {
    consola.error(message);
    throw new Error(isString(error) ? error : JSON.stringify(error));
  }

  throw new Error(message);
};
