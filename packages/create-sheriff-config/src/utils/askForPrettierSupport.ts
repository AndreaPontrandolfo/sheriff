import promptShape from 'prompts';
import { isBoolean } from 'lodash-es';
import { logger } from './logs';

export const askForPrettierSupport = async (): Promise<void> => {
  logger.verbose(
    `Do you want to add Prettier support in the workspace' package?`,
  );

  const LOCAL_PRETTIER = 'local prettier' as const;

  const response = await promptShape({
    type: 'confirm',
    name: LOCAL_PRETTIER,
    message: 'Local prettier support',
  });

  if (isBoolean(response[LOCAL_PRETTIER])) {
    global.hasLocalPrettierSupport = response[LOCAL_PRETTIER];
  } else {
    logger.error('Unknown input. Input should be a boolean.');
  }
};
