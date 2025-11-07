import { consola } from 'consola';

export const showWelcome = (): void => {
  consola.log(''); // this adds a empty row for spacing
  consola.log('Welcome to Sheriff! 👋');
  consola.log(
    'This wizard will guide you through the setup of Sheriff in your project.',
  );
  consola.log("Let's get started!");
};
