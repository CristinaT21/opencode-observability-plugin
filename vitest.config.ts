import { defineConfig } from "vitest/config";

import packageJson from "./package.json" with { type: "json" };

export default defineConfig({
  define: {
    __PLUGIN_VERSION__: JSON.stringify(packageJson.version),
  },
  test: {
    fileParallelism: false,
  },
});
