import { InlineConfig, build } from "vite";
import { resolve, dirname, parse } from "path";
import { fileURLToPath } from "url";
// import dts from "vite-plugin-dts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const entries = ["../src/tianli_gpt.ts"];

// 动态生成配置build配置选项
const profiles = entries.flatMap((file): InlineConfig => {
  return {
    build: {
      emptyOutDir: false,
      // 禁用压缩报告
      reportCompressedSize: false,
      lib: {
        name: "tianliGPT",
        formats: ["umd"],
        entry: resolve(__dirname, file),
        fileName: (format) => parse(file).name + ".min.js",
      },
      rollupOptions: {
        output: {
          assetFileNames: 'tianli_gpt.[ext]'
        }
      },
    },
    plugins: [
      // dts({
      //   entryRoot: "src",
      //   copyDtsFiles: false,
      //   insertTypesEntry: true,
      //   // // 不需要.d.ts 文件
      //   // beforeWriteFile: (filePath: string, content: string) => false
      // }),
    ],
  };
});

// 入口
async function main() {
  // 遍历配置选项，手动调用build方法
  for (const profile of profiles) {
    await build(profile);
  }
}

await main();

// // 编译sass
// const result = await sass.compileAsync(
//   resolve(__dirname, "../src/assets/index.scss"),
//   {
//     style: "compressed",
//   }
// );
// writeFileSync(resolve(__dirname, "../dist/tianli_gpt.css"), result.css);
