import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible'

export default defineConfig({
  base: "/yamada3.github.io/", // あなたのリポジトリ名に置き換えてください
  plugins: [
    react(),
    envCompatible(),
  ],
})
