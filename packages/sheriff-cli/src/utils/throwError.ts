import { consola } from 'consola';

interface Error {
  error?: unknown;
}

export const throwError = (message: string, { error }: Error = {}): void => {
  consola.error(new Error(message, error ? { cause: error } : undefined));
  process.exit(1);
};
