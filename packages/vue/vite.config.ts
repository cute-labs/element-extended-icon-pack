import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: "src/main.ts",
      name: "@element-extended-icon-pack/vue",
      fileName: "index"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "vue"
        }
      }
    }
  }
});
