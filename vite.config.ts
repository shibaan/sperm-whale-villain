import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // ใช้ path แบบ relative เพื่อให้ทำงานได้ทั้งบน localhost และ GitHub Pages
  // (https://<user>.github.io/<repo>/) โดยไม่ต้องผูกกับชื่อ repo
  base: './',
});
