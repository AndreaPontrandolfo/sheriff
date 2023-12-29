import promptShape from 'prompts';
import { isBoolean } from 'lodash-es';
import { logger } from './logs';
import { gracefullyAbort } from './gracefullyAbort';

export const askForPrettierSupport = async (): Promise<void> => {
  logger.verbose(
    `Do you want to add Prettier support in the workspace package?`,
  );
  logger.info(
    `Tip: if you want to use prettier from the root of the monorepo, choose 'No'.`,
  );

  const response = await promptShape({
    type: 'confirm',
    name: 'localPrettier',
    message: 'Local prettier support',
    onState: gracefullyAbort,
  });

  const { localPrettier } = response;

  if (isBoolean(localPrettier)) {
    global.hasLocalPrettierSupport = localPrettier;
  } else {
    logger.error('Unknown input. Input should be a boolean.');
  }
};
