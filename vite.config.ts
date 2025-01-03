import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['emailjs-com'], // Exclui emailjs-com do bundle
    },
  },
  base: 'portifolio-caio', // Adicione esta linha com o nome do seu repositório
});
