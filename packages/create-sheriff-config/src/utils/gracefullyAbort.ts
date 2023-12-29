import { logger } from './logs';

interface State {
  aborted: boolean;
}

export const gracefullyAbort = (state: State): void => {
  if (state.aborted) {
    process.nextTick(() => {
      logger.info('Cancelling...');
      process.exit(0);
    });
  }
};
