import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import tsconfigPaths from 'vite-tsconfig-paths';
import sitemap from 'vite-plugin-sitemap';
import svgr from 'vite-plugin-svgr';
import webfontDownload from 'vite-plugin-webfont-dl';
import preload from 'vite-plugin-preload';

export default defineConfig({
  plugins: [
    preload({
      includeJs: true,
      includeCss: true,
    }),
    react(),
    svgr(),
    sitemap({
      hostname: 'https://onedun.com/',
      basePath: '',
      outDir: 'dist',
      extensions: ['html'],
      readable: true,
      generateRobotsTxt: true,
      robots: [{ userAgent: '*', allow: '/' }],
    }),

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
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
  base: './',
  server: {
    port: 3000,
  },
});
