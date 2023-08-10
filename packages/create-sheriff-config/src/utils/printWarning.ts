import { logger } from './logs';

export const printWarning = (message: string): void => {
  logger.warn(`⚠️  ${message}.`);
};
