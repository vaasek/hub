import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  publicDir: "assets",
  build: {
    minify: true,
  },
  preview: {
    host: true,
    port: 3000,
    strictPort: true,
  },
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    watch: {
      usePolling: true,
    },
  },
});
