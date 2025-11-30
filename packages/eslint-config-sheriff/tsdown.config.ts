import { defineConfig } from 'tsdown';

export default defineConfig({
  noExternal: ['@sherifforg/constants', '@sherifforg/types'],
  attw: { level: 'error', profile: 'esm-only' },
  publint: { strict: true },
  shims: true,
  sourcemap: true,
  dts: {
    resolve: ['@sherifforg/types'],
  },
  fixedExtension: false,
});
