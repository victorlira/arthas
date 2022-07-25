import{_ as a,o as s,c as n,d as e}from"./app.b2be689e.js";const t={},p=e(`<h1 id="\u542F\u52A8-arthas" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8-arthas" aria-hidden="true">#</a> \u542F\u52A8 Arthas</h1><h2 id="\u4EA4\u4E92\u6A21\u5F0F\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u4EA4\u4E92\u6A21\u5F0F\u542F\u52A8" aria-hidden="true">#</a> \u4EA4\u4E92\u6A21\u5F0F\u542F\u52A8</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./as.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u279C  bin git:<span class="token punctuation">(</span>develop<span class="token punctuation">)</span> \u2717 ./as.sh
Found existing java process, please choose one and input the serial number of the process, eg: <span class="token number">1</span> <span class="token builtin class-name">.</span> Then hit ENTER.
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: <span class="token number">3088</span> org.jetbrains.idea.maven.server.RemoteMavenServer
* <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>: <span class="token number">12872</span> org.apache.catalina.startup.Bootstrap
  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>: <span class="token number">2455</span>
Attaching to <span class="token number">12872</span><span class="token punctuation">..</span>.
  ,---.  ,------. ,--------.,--.  ,--.  ,---.   ,---.
 /  O  <span class="token punctuation">\\</span> <span class="token operator">|</span>  .--. <span class="token string">&#39;&#39;</span>--.  .--<span class="token string">&#39;|  &#39;</span>--<span class="token string">&#39;  | /  O  \\ &#39;</span>   .-<span class="token string">&#39;
|  .-.  ||  &#39;</span>--<span class="token string">&#39;.&#39;</span>   <span class="token operator">|</span>  <span class="token operator">|</span>   <span class="token operator">|</span>  .--.  <span class="token operator">||</span>  .-.  <span class="token operator">|</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">.</span>  <span class="token variable">\`</span></span>-.
<span class="token operator">|</span>  <span class="token operator">|</span> <span class="token operator">|</span>  <span class="token operator">||</span>  <span class="token operator">|</span><span class="token punctuation">\\</span>  <span class="token punctuation">\\</span>    <span class="token operator">|</span>  <span class="token operator">|</span>   <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">||</span>  <span class="token operator">|</span> <span class="token operator">|</span>  <span class="token operator">|</span>.-<span class="token string">&#39;    |
\`--&#39;</span> <span class="token variable"><span class="token variable">\`</span>--&#39;<span class="token variable">\`</span></span>--<span class="token string">&#39; &#39;</span>--<span class="token string">&#39;   \`--&#39;</span>   <span class="token variable"><span class="token variable">\`</span>--&#39;  <span class="token variable">\`</span></span>--<span class="token string">&#39;\`--&#39;</span> <span class="token variable"><span class="token variable">\`</span>--&#39;<span class="token variable">\`</span></span>-----&#39;
$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u975E\u4EA4\u4E92\u6A21\u5F0F\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u975E\u4EA4\u4E92\u6A21\u5F0F\u542F\u52A8" aria-hidden="true">#</a> \u975E\u4EA4\u4E92\u6A21\u5F0F\u542F\u52A8</h2><p>\u542F\u52A8\u811A\u672C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./as.sh <span class="token operator">&lt;</span>PID<span class="token operator">&gt;</span><span class="token punctuation">[</span>@IP:PORT<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h3><ul><li>PID\uFF1A\u76EE\u6807 Java \u8FDB\u7A0B ID\uFF08\u8BF7\u786E\u4FDD\u6267\u884C\u5F53\u524D\u6267\u884C\u547D\u4EE4\u7684\u7528\u6237\u5FC5\u987B\u6709\u8DB3\u591F\u7684\u6743\u9650\u64CD\u4F5C\u5BF9\u5E94\u7684 Java \u8FDB\u7A0B\uFF09</li><li>IP\uFF1AArthas Server \u4FA6\u542C\u7684\u5730\u5740\uFF0C\u9ED8\u8BA4\u503C\u662F <code>127.00.1</code>\u3002Arthas \u5141\u8BB8\u591A\u4E2A\u7528\u6237\u540C\u65F6\u8BBF\u95EE\uFF0C\u5E76\u4E14\u5404\u81EA\u7684\u547D\u4EE4\u4E0D\u4F1A\u76F8\u4E92\u5E72\u6270\u6267\u884C</li><li>PORT\uFF1A\u76EE\u6807\u670D\u52A1\u5668 Arthas Server \u7684\u7AEF\u53E3\u53F7\uFF0C\u9ED8\u8BA4\u7684\u7AEF\u53E3\u53F7\u662F 3658</li></ul><h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><ul><li><p>\u5982\u679C\u4E0D\u6307\u5B9A IP \u548C PORT\uFF0C\u9ED8\u8BA4\u662F 127.0.0.1 \u548C 3658</p><blockquote><p>./as.sh 12345</p></blockquote><p>\u4E0A\u8FF0\u547D\u4EE4\u7B49\u4EF7\u4E8E\uFF1A</p><blockquote><p>./as.sh 12356@127.0.0.1:3658</p></blockquote></li></ul><h3 id="\u8FDC\u7A0B\u8BCA\u65AD" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u8BCA\u65AD" aria-hidden="true">#</a> \u8FDC\u7A0B\u8BCA\u65AD</h3><p>\u670D\u52A1\u5668\u542F\u52A8 Arthas Server \u540E\uFF0C\u5176\u4ED6\u4EBA\u53EF\u4EE5\u4F7F\u7528 telnet \u8FDC\u7A0B\u8FDE\u63A5\u4E0A\u53BB\u8FDB\u7A0B\u8BCA\u65AD\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>telnet <span class="token number">192.168</span>.1.119 <span class="token number">3658</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="sudo-\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#sudo-\u652F\u6301" aria-hidden="true">#</a> sudo \u652F\u6301</h3><p>\u6210\u719F\u7684\u7EBF\u4E0A\u7BA1\u7406\u73AF\u5883\u4E00\u822C\u90FD\u4E0D\u4F1A\u76F4\u63A5\u5F00\u653E JVM \u90E8\u7F72\u7528\u6237\u6743\u9650\u7ED9\u4F60\uFF0C\u800C\u662F\u901A\u8FC7 sudo-list \u6765\u63A7\u5236\u548C\u76D1\u63A7\u7528\u6237\u7684\u8D8A\u6743\u64CD\u4F5C\u3002\u7531\u4E8E as.sh \u811A\u672C\u4E2D\u4F1A\u5BF9\u5F53\u524D\u7528\u6237\u7684\u73AF\u5883\u53D8\u91CF\u4EA7\u751F\u611F\u77E5\uFF0C\u6240\u4EE5\u9700\u8981\u52A0\u4E0A -H \u53C2\u6570</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> -u admin -H ./as.sh <span class="token number">12345</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="windows-\u73AF\u5883\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#windows-\u73AF\u5883\u652F\u6301" aria-hidden="true">#</a> Windows \u73AF\u5883\u652F\u6301</h3><p>\u76EE\u524D<code>as.bat</code>\u811A\u672C\u53EA\u652F\u6301\u4E00\u4E2A\u53C2\u6570\uFF1Apid</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>as.bat <span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,20),r=[p];function o(l,i){return s(),n("div",null,r)}var d=a(t,[["render",o],["__file","start-arthas.html.vue"]]);export{d as default};
