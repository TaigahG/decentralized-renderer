import type { StorybookConfig } from "@storybook/react-vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { mergeConfig } from "vite";
import path from "node:path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [
        nodePolyfills({
          include: ["vm", "stream", "os", "crypto", "path", "buffer", "process", "util", "events"],
          globals: { Buffer: true, process: true },
        }),
      ],
      resolve: {
        alias: {
          "@emotion/core": "@emotion/react",
          "emotion-theming": "@emotion/react",
          "dotenv/config": path.resolve(__dirname, "..", "empty-module.ts"),
          "@mattrglobal/node-bbs-signatures": path.resolve(__dirname, "..", "empty-module.ts"),
        },
      },
      optimizeDeps: {
        exclude: ["@mattrglobal/node-bbs-signatures"],
      },
    }),
  docs: {
    autodocs: true,
  },
};
export default config;
