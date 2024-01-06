import promptShape from 'prompts';
import { isBoolean } from 'lodash-es';
import { consola } from 'consola';
import { gracefullyAbort } from './gracefullyAbort';
import { throwError } from './throwError';

export const askForEslintTsPatch = async (): Promise<boolean> => {
  consola.info(`Do you want to use the eslint-ts-patch?`);

  const response = await promptShape({
    type: 'confirm',
    name: 'eslintTsPatchConfirmValue',
    message: 'eslint-ts-patch support (Experimental. Not recommended.)',
    onState: gracefullyAbort,
  });

  const { eslintTsPatchConfirmValue } = response;

  if (isBoolean(eslintTsPatchConfirmValue)) {
    return eslintTsPatchConfirmValue;
  }

  throwError(
    `Invalid response. Expected boolean, received ${eslintTsPatchConfirmValue}`,
  );

  return false;
};
