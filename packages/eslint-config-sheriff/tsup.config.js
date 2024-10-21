import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  format: 'esm',
  splitting: false,
  sourcemap: false,
  clean: true,
  noExternal: ['@sherifforg/constants', '@sherifforg/types'],
  skipNodeModulesBundle: true,
  dts: {
    entry: 'src/index.ts',
    resolve: true,
  },
  banner: ({ format }) => {
    if (format === 'esm')
      return {
        js: `import { createRequire } from 'module'; const require = createRequire(import.meta.url);`,
      };
    return {};
  },
});
