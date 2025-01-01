import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  format: 'esm',
  splitting: false,
  sourcemap: false,
  clean: true,
  noExternal: ['@sherifforg/constants', '@sherifforg/types'],
  skipNodeModulesBundle: true,
  dts: { entry: 'src/index.ts' },
  // banner: ({ format }) => {
  //   return format === 'esm'
  //     ? {
  //         js: `import { createRequire as __createRequire } from 'node:module'; const require = __createRequire(import.meta.url);`,
  //       }
  //     : {};
  // },
});
