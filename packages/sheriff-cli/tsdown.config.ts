import { defineConfig } from 'tsdown';

export default defineConfig({
  publint: { strict: true },
  shims: true,
  sourcemap: true,
  fixedExtension: false,
});
