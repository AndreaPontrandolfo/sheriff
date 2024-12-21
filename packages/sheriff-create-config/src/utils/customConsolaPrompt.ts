import { consola } from 'consola';

export const customConsolaPrompt: typeof consola.prompt = async (
  message,
  options,
) => {
  const response = await consola.prompt(message, options);

  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  if (response?.toString() === 'Symbol(clack:cancel)') {
    consola.info('Aborting...');
    process.exit(0);
  }

  return response;
};
