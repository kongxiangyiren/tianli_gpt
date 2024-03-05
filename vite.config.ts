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
  },
  // 通过修改hosts 可以进行本地调试
  // server: {
  //   host: true,
  //   port: 443,
  //   // 可以通过 mkcert生成自签名证书, mkcert -install  , mkcert 127.0.0.1 localhost key 匹配的域名 ,https://github.com/FiloSottile/mkcert/releases/latest
  //   https: {
  //     key: './ssl/127.0.0.1+3-key.pem',
  //     cert: './ssl/127.0.0.1+3.pem'
  //   }
  // }
});
