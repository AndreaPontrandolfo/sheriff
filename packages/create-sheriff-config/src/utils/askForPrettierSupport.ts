import promptShape from 'prompts';
import { isBoolean } from 'lodash-es';
import { logger } from './logs';

export const askForPrettierSupport = async (): Promise<void> => {
  logger.verbose(
    `Do you want to add Prettier support in the workspace package?`,
  );

  const response = await promptShape({
    type: 'confirm',
    name: 'localPrettier',
    message: 'Local prettier support',
  });

  const { localPrettier } = response;

  if (isBoolean(localPrettier)) {
    global.hasLocalPrettierSupport = localPrettier;
  } else {
    logger.error('Unknown input. Input should be a boolean.');
  }
};
