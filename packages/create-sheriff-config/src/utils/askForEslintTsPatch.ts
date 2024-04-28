import { consola } from 'consola';
import { colors } from 'consola/utils';

export const askForEslintTsPatch = async (): Promise<boolean> => {
  const isTsEslintPatchWanted = await consola.prompt(
    `Do you want to use the ${colors.bold('eslint-ts-patch')}?`,
    {
      type: 'confirm',
      // onState: gracefullyAbort,
    },
  );

  return isTsEslintPatchWanted;
};
