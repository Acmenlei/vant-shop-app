import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from "vite-plugin-style-import"
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue(), styleImport({
    libs: [
      {
         libraryName: "vant",
         esModule: true,
         resolveStyle: (name) => `vant/es/${name}/style`
      }
    ]
  })],
  resolve: {
    alias: {
      "@": pathResolve('src')
    }
  },
  server: {
    open: true
  }
})

function pathResolve(path) {
  return resolve(__dirname, path);
}
