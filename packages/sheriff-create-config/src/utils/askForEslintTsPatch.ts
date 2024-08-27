import { colors } from 'consola/utils';
import { customConsolaPrompt } from './customConsolaPrompt';

export const askForEslintTsPatch = async (): Promise<boolean> => {
  const isTsEslintPatchWanted = await customConsolaPrompt(
    `Do you want to use the ${colors.bold('eslint-ts-patch')}?`,
    {
      type: 'confirm',
      // onState: gracefullyAbort,
    },
  );

  return isTsEslintPatchWanted;
};
