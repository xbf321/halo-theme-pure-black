import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import path from "path";
import { viteStaticCopy } from 'vite-plugin-static-copy'

// 原始目录和 halo 测试的主题目录，不在同一个目录，故需要 copy
const dest = process.env.TARGET_DIR;
export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: './templates',
          dest,
        },
        {
          src: './*.yaml',
          dest,
        }
      ]
    })
  ],
  build: {
    outDir: fileURLToPath(new URL("./templates/assets/dist", import.meta.url)),
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, "src/main.js"),
      name: "main",
      fileName: "main",
      formats: ["iife"],
    },
  },
});
