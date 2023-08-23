import { logger } from './logs';

export const getRequiredPackages = (): string[] => {
  const requiredPackages: string[] = [];

  requiredPackages.push('eslint');
  logger.verbose("Installing 'eslint'...");

  requiredPackages.push('eslint-define-config');
  logger.verbose("Installing 'eslint-define-config'...");

  requiredPackages.push('eslint-config-sheriff');
  logger.verbose("Installing 'eslint-config-sheriff'...");

  return requiredPackages;
};
