import { customConsolaPrompt } from './customConsolaPrompt';

export const askForPrettierSupport = async (): Promise<boolean> => {
  const isPrettierWanted = await customConsolaPrompt(
    `Do you want to add Prettier support in the workspace?
Tip: if you want to use Prettier from the root of the monorepo, choose 'No'.`,
    {
      type: 'confirm',
    },
  );

  return isPrettierWanted;
};
