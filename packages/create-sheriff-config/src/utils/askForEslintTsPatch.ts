import promptShape from 'prompts';
import { isBoolean } from 'lodash-es';
import { logger } from './logs';

export const askForEslintTsPatch = async (): Promise<boolean> => {
  logger.verbose(`Do you want to use the eslint-ts-patch?`);

  const response = await promptShape({
    type: 'confirm',
    name: 'eslintTsPatchConfirmValue',
    message: 'eslint-ts-patch support (Experimental. Not recommended.)',
  });

  const { eslintTsPatchConfirmValue } = response;

  if (isBoolean(eslintTsPatchConfirmValue)) {
    return eslintTsPatchConfirmValue;
  }

  logger.error(
    `Invalid response. Expected boolean, received ${eslintTsPatchConfirmValue}`,
  );

  return false;
};
