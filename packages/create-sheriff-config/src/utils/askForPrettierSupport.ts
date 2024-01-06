import { consola } from 'consola';

export const askForPrettierSupport = async (): Promise<boolean> => {
  const response = await consola.prompt(
    `Do you want to add Prettier support in the workspace package?
Tip: if you want to use Prettier from the root of the monorepo, choose 'No'.`,
    {
      type: 'confirm',
      // onState: gracefullyAbort,
    },
  );

  return response;
};
