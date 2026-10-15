import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
  resolve: {
    alias: {
      // ponytail: @trustvc/trustvc ESM entry does `import 'dotenv/config'` unconditionally; browser has no fs/.env so stub it. Upgrade path: if a runtime path legitimately needs an env var, expose it via Vite's `import.meta.env.VITE_*` and read it there.
      "dotenv/config": path.resolve(__dirname, "empty-module.ts"),
    },
  },
  optimizeDeps: {
    // ponytail: exclude native module; if browser code never calls into it, this stays. If a runtime error complains about missing exports from this package, replace with a stub via `resolve.alias`.
    exclude: ["@mattrglobal/node-bbs-signatures"],
  },
});
