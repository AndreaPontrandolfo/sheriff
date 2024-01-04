import { logger } from './logs';

export const getRequiredPackages = (
  isEslintTsPatchRequired: boolean,
): string[] => {
  const requiredPackages: string[] = [];

  requiredPackages.push('eslint');
  logger.verbose("Installing 'eslint'...");

  requiredPackages.push('eslint-define-config');
  logger.verbose("Installing 'eslint-define-config'...");

  requiredPackages.push('eslint-config-sheriff');
  logger.verbose("Installing 'eslint-config-sheriff'...");

  if (isEslintTsPatchRequired) {
    requiredPackages.push('eslint-ts-patch', 'eslint@npm:eslint-ts-patch');
    logger.verbose("Installing 'eslint-ts-patch'...");
    requiredPackages.push('@sherifforg/types');
    logger.verbose("Installing '@sherifforg/types'...");
  }

  return requiredPackages;
};
