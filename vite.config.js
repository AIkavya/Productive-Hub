import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 👇 Add this line to match your new repository name
  base: '/Productive-Hub/',
  plugins: [react()],
})
