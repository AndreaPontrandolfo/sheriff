import { consola } from 'consola';

interface State {
  aborted: boolean;
}

export const gracefullyAbort = (state: State): void => {
  if (state.aborted) {
    process.nextTick(() => {
      consola.info('Cancelling...');
      process.exit(0);
    });
  }
};
