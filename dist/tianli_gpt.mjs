(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(":root{--heo-white: #fff;--heo-white-op: rgba(255, 255, 255, .2);--heo-black: #000;--heo-black-op: rgba(0, 0, 0, .2);--heo-none: #00000000;--heo-gray: #999999;--heo-gray-op: #9999992b;--heo-vip: #e5a80d;--heo-main: var(--heo-theme);--heo-main-op: var(--heo-theme-op);--heo-main-op-deep: var(--heo-theme-op-deep);--heo-main-none: var(--heo-theme-none);--heo-shadow-theme: 0 8px 12px -3px var(--heo-theme-op);--heo-shadow-blackdeep: 0 2px 16px -3px rgba(0, 0, 0, .15);--heo-shadow-main: 0 8px 12px -3px var(--heo-main-op);--heo-shadow-blue: 0 8px 12px -3px rgba(40, 109, 234, .2);--heo-shadow-white: 0 8px 12px -3px rgba(255, 255, 255, .2);--heo-shadow-black: 0 0 12px 4px rgba(0, 0, 0, .05);--heo-shadow-yellow: 0px 38px 77px -26px rgba(255, 201, 62, .12);--heo-shadow-red: 0 8px 12px -3px #ee7d7936;--heo-shadow-green: 0 8px 12px -3px #87ee7936;--heo-logo-color: linear-gradient(215deg, #4584ff 0%, #cf0db9 100%);--heo-snackbar-time: 5s;--heo-theme: #425aef;--heo-theme-op: #4259ef23;--heo-theme-op-deep: #4259efdd;--heo-theme-none: #4259ef01;--heo-blue: #425aef;--heo-red: #f04a63;--heo-pink: #ff7c7c;--heo-green: #57bd6a;--heo-yellow: #c28b00;--heo-yellow-op: #d99c001a;--heo-orange: #e38100;--heo-fontcolor: #363636;--heo-background: #f7f9fe;--heo-reverse: #000;--heo-maskbg: rgba(255, 255, 255, .6);--heo-maskbgdeep: rgba(255, 255, 255, .85);--heo-hovertext: var(--heo-main);--heo-ahoverbg: #f7f7fa;--heo-lighttext: var(--heo-main);--heo-secondtext: rgba(60, 60, 67, .8);--heo-scrollbar: rgba(60, 60, 67, .4);--heo-card-btn-bg: #edf0f7;--heo-post-blockquote-bg: #fafcff;--heo-post-tabs-bg: #f2f5f8;--heo-secondbg: #f1f3f8;--heo-shadow-nav: 0 5px 12px -5px rgba(102, 68, 68, .05);--heo-card-bg: #fff;--heo-card-bg-op: var(--heo-black-op);--heo-card-bg-none: rgba(255, 255, 255, 0);--heo-shadow-lightblack: 0 5px 12px -5px rgba(102, 68, 68, 0);--heo-shadow-light2black: 0 5px 12px -5px rgba(102, 68, 68, 0);--heo-card-border: #e3e8f7;--heo-shadow-border: 0 8px 16px -4px #2c2d300c;--style-border: 1px solid var(--heo-card-border);--style-border-always: 1px solid var(--heo-card-border);--style-border-hover: 1px solid var(--heo-main);--style-border-hover-always: 1px solid var(--heo-main);--style-border-dashed: 1px dashed var(--heo-theme-op);--style-border-forever: 2px solid var(--heo-main)}[data-theme=light]{--heo-theme: #425aef;--heo-theme-op: #4259ef23;--heo-theme-op-deep: #4259efdd;--heo-theme-none: #4259ef01;--heo-blue: #425aef;--heo-red: #f04a63;--heo-pink: #ff7c7c;--heo-green: #57bd6a;--heo-yellow: #c28b00;--heo-yellow-op: #d99c001a;--heo-orange: #e38100;--heo-fontcolor: #363636;--heo-background: #f7f9fe;--heo-reverse: #000;--heo-maskbg: rgba(255, 255, 255, .6);--heo-maskbgdeep: rgba(255, 255, 255, .85);--heo-hovertext: var(--heo-main);--heo-ahoverbg: #f7f7fa;--heo-lighttext: var(--heo-main);--heo-secondtext: rgba(60, 60, 67, .8);--heo-scrollbar: rgba(60, 60, 67, .4);--heo-card-btn-bg: #edf0f7;--heo-post-blockquote-bg: #fafcff;--heo-post-tabs-bg: #f2f5f8;--heo-secondbg: #f1f3f8;--heo-shadow-nav: 0 5px 12px -5px rgba(102, 68, 68, .05);--heo-card-bg: #fff;--heo-card-bg-op: var(--heo-black-op);--heo-card-bg-none: rgba(255, 255, 255, 0);--heo-shadow-lightblack: 0 5px 12px -5px rgba(102, 68, 68, 0);--heo-shadow-light2black: 0 5px 12px -5px rgba(102, 68, 68, 0);--heo-card-border: #e3e8f7;--heo-shadow-border: 0 8px 16px -4px #2c2d300c;--style-border: 1px solid var(--heo-card-border);--style-border-always: 1px solid var(--heo-card-border);--style-border-hover: 1px solid var(--heo-main);--style-border-hover-always: 1px solid var(--heo-main);--style-border-dashed: 1px dashed var(--heo-theme-op);--style-border-forever: 2px solid var(--heo-main)}[data-theme=dark],body.dark,body.dark-theme,[eagle-extension-theme=dark],body.dark-open,[color-scheme=dark],[data-scheme=inverse]{--heo-theme: #f2b94b;--heo-theme-op: #f2b94b23;--heo-theme-op-deep: #f2b94bdd;--heo-theme-none: #f2b94b00;--heo-blue: #0084ff;--heo-red: #ff3842;--heo-pink: #d44040;--heo-green: #3e9f50;--heo-yellow: #ffc93e;--heo-yellow-op: #ffc93e30;--heo-orange: #ff953e;--heo-fontcolor: #f7f7fa;--heo-background: #18171d;--heo-reverse: #fff;--heo-maskbg: rgba(0, 0, 0, .6);--heo-maskbgdeep: rgba(0, 0, 0, .85);--heo-hovertext: #0a84ff;--heo-ahoverbg: #fff;--heo-lighttext: var(--heo-theme);--heo-secondtext: #a1a2b8;--heo-scrollbar: rgba(200, 200, 223, .4);--heo-card-btn-bg: #30343f;--heo-post-blockquote-bg: #000;--heo-post-tabs-bg: #121212;--heo-secondbg: #30343f;--heo-shadow-nav: 0 5px 20px 0px rgba(28, 28, 28, .4);--heo-card-bg: #1d1e22;--heo-card-bg-op: var(--heo-white-op);--heo-card-bg-none: #1d1b2600;--heo-shadow-lightblack: 0 5px 12px -5px rgba(102, 68, 68, 0);--heo-shadow-light2black: 0 5px 12px -5px rgba(102, 68, 68, 0);--heo-card-border: #3d3d3f;--heo-shadow-border: 0 8px 16px -4px #00000050;--style-border: 1px solid var(--heo-card-border);--style-border-always: 1px solid var(--heo-card-border);--style-border-hover: 1px solid var(--heo-theme);--style-border-hover-always: 1px solid var(--heo-theme);--style-border-dashed: 1px dashed var(--heo-theme-op);--style-border-forever: 2px solid var(--heo-lighttext)}.post-TianliGPT{background:var(--heo-secondbg);border-radius:12px;padding:12px;line-height:1.3;border:var(--style-border-always);margin:16px 0}@media screen and (max-width: 768px){.post-TianliGPT{margin-top:22px}}.tianliGPT-title{display:flex;color:var(--heo-lighttext);border-radius:8px;align-items:center;padding:0 12px;cursor:default;-webkit-user-select:none;user-select:none;position:relative}.tianliGPT-title-text{font-weight:700;margin-left:8px;line-height:1}.tianliGPT-explanation{margin-top:12px;padding:8px 12px;background:var(--heo-card-bg);border-radius:8px;border:var(--style-border-always);font-size:15px;line-height:1.4;display:block;color:var(--heo-fontcolor)}.tianliGPT-suggestions{display:flex;flex-wrap:wrap}.tianliGPT-suggestions .tianliGPT-suggestions-item{margin-top:12px;padding:8px 12px;background:var(--heo-card-bg);border-radius:8px 8px 8px 0;border:var(--style-border-always);font-size:15px;line-height:1.4;display:flex;width:fit-content;margin-right:12px;cursor:pointer;transition:.3s}.tianliGPT-suggestions .tianliGPT-suggestions-item:hover{background:var(--heo-main);color:var(--heo-white)}.blinking-cursor{background-color:var(--heo-lighttext);width:14px;height:14px;border-radius:16px;display:inline-block;vertical-align:middle;animation:blinking-cursor 2s infinite;-webkit-animation:blinking-cursor 2s infinite;margin-left:4px;margin-bottom:3px;transform:scale(.6)}@keyframes blinking-cursor{0%{transform:scale(.6)}25%{transform:scale(1)}50%{transform:scale(.6)}75%{transform:scale(1)}to{transform:scale(.6)}}.tianliGPT-tag{font-size:12px;background-color:var(--heo-lighttext);box-shadow:var(--heo-shadow-main);color:var(--heo-card-bg);font-weight:700;border-radius:12px;margin-left:auto;line-height:12px;padding:6px 8px;display:flex;align-items:center;justify-content:center;transition:.3s}.tianliGPT-tag.loadingAI{animation-duration:2s;animation-name:AILoading;animation-iteration-count:infinite;animation-direction:alternate;cursor:default}@keyframes AILoading{0%{opacity:1}25%{opacity:.3}50%{opacity:1}75%{opacity:.3}to{opacity:1}}ins.adsbygoogle{margin:16px 0;background:var(--heo-card-bg);border-radius:12px;overflow:hidden;border:var(--style-border-always)}#tianliGPT-Toggle{font-size:12px;background:var(--heo-lighttext);color:var(--heo-card-bg);padding:4px;border-radius:4px;margin-left:6px;transform:scale(.8);cursor:pointer;transition:.3s;font-weight:700}#tianliGPT-Toggle:hover{background:var(--heo-fontcolor);color:var(--heo-card-bg)}.tianliGPT-title-icon{width:24px;height:24px;display:flex;background:var(--heo-lighttext);color:var(--heo-card-bg);font-size:14px;border-radius:20px;justify-content:center;align-items:center}.tianliGPT-title-icon svg{width:14px;height:14px;fill:var(--heo-card-bg)}.tianliGPT-title-icon svg path{fill:var(--heo-card-bg)}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
const I = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g id="机器人" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><path id="形状结合" fill="#444" fill-rule="nonzero" d="M34.718 5.036a2.59 2.59 0 0 1 2.127 2.977l-1.05 6.302h2.58A8.625 8.625 0 0 1 47 22.94v11.5a8.625 8.625 0 0 1-8.625 8.625H9.625A8.625 8.625 0 0 1 1 34.44v-11.5a8.625 8.625 0 0 1 8.625-8.625h2.58l-1.05-6.302a2.588 2.588 0 0 1 5.105-.85l1.15 6.9q.021.127.03.252h13.12q.009-.126.03-.253l1.15-6.9a2.59 2.59 0 0 1 2.978-2.126m3.657 14.454H9.625a3.45 3.45 0 0 0-3.45 3.45v11.5a3.45 3.45 0 0 0 3.45 3.45h28.75a3.45 3.45 0 0 0 3.45-3.45v-11.5a3.45 3.45 0 0 0-3.45-3.45m-23.517 4.313a2.59 2.59 0 0 1 2.587 2.587v2.3a2.588 2.588 0 0 1-5.175 0v-2.3a2.59 2.59 0 0 1 2.588-2.587m18.284 0a2.59 2.59 0 0 1 2.588 2.587v2.3a2.588 2.588 0 0 1-5.175 0v-2.3a2.59 2.59 0 0 1 2.587-2.587"/></g></svg>';
console.log(
  `
 %c Post-Abstract-AI 博客文章摘要AI生成工具 %c https://github.com/zhheo/Post-Abstract-AI 
`,
  "color: #fadfa3; background: #030307; padding:5px 0;",
  "background: #fadfa3; padding:5px 0;"
);
function P(u) {
  let m = !1;
  function h(t) {
    A();
    let n = document.querySelector(t);
    if (!n) {
      let f = 0;
      const T = setInterval(() => {
        if (f += 300, n = document.querySelector(t), n)
          clearInterval(T);
        else if (f >= 2e4) {
          clearInterval(T), console.log("超时未找到元素");
          return;
        }
      }, 300);
      return;
    }
    const o = document.createElement("div");
    o.className = "post-TianliGPT";
    const i = document.createElement("div");
    i.className = "tianliGPT-title", o.appendChild(i);
    const a = document.createElement("i");
    a.className = "tianliGPT-title-icon", i.appendChild(a), a.innerHTML = I;
    const r = document.createElement("div");
    r.className = "tianliGPT-title-text", typeof tianliGPT_Title > "u" ? r.textContent = "AI摘要" : r.textContent = tianliGPT_Title, i.appendChild(r);
    const e = document.createElement("div");
    e.className = "tianliGPT-tag", e.id = "tianliGPT-tag", typeof tianliGPT_Name > "u" ? e.textContent = "TianliGPT" : e.textContent = tianliGPT_Name, i.appendChild(e);
    const s = document.createElement("div");
    s.className = "tianliGPT-explanation", s.innerHTML = '生成中...<span class="blinking-cursor"></span>', o.appendChild(s), n.insertBefore(o, n.firstChild);
  }
  function A() {
    var n;
    const t = document.querySelector(".post-TianliGPT");
    t && ((n = t.parentElement) == null || n.removeChild(t));
  }
  const l = {
    //读取文章中的所有文本
    getTitleAndContent: function() {
      try {
        const t = document.title, n = document.querySelector(tianliGPT_postSelector);
        if (!n)
          return console.warn(
            "TianliGPT：找不到文章容器。请尝试将引入的代码放入到文章容器之后。如果本身没有打算使用摘要功能可以忽略此提示。"
          ), "";
        const o = n.getElementsByTagName("p"), i = n.querySelectorAll("h1, h2, h3, h4, h5");
        let a = "";
        for (let c of i)
          a += c.innerText + " ";
        for (let c of o) {
          const d = c.innerText.replace(/https?:\/\/[^\s]+/g, "");
          a += d;
        }
        const r = t + " " + a;
        let e = 1e3;
        return typeof tianliGPT_wordLimit < "u" && (e = tianliGPT_wordLimit), r.slice(0, e);
      } catch (t) {
        return console.error(
          "TianliGPT错误：可能由于一个或多个错误导致没有正常运行，原因出在获取文章容器中的内容失败，或者可能是在文章转换过程中失败。",
          t
        ), "";
      }
    },
    fetchTianliGPT: async function(t) {
      if (!tianliGPT_key) {
        const i = "没有获取到key，代码可能没有安装正确。如果你需要在tianli_gpt文件引用前定义tianliGPT_key变量。详细请查看文档。";
        return l.aiShowAnimation(i), i;
      }
      if (tianliGPT_key === "5Q5mpqRK5DkwT1X9Gi5e") {
        const i = "请购买 key 使用，如果你能看到此条内容，则说明代码安装正确。";
        return l.aiShowAnimation(i), i;
      }
      const n = "https://summary.tianli0.top/", o = 2e4;
      try {
        const i = new AbortController(), a = setTimeout(() => i.abort(), o), r = await fetch(n, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            content: t,
            key: tianliGPT_key,
            url: window.location.href,
            title: document.title
          }),
          signal: i.signal
        });
        if (clearTimeout(a), r.ok)
          return {
            summary: (await r.json()).summary
          };
        {
          let e = "";
          const s = await r.json();
          if (r.status === 514)
            return e = "TianliGPT is only available in mainland China, and is not yet open to overseas users, so stay tuned!", l.aiShowAnimation(e), e;
          if (r.status === 403)
            switch (s.err_code) {
              case 1:
                return e = '你的网站设置了Referrer-Policy为same-origin，这会导致Tianli无法验证你的请求来源。TianliGPT依赖refer进行来源判断，特别是meta标签的referrer属性需要修改，至少为origin。例如：<meta name="referrer" content="origin">', l.aiShowAnimation(e), e;
              case 2:
                return e = "你正在使用的tianliGPT_key已经被其他网站绑定或不存在，请检查当前网站地址是否在summary.zhheo.com中已绑定。", l.aiShowAnimation(e), e;
              case 3:
                return e = "参数缺失，请检查是否正确配置tianliGPT_key", l.aiShowAnimation(e), e;
              case 4:
                throw document.querySelectorAll(".post-TianliGPT").forEach((c) => {
                  c.style.display = "none";
                }), e = "Key错误或余额不足，请充值后请求新的文章", new Error("TianliGPT：" + e);
              case 5:
                return e = s.err_msg, l.aiShowAnimation(e), e;
              case 6:
                return e = s.err_msg, l.aiShowAnimation(e), e;
              case 7:
                return e = s.err_msg, l.aiShowAnimation(e), e;
              default:
                return l.aiShowAnimation("未知错误，请检查API文档"), "未知错误，请检查API文档";
            }
          return l.aiShowAnimation("获取文章摘要失败，请稍后再试。"), "获取文章摘要失败，请稍后再试。";
        }
      } catch (i) {
        return i.name === "AbortError" ? window.location.hostname === "localhost" ? (console.warn("警告：请勿在本地主机上测试 API 密钥。"), "获取文章摘要超时。请勿在本地主机上测试 API 密钥。") : (console.error("请求超时"), "获取文章摘要超时。当你出现这个问题时，可能是key或者绑定的域名不正确。也可能是因为文章过长导致的 AI 运算量过大，您可以稍等一下然后刷新页面重试。") : (console.error("请求失败：", i), "获取文章摘要失败，请稍后再试。");
      }
    },
    aiShowAnimation: function(t = "") {
      const n = document.querySelector(".tianliGPT-explanation");
      if (!n || m)
        return;
      if (typeof tianliGPT_typingAnimate < "u" && !tianliGPT_typingAnimate) {
        n.innerHTML = t;
        return;
      }
      m = !0;
      const o = 25, i = 6;
      n.style.display = "block", n.innerHTML = '生成中...<span class="blinking-cursor"></span>';
      const a = document.querySelector(".tianliGPT-tag");
      a == null || a.classList.add("loadingAI");
      let r = !0, e = 0, s = !0, c = performance.now();
      const d = () => {
        if (e < t.length && r) {
          const p = performance.now(), v = p - c, k = t.slice(e, e + 1), x = /[，。！、？,.!?]/.test(k) ? o * i : o;
          if (v >= x)
            if (n.innerText = t.slice(0, e + 1), c = p, e++, e < t.length)
              n.innerHTML = t.slice(0, e) + '<span class="blinking-cursor"></span>';
            else {
              n.innerHTML = t, n.style.display = "block", m = !1, f.disconnect();
              const g = document.querySelector(".tianliGPT-tag");
              g == null || g.classList.remove("loadingAI");
            }
          requestAnimationFrame(d);
        }
      }, f = new IntersectionObserver(
        (p) => {
          r = p[0].isIntersecting, r && s && setTimeout(() => {
            requestAnimationFrame(d);
          }, 200);
        },
        { threshold: 0 }
      );
      let T = document.querySelector(".post-TianliGPT");
      T && f.observe(T);
    }
  };
  function y() {
    h(tianliGPT_postSelector);
    const t = l.getTitleAndContent();
    t && console.log("TianliGPT本次提交的内容为：" + t), l.fetchTianliGPT(t).then((n) => {
      if (typeof n == "string")
        return;
      const o = n.summary;
      l.aiShowAnimation(o);
    });
  }
  function G() {
    if (typeof tianliGPT_postURL > "u") {
      w();
      return;
    }
    try {
      const t = (a) => new RegExp("^" + a.split(/\*+/).map(n).join(".*") + "$"), n = (a) => a.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"), o = t(tianliGPT_postURL), i = window.location.href;
      o.test(i) ? S() : console.log(
        `TianliGPT：当前 URL '${i}' 不符合规则 '${tianliGPT_postURL}'，所以我决定不执行摘要功能。`
      );
    } catch (t) {
      console.error("TianliGPT：我没有看懂你编写的自定义链接规则，所以我决定不执行摘要功能", t);
    }
  }
  function S() {
    let n = 0;
    const o = setInterval(() => {
      try {
        w(), clearInterval(o);
      } catch (i) {
        n >= 20 && (clearInterval(o), console.error("TianliGPT：超时失败，停止尝试。", i)), n++;
      }
    }, 200);
  }
  function w() {
    if (typeof tianliGPT_blacklist > "u") {
      y();
      return;
    } else
      fetch(tianliGPT_blacklist).then((t) => t.json()).then((t) => {
        const n = t.blackurls;
        let o = window.location.href;
        n.some((a) => new RegExp("^" + a.replace(/\*/g, ".*") + "$").test(o)) || y();
      }).catch((t) => console.error("Error fetching blacklist:", t));
  }
  u ? G() : document.addEventListener("DOMContentLoaded", function() {
    G();
  });
}
P(!1);
document.addEventListener("pjax:complete", function() {
  P(!0);
});
(function(u) {
  const m = u.pushState;
  u.pushState = function(h) {
    return typeof u.onpushstate == "function" && setTimeout(function() {
      u.onpushstate({ state: h });
    }, 100), m.apply(u, arguments);
  };
})(window.history);
window.history.onpushstate = function() {
  P(!0);
};
