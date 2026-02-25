import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ base 要填你的 Repo 名稱
// 例如 repo 是 https://github.com/xxx/my-site
// base 就是 "/my-site/"
export default defineConfig({
  base: '/react-todo/',
  plugins: [react()],
})