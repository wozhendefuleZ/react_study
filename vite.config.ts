import { defineConfig } from 'vite';
import * as path from 'path'
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [UnoCSS(), react()],
});
