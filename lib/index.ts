// 引入css
import './assets/index.css';
import ai from './assets/ai.svg';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var tianliGPT_postSelector: string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var tianliGPT_wordLimit: number;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var tianliGPT_key: string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var tianliGPT_typingAnimate: boolean;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var tianliGPT_postURL: string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var tianliGPT_Title: string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var tianliGPT_Name: string;
}
export {};


console.log(
  '\n %c Post-Abstract-AI 博客文章摘要AI生成工具 %c https://github.com/zhheo/Post-Abstract-AI \n',
  'color: #fadfa3; background: #030307; padding:5px 0;',
  'background: #fadfa3; padding:5px 0;'
);

function tianliGPT(usePjax: boolean) {
  let tianliGPTIsRunning = false;

  function insertAIDiv(selector: string) {
    // 首先移除现有的 "post-TianliGPT" 类元素（如果有的话）
    removeExistingAIDiv();

    // 获取目标元素
    const targetElement = document.querySelector(selector);

    // 如果没有找到目标元素，不执行任何操作
    if (!targetElement) {
      return;
    }

    // 创建要插入的HTML元素
    const aiDiv = document.createElement('div');
    aiDiv.className = 'post-TianliGPT';

    const aiTitleDiv = document.createElement('div');
    aiTitleDiv.className = 'tianliGPT-title';
    aiDiv.appendChild(aiTitleDiv);

    const aiIcon = document.createElement('i');
    aiIcon.className = 'tianliGPT-title-icon';
    aiTitleDiv.appendChild(aiIcon);

    // 插入 SVG 图标
    aiIcon.innerHTML = ai;

    const aiTitleTextDiv = document.createElement('div');
    aiTitleTextDiv.className = 'tianliGPT-title-text';
    if (typeof tianliGPT_Title === 'undefined') {
      aiTitleTextDiv.textContent = 'AI摘要';
    } else {
      aiTitleTextDiv.textContent = tianliGPT_Title;
    }
    aiTitleDiv.appendChild(aiTitleTextDiv);

    const aiTagDiv = document.createElement('div');
    aiTagDiv.className = 'tianliGPT-tag';
    aiTagDiv.id = 'tianliGPT-tag';
    if (typeof tianliGPT_Name === 'undefined') {
      aiTagDiv.textContent = 'TianliGPT';
    } else {
      aiTagDiv.textContent = tianliGPT_Name;
    }
    aiTitleDiv.appendChild(aiTagDiv);

    const aiExplanationDiv = document.createElement('div');
    aiExplanationDiv.className = 'tianliGPT-explanation';
    aiExplanationDiv.innerHTML = '生成中...' + '<span class="blinking-cursor"></span>';
    aiDiv.appendChild(aiExplanationDiv); // 将 tianliGPT-explanation 插入到 aiDiv，而不是 aiTitleDiv

    // 将创建的元素插入到目标元素的顶部
    targetElement.insertBefore(aiDiv, targetElement.firstChild);
  }

  function removeExistingAIDiv() {
    // 查找具有 "post-TianliGPT" 类的元素
    const existingAIDiv = document.querySelector('.post-TianliGPT');

    // 如果找到了这个元素，就从其父元素中删除它
    if (existingAIDiv) {
      existingAIDiv.parentElement?.removeChild(existingAIDiv);
    }
  }

  const tianliGPT = {
    //读取文章中的所有文本
    getTitleAndContent: function () {
      try {
        const title = document.title;
        const container = document.querySelector(tianliGPT_postSelector);
        if (!container) {
          console.warn(
            'TianliGPT：找不到文章容器。请尝试将引入的代码放入到文章容器之后。如果本身没有打算使用摘要功能可以忽略此提示。'
          );
          return '';
        }
        const paragraphs = container.getElementsByTagName('p');
        const headings = container.querySelectorAll('h1, h2, h3, h4, h5');
        let content = '';

        for (let h of headings) {
          content += (h as HTMLElement).innerText + ' ';
        }

        for (let p of paragraphs) {
          // 移除包含'http'的链接
          const filteredText = p.innerText.replace(/https?:\/\/[^\s]+/g, '');
          content += filteredText;
        }

        const combinedText = title + ' ' + content;
        let wordLimit = 1000;
        if (typeof tianliGPT_wordLimit !== 'undefined') {
          wordLimit = tianliGPT_wordLimit;
        }
        const truncatedText = combinedText.slice(0, wordLimit);
        return truncatedText;
      } catch (e) {
        console.error(
          'TianliGPT错误：可能由于一个或多个错误导致没有正常运行，原因出在获取文章容器中的内容失败，或者可能是在文章转换过程中失败。',
          e
        );
        return '';
      }
    },

    fetchTianliGPT: async function (content: string | number | boolean) {
      if (!tianliGPT_key) {
        const info =
          '没有获取到key，代码可能没有安装正确。如果你需要在tianli_gpt文件引用前定义tianliGPT_key变量。详细请查看文档。';
        tianliGPT.aiShowAnimation(info);
        return info;
      }

      if (tianliGPT_key === '5Q5mpqRK5DkwT1X9Gi5e') {
        const info = '请购买 key 使用，如果你能看到此条内容，则说明代码安装正确。';
        tianliGPT.aiShowAnimation(info);
        return info;
      }
      const url = window.location.href;
      const title = document.title;
      const apiUrl = `https://summary.tianli0.top/?content=${encodeURIComponent(
        content
      )}&key=${encodeURIComponent(tianliGPT_key)}&url=${encodeURIComponent(
        url
      )}&title=${encodeURIComponent(title)}`;
      const timeout = 20000; // 设置超时时间（毫秒）

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);
        const response = await fetch(apiUrl, { signal: controller.signal });
        clearTimeout(timeoutId); // 清除定时器，避免不必要的abort

        if (response.ok) {
          const data = await response.json();
          return {
            summary: data.summary
          };
        } else {
          let info = '';
          const errorData = await response.json(); // 假设错误响应也是JSON格式

          if (response.status === 514) {
            info =
              'TianliGPT is only available in mainland China, and is not yet open to overseas users, so stay tuned!';
            tianliGPT.aiShowAnimation(info);
            return info;
          }

          // 根据403错误处理
          if (response.status === 403) {
            switch (errorData.err_code) {
              case 1:
                // 你的具体错误处理逻辑，例如显示某个特定的错误信息
                info =
                  '你的网站设置了Referrer-Policy为same-origin，这会导致Tianli无法验证你的请求来源。TianliGPT依赖refer进行来源判断，特别是meta标签的referrer属性需要修改，至少为origin。例如：<meta name="referrer" content="origin">';
                tianliGPT.aiShowAnimation(info);
                return info;
              case 2:
                // 你的具体错误处理逻辑，例如显示某个特定的错误信息
                info =
                  '你正在使用的tianliGPT_key已经被其他网站绑定或不存在，请检查当前网站地址是否在summary.zhheo.com中已绑定。';
                tianliGPT.aiShowAnimation(info);
                return info;
              // 这里可以添加更多的err_code判断分支
              case 3:
                info = '参数缺失，请检查是否正确配置tianliGPT_key';
                tianliGPT.aiShowAnimation(info);
                return info;
              case 4:
                document.querySelectorAll('.post-TianliGPT').forEach(el => {
                  (el as HTMLElement).style.display = 'none';
                });
                info = 'Key错误或余额不足，请充值后请求新的文章';
                throw new Error('TianliGPT：' + info);
              case 5:
                info = errorData.err_msg;
                tianliGPT.aiShowAnimation(info);
                return info;
              case 6:
                info = errorData.err_msg;
                tianliGPT.aiShowAnimation(info);
                return info;
              case 7:
                info = errorData.err_msg;
                tianliGPT.aiShowAnimation(info);
                return info;
              default:
                // 默认的处理逻辑
                tianliGPT.aiShowAnimation('未知错误，请检查API文档');
                return '未知错误，请检查API文档';
            }
          }
          return '获取文章摘要失败，请稍后再试。';
        }
      } catch (error: any) {
        if (error.name === 'AbortError') {
          if (window.location.hostname === 'localhost') {
            console.warn('警告：请勿在本地主机上测试 API 密钥。');
            return '获取文章摘要超时。请勿在本地主机上测试 API 密钥。';
          } else {
            console.error('请求超时');
            return '获取文章摘要超时。当你出现这个问题时，可能是key或者绑定的域名不正确。也可能是因为文章过长导致的 AI 运算量过大，您可以稍等一下然后刷新页面重试。';
          }
        } else {
          console.error('请求失败：', error);
          return '获取文章摘要失败，请稍后再试。';
        }
      }
    },

    aiShowAnimation: function (text = '') {
      const element = document.querySelector('.tianliGPT-explanation');
      if (!element) {
        return;
      }

      if (tianliGPTIsRunning) {
        return;
      }

      // 检查用户是否已定义tianliGPT_typingAnimate并且其值为false
      if (typeof tianliGPT_typingAnimate !== 'undefined' && !tianliGPT_typingAnimate) {
        // 如果用户已定义tianliGPT_typingAnimate并且其值为false，则立即显示完整文本
        element.innerHTML = text;
        return;
      }

      tianliGPTIsRunning = true;
      const typingDelay = 25;
      // const waitingTime = 1000;
      const punctuationDelayMultiplier = 6;

      (element as HTMLElement).style.display = 'block';
      element.innerHTML = '生成中...' + '<span class="blinking-cursor"></span>';

      //给AItag添加动画
      const aiTag = document.querySelector('.tianliGPT-tag');
      aiTag?.classList.add('loadingAI');

      let animationRunning = true;
      let currentIndex = 0;
      let initialAnimation = true;
      let lastUpdateTime = performance.now();

      const animate = () => {
        if (currentIndex < text.length && animationRunning) {
          const currentTime = performance.now();
          const timeDiff = currentTime - lastUpdateTime;

          const letter = text.slice(currentIndex, currentIndex + 1);
          const isPunctuation = /[，。！、？,.!?]/.test(letter);
          const delay = isPunctuation ? typingDelay * punctuationDelayMultiplier : typingDelay;

          if (timeDiff >= delay) {
            (element as HTMLElement).innerText = text.slice(0, currentIndex + 1);
            lastUpdateTime = currentTime;
            currentIndex++;

            if (currentIndex < text.length) {
              element.innerHTML =
                text.slice(0, currentIndex) + '<span class="blinking-cursor"></span>';
            } else {
              element.innerHTML = text;
              (element as HTMLElement).style.display = 'block';
              tianliGPTIsRunning = false;
              observer.disconnect(); // 暂停监听
              //给AItag停止动画
              const aiTag = document.querySelector('.tianliGPT-tag');
              aiTag?.classList.remove('loadingAI');
            }
          }
          requestAnimationFrame(animate);
        }
      };

      // 使用IntersectionObserver对象优化ai离开视口后暂停的业务逻辑，提高性能
      const observer = new IntersectionObserver(
        entries => {
          let isVisible = entries[0].isIntersecting;
          animationRunning = isVisible; // 标志变量更新
          if (animationRunning && initialAnimation) {
            setTimeout(() => {
              requestAnimationFrame(animate);
            }, 200);
          }
        },
        { threshold: 0 }
      );
      let post_ai = document.querySelector('.post-TianliGPT');
      if (post_ai) {
        observer.observe(post_ai); //启动新监听
      }
    }
  };
  function runTianliGPT() {
    insertAIDiv(tianliGPT_postSelector);
    const content = tianliGPT.getTitleAndContent();
    if (content) {
      console.log('TianliGPT本次提交的内容为：' + content);
    }
    tianliGPT.fetchTianliGPT(content).then(data => {
      if (typeof data === 'string') {
        // console.error('TianliGPT：' + data);
        return;
      }
      const summary = data?.summary;
      tianliGPT.aiShowAnimation(summary);
    });
  }

  function checkURLAndRun() {
    if (typeof tianliGPT_postURL === 'undefined') {
      runTianliGPT(); // 如果没有设置自定义 URL，则直接执行 runTianliGPT() 函数
      return;
    }

    try {
      const wildcardToRegExp = (s: string) => {
        return new RegExp('^' + s.split(/\*+/).map(regExpEscape).join('.*') + '$');
      };

      const regExpEscape = (s: string) => {
        return s.replace(/[|\\{}()[\]^$+*?.]/g, '\\{{input}}');
      };

      const urlPattern = wildcardToRegExp(tianliGPT_postURL);
      const currentURL = window.location.href;

      if (urlPattern.test(currentURL)) {
        runTianliGPT(); // 如果当前 URL 符合用户设置的 URL，则执行 runTianliGPT() 函数
      } else {
        console.log('TianliGPT：因为不符合自定义的链接规则，我决定不执行摘要功能。');
      }
    } catch (error) {
      console.error('TianliGPT：我没有看懂你编写的自定义链接规则，所以我决定不执行摘要功能', error);
    }
  }

  if (usePjax) {
    checkURLAndRun();
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      checkURLAndRun();
    });
  }
}

tianliGPT(false);

document.addEventListener('pjax:complete', function () {
  tianliGPT(true);
});
