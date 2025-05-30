import { customConsolaPrompt } from './customConsolaPrompt';

export const askForCustomPath = async (): Promise<string> => {
  const response = await customConsolaPrompt(
    `It looks like you are trying to install the Sheriff config in a workspace.
Please specify the workspace package path relative from the root of the project:`,
    {
      type: 'text',
      message: 'Package path',
      initial: './',
      placeholder: './path/to/workspace',
    },
  );

  return response;
};
