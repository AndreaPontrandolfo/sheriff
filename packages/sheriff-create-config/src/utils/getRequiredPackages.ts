import { consola } from 'consola';

export const getRequiredPackages = (): string[] => {
  const requiredPackages: string[] = [];

  requiredPackages.push('eslint');
  consola.start("Installing 'eslint'...");

  requiredPackages.push('eslint-define-config');
  consola.start("Installing 'eslint-define-config'...");

  requiredPackages.push('eslint-config-sheriff');
  consola.start("Installing 'eslint-config-sheriff'...");

  return requiredPackages;
};
