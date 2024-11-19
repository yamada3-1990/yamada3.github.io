import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible'

export default defineConfig({
  // process is not defined は無視してok
  base: process.env.GITHUB_PAGES  
      ? "/yamada3.github.io/"  // デプロイ先のリポジトリ名を指定
      : "./",
  plugins: [
    react(),
    envCompatible(), // 追加
  ],
})
