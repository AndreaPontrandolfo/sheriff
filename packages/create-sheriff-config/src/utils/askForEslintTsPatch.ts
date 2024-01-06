import { consola } from 'consola';

export const askForEslintTsPatch = async (): Promise<boolean> => {
  consola.info(`Do you want to use the eslint-ts-patch?`);

  const response = await consola.prompt(
    `Do you want to use the eslint-ts-patch? (Experimental)`,
    {
      type: 'confirm',
      // onState: gracefullyAbort,
    },
  );

  return response;
};
