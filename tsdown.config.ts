import { defineConfig } from "tsdown";

import packageJson from "./package.json" with { type: "json" };

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "v1/index": "src/v1.ts",
    "v2/index": "src/v2.ts",
  },
  define: {
    __PLUGIN_VERSION__: JSON.stringify(packageJson.version),
  },
  format: ["esm"],
  platform: "node",
  inputOptions: {
    // Prefer tree-shakeable ESM dependencies over their CommonJS builds.
    resolve: {
      mainFields: ["module", "main"],
    },
  },
  dts: false,
  sourcemap: false,
  clean: true,
  fixedExtension: false,
  deps: {
    // Ship the tested dependency graph, not packages resolved by the host.
    alwaysBundle: [/^@langfuse\//, /^@opentelemetry\//, /^effect(?:\/|$)/],
    neverBundle: [/^@opencode(?:-ai)?\//],
    onlyBundle: false,
  },
  outputOptions: {
    codeSplitting: true,
  },
});
