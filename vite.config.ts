import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { normalizePath } from "vite";
import path from "path";
import windi from "vite-plugin-windicss";

const variablePath = normalizePath(
  path.resolve("./src/assets/scss/variable.scss")
);

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {
      // 一般我们可以通过 generateScopedName 属性来对生成的类名进行自定义
      // 其中，name 表示当前文件名，local 表示类名
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`,
      },
    },
  },
  plugins: [react(), windi()],
});
