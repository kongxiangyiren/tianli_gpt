// 引入css
import './assets/index.css';
import ai from './assets/ai.svg?raw';

console.log(
  '\n %c Post-Abstract-AI 开源博客文章摘要AI生成工具 %c https://github.com/zhheo/Post-Abstract-AI \n',
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
    aiTitleTextDiv.textContent = 'AI摘要';
    aiTitleDiv.appendChild(aiTitleTextDiv);

    const aiTagDiv = document.createElement('div');
    aiTagDiv.className = 'tianliGPT-tag';
    aiTagDiv.id = 'tianliGPT-tag';
    aiTagDiv.textContent = 'TianliGPT';
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
        return '没有获取到key，代码可能没有安装正确。如果你需要在tianli_gpt文件引用前定义tianliGPT_key变量。详细请查看文档。';
      }

      if (tianliGPT_key === '5Q5mpqRK5DkwT1X9Gi5e') {
        return '请购买 key 使用，如果你能看到此条内容，则说明代码安装正确。';
      }
      const url = window.location.href;
      const title = document.title;
      const apiUrl = `https://summary.tianli0.top/?content=${encodeURIComponent(
        content
      )}&key=${encodeURIComponent(tianliGPT_key)}&url=${encodeURIComponent(
        url
      )}&title=${encodeURIComponent(title)}`;
      // const timeout = 20000; // 设置超时时间（毫秒）

      try {
        const controller = new AbortController();
        // const timeoutId = setTimeout(() => controller.abort(), timeout);
        const response = await fetch(apiUrl, { signal: controller.signal });
        if (response.ok) {
          const data = await response.json();
          return {
            summary: data.summary,
            audioId: data.id // 获取音频的 ID
          };
        } else {
          if (response.status === 402) {
            document.querySelectorAll('.post-TianliGPT').forEach(el => {
              (el as HTMLElement).style.display = 'none';
            });
          }
          throw new Error('TianliGPT：余额不足，请充值后请求新的文章');
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
      // @ts-expect-error
      const summary = data.summary;
      // @ts-expect-error
      const audioId = data.audioId;
      const buttonDiv = document.querySelector('.tianliGPT-tag') as HTMLElement | null;
      if (!buttonDiv) {
        return;
      }
      buttonDiv.dataset.audioId = audioId; // 将音频的 ID 存储在按钮的 dataset 属性中
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

document.addEventListener('click', function (event) {
  const target = event.target as HTMLElement | null;
  if (!target) {
    return;
  }
  if (target.classList.contains('tianliGPT-tag')) {
    playAudio();
  }
});

let audioPlayer: HTMLAudioElement | null = null; // 用于存储音频播放器对象
function playAudio() {
  if (audioPlayer && !audioPlayer.paused) {
    audioPlayer.pause();
  } else {
    if (!audioPlayer) {
      const buttonDiv = document.querySelector('.tianliGPT-tag') as HTMLElement | null;
      if (!buttonDiv) {
        return;
      }
      const audioId = buttonDiv.dataset.audioId;

      if (!audioId) {
        console.error('未找到音频 ID');
        return;
      }

      const audioUrl = `https://summary.tianli0.top/audio?id=${encodeURIComponent(
        audioId
      )}&key=${encodeURIComponent(tianliGPT_key)}`;

      audioPlayer = new Audio(audioUrl);
      audioPlayer.addEventListener('ended', () => {
        buttonDiv.classList.remove('playing');
      });

      audioPlayer.addEventListener('play', () => {
        buttonDiv.classList.add('playing');
      });

      audioPlayer.addEventListener('pause', () => {
        buttonDiv.classList.remove('playing');
      });
    }

    setTimeout(() => {
      audioPlayer?.play().catch(error => {
        console.error('播放音频失败:', error);
      });
    }, 100); // 添加延迟以确保播放请求能够正常执行
  }

  const buttonDiv = document.querySelector('.tianliGPT-tag') as HTMLElement | null;
  if (!buttonDiv) {
    return;
  }

  buttonDiv.addEventListener('click', function () {
    buttonDiv.classList.toggle('playing');
  });

  const svgAnimation =
    '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1692880829044" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2346" data-darkreader-inline-fill="" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M512 1024a512 512 0 1 0 0-1024 512 512 0 1 0 0 1024z m0-704a192 192 0 1 1 0 384 192 192 0 1 1 0-384z" p-id="2347"></path></svg>';

  if (buttonDiv.classList.contains('playing')) {
    buttonDiv.innerHTML = svgAnimation;
    buttonDiv.style.animation = '';
    buttonDiv.style.color = '#ff0000';
    buttonDiv.style.backgroundColor = 'transparent';
    buttonDiv.style.padding = '0';
  } else {
    buttonDiv.innerHTML = svgAnimation;
    buttonDiv.style.animation = '';
    buttonDiv.style.color = '#000000';
    buttonDiv.style.backgroundColor = 'transparent';
    buttonDiv.style.padding = '0';
  }
}

document.addEventListener('click', function (event) {
  const target: any = event.target;
  const buttonDiv = document.querySelector('.tianliGPT-tag') as HTMLElement | null;

  if (buttonDiv) {
    buttonDiv.addEventListener('click', function () {
      buttonDiv.classList.toggle('playing');
    });

    if (target === buttonDiv || buttonDiv.contains(target)) {
      playAudio();
    }
  }
});

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
}
export {};
