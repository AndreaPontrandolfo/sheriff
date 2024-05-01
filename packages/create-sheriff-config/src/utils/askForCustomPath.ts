import { consola } from 'consola';

export const askForCustomPath = async (): Promise<string> => {
  const response = await consola.prompt(
    `It looks like you are trying to install the Sheriff config in a workspace.
Please specify the workspace path relative from the root of the project:`,
    {
      type: 'text',
      message: 'Package path',
      initial: './',
      placeholder: './path/to/workspace',
      // onState: gracefullyAbort,
    },
  );

  return response;
};
