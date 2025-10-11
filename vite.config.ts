import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const REPO_NAME = 'a-duffy12.github.io';

export default defineConfig({
  plugins: [react({
    jsxRuntime: 'automatic'
 })],
  base: '/',
  build: {
    target: 'es2020'
  }
});
