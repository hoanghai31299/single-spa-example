import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vitePluginSingleSpa from "vite-plugin-single-spa";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: "src/spa.tsx",
    },
  },
  base: "http://localhost:5173/",
  plugins: [react(), vitePluginSingleSpa({ type: "root" })],
  server: {
    hmr: false,
  },
});
