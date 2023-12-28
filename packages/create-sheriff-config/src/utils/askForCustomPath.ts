import promptShape from 'prompts';
import { isString } from 'lodash-es';
import { logger } from './logs';

export const askForCustomPath = async (): Promise<void> => {
  logger.verbose(
    `It looks like you are trying to install the Sheriff config in a workspace package.
             Please specify the package relative path...`,
  );

  const response = await promptShape({
    type: 'text',
    name: 'path',
    message: 'Package path',
    initial: '.',
  });

  if (isString(response.path)) {
    logger.info(`Selected path: "${response.path}"`);
    global.customProjectRootPath = response.path;
  } else {
    logger.error('Unknown input. Input should be string.');
  }
};
