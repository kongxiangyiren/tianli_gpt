import './style.css';
import test from './test.html?raw';
import '../lib';

// gpt配置信息
// window.tianliGPT_postURL = '*/posts/*';
window.tianliGPT_postSelector = '#post #article-container';
window.tianliGPT_key = '5Q5mpqRK5DkwT1X9Gi5e';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = test;
