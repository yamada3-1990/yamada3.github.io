import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible'

export default defineConfig({
  base: "./", // ルートディレクトリにデプロイする場合
  plugins: [
    react(),
    envCompatible(), // 追加
  ],
})
