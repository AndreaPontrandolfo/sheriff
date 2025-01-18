import { colors } from 'consola/utils';
import { customConsolaPrompt } from './customConsolaPrompt';

export const askForEslintTsConfig = async (): Promise<boolean> => {
  const isEslintTsConfig = await customConsolaPrompt(
    `Do you prefer the config as a Typescript file? The generated config will be a ${colors.bold('eslint.config.ts')} file (Experimental)`,
    {
      type: 'confirm',
    },
  );

  return isEslintTsConfig;
};
