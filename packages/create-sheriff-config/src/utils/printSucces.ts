import { logger } from './logs';

export const printSucces = (message: string): void => {
  logger.info(`✔️  ${message}.`);
};
