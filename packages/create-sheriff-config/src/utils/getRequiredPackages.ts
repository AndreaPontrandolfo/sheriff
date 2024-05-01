import { consola } from 'consola';

export const getRequiredPackages = (
  isEslintTsPatchRequired: boolean,
): string[] => {
  const requiredPackages: string[] = [];

  requiredPackages.push('eslint');
  consola.start("Installing 'eslint'...");

  requiredPackages.push('eslint-define-config');
  consola.start("Installing 'eslint-define-config'...");

  requiredPackages.push('eslint-config-sheriff');
  consola.start("Installing 'eslint-config-sheriff'...");

  if (isEslintTsPatchRequired) {
    requiredPackages.push('eslint-ts-patch', 'eslint@npm:eslint-ts-patch');
    consola.start("Installing 'eslint-ts-patch'...");
    requiredPackages.push('@sherifforg/types');
    consola.start("Installing '@sherifforg/types'...");
  }

  return requiredPackages;
};
