import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const pathResolver = (_path: string) => path.resolve(__dirname, `./src/${_path}`)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": pathResolver('app'), 
      '@components': pathResolver('components'),
      '@assets': pathResolver('assets'),
      '@contexts': pathResolver('contexts'),
      '@pages': pathResolver('pages'),
      '@configs': pathResolver('configs'),
      '@hooks': pathResolver('hooks'),
      'store': pathResolver('store'),
      '@utilities': pathResolver('utilities'),
      '@layouts': pathResolver('layouts'),
      '@data': pathResolver('data')
    }
  }
})
