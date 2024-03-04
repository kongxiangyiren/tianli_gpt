import './style.css';
import test from './test.html?raw';
import '../lib';
// window.tianliGPT_postURL = '*/posts/*';
window.tianliGPT_postSelector = '#post #article-container';
window.tianliGPT_key = '5Q5mpqRK5DkwT1X9Gi5e';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = test;
