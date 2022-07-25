import{_ as n,o as t,c as d,a,b as l,e as s,d as c,r as i}from"./app.b2be689e.js";const r={},o=a("h1",{id:"dump",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#dump","aria-hidden":"true"},"#"),s(" dump")],-1),p={href:"https://arthas.aliyun.com/doc/arthas-tutorials?language=cn&id=command-dump",target:"_blank",rel:"noopener noreferrer"},u=a("code",null,"dump",-1),m=s("\u5728\u7EBF\u6559\u7A0B"),h=c(`<div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>dump \u5DF2\u52A0\u8F7D\u7C7B\u7684 bytecode \u5230\u7279\u5B9A\u76EE\u5F55</p></div><h3 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h3><table><thead><tr><th style="text-align:right;">\u53C2\u6570\u540D\u79F0</th><th style="text-align:left;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;"><em>class-pattern</em></td><td style="text-align:left;">\u7C7B\u540D\u8868\u8FBE\u5F0F\u5339\u914D</td></tr><tr><td style="text-align:right;"><code>[c:]</code></td><td style="text-align:left;">\u7C7B\u6240\u5C5E ClassLoader \u7684 hashcode</td></tr><tr><td style="text-align:right;"><code>[classLoaderClass:]</code></td><td style="text-align:left;">\u6307\u5B9A\u6267\u884C\u8868\u8FBE\u5F0F\u7684 ClassLoader \u7684 class name</td></tr><tr><td style="text-align:right;"><code>[d:]</code></td><td style="text-align:left;">\u8BBE\u7F6E\u7C7B\u6587\u4EF6\u7684\u76EE\u6807\u76EE\u5F55</td></tr><tr><td style="text-align:right;">[E]</td><td style="text-align:left;">\u5F00\u542F\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\uFF0C\u9ED8\u8BA4\u4E3A\u901A\u914D\u7B26\u5339\u914D</td></tr></tbody></table><h3 id="\u4F7F\u7528\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53C2\u8003" aria-hidden="true">#</a> \u4F7F\u7528\u53C2\u8003</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ dump java.lang.String
 HASHCODE  CLASSLOADER  LOCATION
 null                   /Users/admin/logs/arthas/classdump/java/lang/String.class
Affect<span class="token punctuation">(</span>row-cnt:1<span class="token punctuation">)</span> cost <span class="token keyword">in</span> <span class="token number">119</span> ms.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ dump demo.*
 HASHCODE  CLASSLOADER                                    LOCATION
 3d4eac69  +-sun.misc.Launcher<span class="token variable">$AppClassLoader</span>@3d4eac69    /Users/admin/logs/arthas/classdump/sun.misc.Launcher<span class="token variable">$AppClassLoader</span>-3d4eac69/demo/MathGame.class
             +-sun.misc.Launcher<span class="token variable">$ExtClassLoader</span>@66350f69
Affect<span class="token punctuation">(</span>row-cnt:1<span class="token punctuation">)</span> cost <span class="token keyword">in</span> <span class="token number">39</span> ms.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ dump -d /tmp/output java.lang.String
 HASHCODE  CLASSLOADER  LOCATION
 null                   /tmp/output/java/lang/String.class
Affect<span class="token punctuation">(</span>row-cnt:1<span class="token punctuation">)</span> cost <span class="token keyword">in</span> <span class="token number">138</span> ms.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6307\u5B9A classLoader</li></ul><p>\u6CE8\u610F hashcode \u662F\u53D8\u5316\u7684\uFF0C\u9700\u8981\u5148\u67E5\u770B\u5F53\u524D\u7684 ClassLoader \u4FE1\u606F\uFF0C\u63D0\u53D6\u5BF9\u5E94 ClassLoader \u7684 hashcode\u3002</p><p>\u5982\u679C\u4F60\u4F7F\u7528<code>-c</code>\uFF0C\u4F60\u9700\u8981\u624B\u52A8\u8F93\u5165 hashcode\uFF1A<code>-c &lt;hashcode&gt;</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ dump -c 3d4eac69 demo.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u53EA\u6709\u552F\u4E00\u5B9E\u4F8B\u7684 ClassLoader \u53EF\u4EE5\u901A\u8FC7<code>--classLoaderClass</code>\u6307\u5B9A class name\uFF0C\u4F7F\u7528\u8D77\u6765\u66F4\u52A0\u65B9\u4FBF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ dump --classLoaderClass sun.misc.Launcher<span class="token variable">$AppClassLoader</span> demo.*
 HASHCODE  CLASSLOADER                                    LOCATION
 3d4eac69  +-sun.misc.Launcher<span class="token variable">$AppClassLoader</span>@3d4eac69    /Users/admin/logs/arthas/classdump/sun.misc.Launcher<span class="token variable">$AppClassLoader</span>-3d4eac69/demo/MathGame.class
             +-sun.misc.Launcher<span class="token variable">$ExtClassLoader</span>@66350f69
Affect<span class="token punctuation">(</span>row-cnt:1<span class="token punctuation">)</span> cost <span class="token keyword">in</span> <span class="token number">39</span> ms.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6CE8: \u8FD9\u91CC classLoaderClass \u5728 java 8 \u662F sun.misc.Launcher$AppClassLoader\uFF0C\u800Cjava 11\u7684classloader\u662Fjdk.internal.loader.ClassLoaders$AppClassLoader\uFF0Ckatacoda \u76EE\u524D\u73AF\u5883\u662F java8\u3002</li></ul><p><code>--classLoaderClass</code> \u7684\u503C\u662F ClassLoader \u7684\u7C7B\u540D\uFF0C\u53EA\u6709\u5339\u914D\u5230\u552F\u4E00\u7684 ClassLoader \u5B9E\u4F8B\u65F6\u624D\u80FD\u5DE5\u4F5C\uFF0C\u76EE\u7684\u662F\u65B9\u4FBF\u8F93\u5165\u901A\u7528\u547D\u4EE4\uFF0C\u800C<code>-c &lt;hashcode&gt;</code>\u662F\u52A8\u6001\u53D8\u5316\u7684\u3002</p>`,15);function v(b,g){const e=i("ExternalLinkIcon");return t(),d("div",null,[o,a("p",null,[a("a",p,[u,m,l(e)])]),h])}var C=n(r,[["render",v],["__file","dump.html.vue"]]);export{C as default};
