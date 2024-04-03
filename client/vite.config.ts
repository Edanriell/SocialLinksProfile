import { resolve } from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

const root = resolve(__dirname, "src");

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      "@": resolve(root),
      "@app": resolve(root, "app"),
      "@entities": resolve(root, "entities"),
      "@entities/recipe": resolve(root, "entities/recipe"),
      "@entities/recipe/api": resolve(root, "entities/recipe/api"),
      "@entities/recipe/model": resolve(root, "entities/recipe/model"),
      "@entities/recipe/ui": resolve(root, "entities/recipe/ui"),
      "@shared": resolve(root, "shared"),
      "@shared/ui": resolve(root, "shared/ui"),
      "@shared/ui/button": resolve(root, "shared/ui/button"),
      "@shared/ui/icon": resolve(root, "shared/ui/icon")
    }
  }
})
