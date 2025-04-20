import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['./src/index.ts'],
  format: 'esm',
  target: 'node20',
  platform: 'node',
  clean: true,
  sourcemap: false,
  skipNodeModulesBundle: true,
  publint: { strict: true },
});
