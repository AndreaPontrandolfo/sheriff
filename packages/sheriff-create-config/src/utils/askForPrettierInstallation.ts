import { customConsolaPrompt } from './customConsolaPrompt';

export const askForPrettierInstallation = async (): Promise<boolean> => {
  const isPrettierDependencyWanted = await customConsolaPrompt(
    `Do you want to install Prettier as a dependency?
Tip: if you want to use Prettier as a shell command or in CI, choose 'Yes'.`,
    {
      type: 'confirm',
    },
  );

  return isPrettierDependencyWanted;
};
