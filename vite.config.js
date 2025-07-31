import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'lnlink-mcp-service',
      fileName: 'index',
      formats: ['es']
    },
    target: 'node18',
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: [
        '@modelcontextprotocol/sdk/server/mcp.js',
        '@modelcontextprotocol/sdk/server/stdio.js',
        'lnlink-js-sdk',
        'zod'
      ],
      output: {
        entryFileNames: '[name].js',
        format: 'es'
      }
    },
    minify: false
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  }
}); 