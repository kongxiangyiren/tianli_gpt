// vite压缩svg文件
import { Plugin } from 'vite';
import { readFileSync } from 'fs';
import { optimize } from 'svgo';

export default function svgPlugin(): Plugin {
  return {
    name: 'svgPlugin',
    transform(src, id) {
      if (id.endsWith('.svg')) {
        const svg = readFileSync(id, 'utf-8');
        // 压缩svg文件 保留viewbox
        const { data: code } = optimize(svg, {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  // disable a default plugin
                  removeViewBox: false,

                  cleanupIds: {
                    remove: false
                  },
                  // 移除title
                  // removeTitle: false,

                  // customize the params of a default plugin
                  inlineStyles: {
                    onlyMatchedOnce: false
                  }
                }
              }
            }
          ]
        });

        return `export default ${JSON.stringify(code)}`;
      }
    }
  };
}
