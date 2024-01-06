import promptShape from 'prompts';
import { isString } from 'lodash-es';
import { consola } from 'consola';
import { gracefullyAbort } from './gracefullyAbort';
import { throwError } from './throwError';

export const askForCustomPath = async (): Promise<string | null> => {
  consola.info(
    `It looks like you are trying to install the Sheriff config in a workspace package.
             Please specify the package relative path...`,
  );

  const response = await promptShape({
    type: 'text',
    name: 'path',
    message: 'Package path',
    initial: '.',
    onState: gracefullyAbort,
  });

  if (isString(response.path)) {
    consola.info(`Selected path: "${response.path}"`);

    return response.path;
  }
  throwError('Unknown input. Input should be string.');

  return null;
};
