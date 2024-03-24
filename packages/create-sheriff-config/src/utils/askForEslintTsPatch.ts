import { consola } from 'consola';

export const askForEslintTsPatch = async (): Promise<boolean> => {
  const isTsEslintPatchWanted = await consola.prompt(
    `Do you want to use the eslint-ts-patch? (Experimental)`,
    {
      type: 'confirm',
      // onState: gracefullyAbort,
    },
  );

  return isTsEslintPatchWanted;
};
