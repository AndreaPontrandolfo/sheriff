import promptShape from 'prompts';
import { isString } from 'lodash-es';
import { logger } from './logs';
import { gracefullyAbort } from './gracefullyAbort';

export const askForCustomPath = async (): Promise<string | null> => {
  logger.verbose(
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
    logger.info(`Selected path: "${response.path}"`);

    return response.path;
  }
  logger.error('Unknown input. Input should be string.');

  return null;
};
