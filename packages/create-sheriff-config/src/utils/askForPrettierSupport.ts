import promptShape from 'prompts';
import { isBoolean } from 'lodash-es';
import { logger } from './logs';
import { gracefullyAbort } from './gracefullyAbort';

export const askForPrettierSupport = async (): Promise<boolean> => {
  logger.verbose(
    `Do you want to add Prettier support in the workspace package?`,
  );
  logger.info(
    `Tip: if you want to use Prettier from the root of the monorepo, choose 'No'.`,
  );

  const response = await promptShape({
    type: 'confirm',
    name: 'localPrettier',
    message: 'Local Prettier support',
    onState: gracefullyAbort,
  });

  const { localPrettier } = response;

  if (isBoolean(localPrettier)) {
    return true;
  }
  logger.error('Unknown input. Input should be a boolean.');

  return false;
};
