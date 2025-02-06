import { consola } from 'consola';

// @ts-expect-error
export const customConsolaPrompt: typeof consola.prompt = async (
  message,
  options,
) => {
  const response = await consola.prompt(message, {
    ...options,
    cancel: 'symbol',
  });

  // @ts-expect-error
  if (response === Symbol.for('cancel')) {
    consola.info('Operation cancelled. Aborting...');
    process.exit(0);
  }

  return response;
};
