import promptShape from 'prompts';
import { isBoolean } from 'lodash-es';
import { consola } from 'consola';
import { gracefullyAbort } from './gracefullyAbort';
import { throwError } from './throwError';

export const askForPrettierSupport = async (): Promise<boolean> => {
  consola.info(`Do you want to add Prettier support in the workspace package?`);
  consola.info(
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

  throwError('Unknown input. Input should be a boolean.');

  return false;
};
