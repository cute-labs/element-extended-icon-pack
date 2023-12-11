import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [vue(), dts({ rollupTypes: true })],
  build: {
    rollupOptions: [
      {
        output: {
          dir: "dist"
        }
      }
    ],
    lib: {
      entry: "src/index.ts",
      name: "index",
      fileName: "index",
      formats: ["es"]
    }
  }
});
