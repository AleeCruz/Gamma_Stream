import { defineConfig } from 'vite'

export default defineConfig({
  // El "base" debe ser el nombre de tu repositorio en GitHub
  // Esto asegura que las rutas de tus assets sean relativas al repo
  base: '/Gamma_Stream/', 
  
  server: {
    // Esto es opcional, pero ayuda a que el servidor local abra más rápido
    host: true,
    open: true 
  },
  
  build: {
    // Optimiza la salida para que Three.js cargue mejor
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
