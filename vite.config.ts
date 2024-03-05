import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import svgPlugin from './plugins/svg';
export default defineConfig({
  plugins: [
    svgPlugin(),
    cssInjectedByJsPlugin(),
    dts({
      entryRoot: './lib',
      copyDtsFiles: false,
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.build.json'
    })
  ],
  build: {
    copyPublicDir: false,
    reportCompressedSize: false,
    lib: {
      entry: './lib/index.ts',
      name: 'tianliGPT',
      formats: ['umd', 'es', 'cjs'],
      fileName: format =>
        `tianli_gpt.${format === 'umd' ? 'min.js' : format === 'es' ? 'mjs' : 'cjs'}`
    },
    rollupOptions: {
      output: {
        assetFileNames: 'tianli_gpt.[ext]'
      }
    }
  }
});
