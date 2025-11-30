import { type Config, defineConfig } from 'eslint/config';
import remedaPlugin from 'eslint-plugin-remeda';
import { supportedFileTypes } from '@sherifforg/constants';

export const remedaConfig: Config[] = defineConfig([
  {
    files: [supportedFileTypes],
    // @ts-expect-error
    plugins: { remeda: remedaPlugin },
    //@ts-expect-error
    rules: remedaPlugin.configs.recommended.rules,
  },
]);
