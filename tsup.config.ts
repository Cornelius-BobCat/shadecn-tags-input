import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["cli/src/index.ts"],
  format: ["esm"],
  clean: true,
  dts: true,
  outDir: "dist",
  external: ["react"],
  noExternal: ["commander", "chalk"],
});
