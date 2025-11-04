import { defineConfig } from "tsdown";

export default defineConfig({
  noExternal: ["@sherifforg/constants", "@sherifforg/types"],
  attw: { level: "error", profile: "esmOnly" },
  publint: { strict: true },
  shims: true,
  sourcemap: true,
  dts: {
    resolve: ["@sherifforg/types"],
  },
});
