import { consola } from 'consola';

export const askForCustomPath = async (): Promise<string> => {
  const response = await consola.prompt(
    `It looks like you are trying to install the Sheriff config in a workspace package.
Please specify the package relative path:`,
    {
      type: 'text',
      message: 'Package path',
      initial: './',
      placeholder: './path/to/workspace',
      // onState: gracefullyAbort,
    },
  );

  consola.info(`Selected path: "${response}"`);

  return response;
};
