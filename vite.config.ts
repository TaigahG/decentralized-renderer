import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    react({ jsxImportSource: "@emotion/react" }),
    nodePolyfills({
      include: ["vm", "stream", "os", "crypto", "path", "buffer", "process", "util", "events"],
      globals: { Buffer: true, process: true },
    }),
  ],
  server: { port: 3000 },
  build: { outDir: "dist" },
  optimizeDeps: {
    // ponytail: exclude native module; if browser code never calls into it, this stays. If a runtime error complains about missing exports from this package, replace with a stub via `resolve.alias`.
    exclude: ["@mattrglobal/node-bbs-signatures"],
  },
});
