import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  target: "esnext",
  minify: false,
  watch: process.env.NODE_ENV === "development",
});
