import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import tsconfigPaths from 'vite-tsconfig-paths';
import webfontDownload from 'vite-plugin-webfont-dl';
import preload from 'vite-plugin-preload';

export default defineConfig(() => {
  return {
    plugins: [
      preload({
        includeJs: true,
        includeCss: true,
      }),
      react(),
      webfontDownload([
        'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital@0;1&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap',
      ]),
      viteCompression({
        algorithm: 'brotliCompress',
        ext: '.brotli',
        threshold: 10240,
        compressionOptions: { level: 12 },
      }),
      viteCompression({
        algorithm: 'gzip',
        ext: '.gz',
        threshold: 10240,
      }),
      ViteImageOptimizer({
        svg: {
          plugins: [],
        },
        png: {
          quality: 70,
        },
        jpeg: {
          quality: 70,
        },
        jpg: {
          quality: 70,
        },
        tiff: {
          quality: 70,
        },
        webp: {
          quality: 70,
        },
      }),
      tsconfigPaths(),
    ],

    rollupOptions: {
      treeshake: true,
    },
    base: '/max-line-test/',
    minify: 'terser',
    build: {
      cssMinify: true,
      optimizeDeps: {
        dedupe: ['react', 'react-dom', 'react-router-dom', 'axios'],
        esbuildOptions: {
          minify: true,
          target: 'es2015',
          legalComments: 'none',
        },
      },
      assetsInlineLimit: 0,
    },
  };
});
