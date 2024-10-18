import{_ as d,o as i,c as l,b as s,w as a,a as t,d as p,e,r}from"./app.e05b0501.js";const h={},_=p(`<h2 id="\u7528\u6237\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u95EE\u9898" aria-hidden="true">#</a> \u7528\u6237\u95EE\u9898 \uFF1A</h2><p>arthas \u67E5\u770B\u65B9\u6CD5\u8017\u65F6</p><hr><h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54" tabindex="-1"><a class="header-anchor" href="#\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54" aria-hidden="true">#</a> \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2><p>\u8981\u4F7F\u7528Arthas\u6765\u67E5\u770B\u65B9\u6CD5\u7684\u8017\u65F6\uFF0C\u53EF\u4EE5\u4F9D\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u8FDB\u884C\u4EE5\u4E0B\u64CD\u4F5C\uFF1A</p><ol><li><p><strong>\u542F\u52A8Arthas\u5E76\u8FDE\u63A5\u5230\u76EE\u6807Java\u8FDB\u7A0B</strong><br> \u9996\u5148\uFF0C\u4F60\u9700\u8981\u542F\u52A8Arthas\u5DE5\u5177\u5E76\u8FDE\u63A5\u5230\u4F60\u60F3\u8981\u76D1\u63A7\u7684Java\u5E94\u7528\u7A0B\u5E8F\u3002\u5728\u547D\u4EE4\u884C\u4E2D\uFF0C\u8FD0\u884CArthas\u7684\u542F\u52A8\u811A\u672C\uFF08\u4F8B\u5982\u5728Mac\u6216Linux\u73AF\u5883\u4E0B\u901A\u5E38\u662F<code>./as.sh</code>\uFF09\uFF0C\u7136\u540E\u4ECE\u5217\u51FA\u7684Java\u8FDB\u7A0B\u4E2D\u9009\u62E9\u4F60\u8981\u9644\u52A0\u7684\u8FDB\u7A0BID\u3002</p></li><li><p><strong>\u4F7F\u7528<code>trace</code>\u547D\u4EE4\u76D1\u63A7\u65B9\u6CD5\u8C03\u7528</strong><br> \u63A5\u4E0B\u6765\uFF0C\u5229\u7528Arthas\u7684<code>trace</code>\u547D\u4EE4\u6765\u81EA\u52A8\u9AD8\u4EAE\u663E\u793A\u6700\u8017\u65F6\u7684\u65B9\u6CD5\u8C03\u7528\u3002\u8FD9\u662F\u4E00\u4E2A\u975E\u5E38\u5B9E\u7528\u7684\u529F\u80FD\uFF0C\u5B83\u80FD\u5E2E\u52A9\u4F60\u5FEB\u901F\u5B9A\u4F4D\u5230\u6027\u80FD\u74F6\u9888\u3002\u547D\u4EE4\u7684\u57FA\u672C\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>trace <span class="token punctuation">[</span>class-pattern<span class="token punctuation">]</span> <span class="token punctuation">[</span>method-pattern<span class="token punctuation">]</span> <span class="token punctuation">[</span>condition-express<span class="token punctuation">]</span> <span class="token punctuation">[</span>-n <span class="token operator">&lt;</span>\u6392\u540D\u6570\u91CF<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--skipJDKMethod <span class="token operator">&lt;</span>\u662F\u5426\u8DF3\u8FC7JDK\u65B9\u6CD5<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>listener<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5176\u4E2D\uFF0C<code>class-pattern</code>\u548C<code>method-pattern</code>\u7528\u4E8E\u6307\u5B9A\u4F60\u60F3\u8981\u8DDF\u8E2A\u7684\u7C7B\u548C\u65B9\u6CD5\u540D\u7684\u6A21\u5F0F\u5339\u914D\u8868\u8FBE\u5F0F\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u4F60\u60F3\u76D1\u63A7\u6240\u6709<code>com.example.service</code>\u5305\u4E0B\u4EE5<code>Service</code>\u7ED3\u5C3E\u7684\u7C7B\u4E2D\u7684\u6240\u6709\u65B9\u6CD5\u8017\u65F6\uFF0C\u53EF\u4EE5\u8FD9\u6837\u64CD\u4F5C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>trace com.example.service.*Service *.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u547D\u4EE4\u4F1A\u663E\u793A\u5339\u914D\u5230\u7684\u65B9\u6CD5\u6BCF\u6B21\u88AB\u8C03\u7528\u7684\u8017\u65F6\u4EE5\u53CA\u8C03\u7528\u6808\u4FE1\u606F\u3002</p></li><li><p><strong>\u5206\u6790\u7ED3\u679C</strong><br> \u6267\u884C\u4E0A\u8FF0\u547D\u4EE4\u540E\uFF0CArthas\u4F1A\u5F00\u59CB\u5B9E\u65F6\u76D1\u63A7\u6307\u5B9A\u65B9\u6CD5\u7684\u8C03\u7528\u60C5\u51B5\uFF0C\u5C55\u793A\u6BCF\u4E2A\u8C03\u7528\u7684\u8BE6\u7EC6\u8017\u65F6\u53CA\u8C03\u7528\u8DEF\u5F84\u3002\u8FD9\u5C06\u5E2E\u52A9\u4F60\u8BC6\u522B\u51FA\u54EA\u4E9B\u65B9\u6CD5\u662F\u6700\u8017\u65F6\u7684\uFF0C\u4ECE\u800C\u8FDB\u4E00\u6B65\u5206\u6790\u548C\u4F18\u5316\u3002</p></li></ol><p><strong>\u6CE8\u610F\u70B9\u89E3\u91CA\uFF1A</strong></p><ul><li><strong>\u81EA\u52A8\u9AD8\u4EAE\u663E\u793A</strong>\uFF1AArthas\u7684<code>trace</code>\u547D\u4EE4\u901A\u8FC7\u989C\u8272\u7F16\u7801\u76F4\u89C2\u5730\u5C55\u793A\u4E86\u65B9\u6CD5\u8C03\u7528\u7684\u65F6\u95F4\u6D88\u8017\uFF0C\u7EA2\u8272\u8868\u793A\u8F83\u6162\u7684\u8C03\u7528\uFF0C\u8FD9\u4F7F\u5F97\u6027\u80FD\u74F6\u9888\u4E00\u76EE\u4E86\u7136\u3002</li><li><strong>\u81EA\u5B9A\u4E49\u6761\u4EF6\u4E0E\u6392\u5E8F</strong>\uFF1A\u901A\u8FC7\u6DFB\u52A0\u6761\u4EF6\u8868\u8FBE\u5F0F\u548C\u8C03\u6574\u8F93\u51FA\u7684\u6392\u540D\u6570\u91CF\uFF0C\u4F60\u53EF\u4EE5\u66F4\u52A0\u7CBE\u786E\u5730\u63A7\u5236\u76D1\u63A7\u8303\u56F4\uFF0C\u4E13\u6CE8\u4E8E\u6700\u5173\u952E\u7684\u4FE1\u606F\u3002</li><li><strong>\u7ED3\u679C\u67E5\u770B\u65B9\u5F0F</strong>\uFF1A\u867D\u7136\u539F\u59CB\u77E5\u8BC6\u4E2D\u63D0\u5230\u4E86\u901A\u8FC7\u6D4F\u89C8\u5668\u67E5\u770Bprofiler\u7ED3\u679C\u7684\u65B9\u5F0F\uFF0C\u4F46\u90A3\u90E8\u5206\u662F\u5173\u4E8E\u67E5\u770Barthas-output\u4E0B\u7684\u7ED3\u679C\uFF0C\u4E0E\u76F4\u63A5\u76D1\u63A7\u65B9\u6CD5\u8017\u65F6\u7684<code>trace</code>\u547D\u4EE4\u4E0D\u540C\u3002\u5BF9\u4E8E<code>trace</code>\u547D\u4EE4\uFF0C\u7ED3\u679C\u4F1A\u76F4\u63A5\u5728\u547D\u4EE4\u884C\u754C\u9762\u8F93\u51FA\u3002</li></ul><p>\u7EFC\u4E0A\u6240\u8FF0\uFF0C\u5229\u7528Arthas\u7684<code>trace</code>\u547D\u4EE4\u662F\u76D1\u63A7Java\u5E94\u7528\u4E2D\u65B9\u6CD5\u8C03\u7528\u8017\u65F6\u7684\u6709\u6548\u624B\u6BB5\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u5B9A\u4F4D\u548C\u4F18\u5316\u6027\u80FD\u95EE\u9898\u3002\u8BF7\u6839\u636E\u4F60\u7684\u5177\u4F53\u9700\u6C42\u8C03\u6574\u547D\u4EE4\u53C2\u6570\uFF0C\u4EE5\u8FBE\u5230\u6700\u4F73\u7684\u76D1\u63A7\u6548\u679C\u3002</p>`,9),u=e("---------------"),f=t("h2",{id:"\u53C2\u8003\u94FE\u63A5",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true"},"#"),e(" \u53C2\u8003\u94FE\u63A5 \uFF1A")],-1),m=e("Arthas3.0 \u7684\u65B0\u7279\u6027"),g=e("profiler"),k=e("\u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u5229\u7528Arthas\u6392\u67E5NoSuchMethodError"),b=e("---------------"),v={id:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",tabindex:"-1"},x=t("a",{class:"header-anchor",href:"#\u7B54\u7591\u670D\u52A1\u8BF4\u660E","aria-hidden":"true"},"#",-1),A=e(),J=e("\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"),F=e("\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86"),E=e("\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1"),I=e("\uFF0C\u5728"),L=e("\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C"),N=e("\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : "),y={href:"https://answer.opensource.alibaba.com/docs/intro",target:"_blank",rel:"noopener noreferrer"},B=e("\u5168\u5C40\u4E13\u5BB6\u7B54\u7591"),D=e(" \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898"),O=t("h3",{id:"\u53CD\u9988",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u53CD\u9988","aria-hidden":"true"},"#"),e(" \u53CD\u9988")],-1),S=e("\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A"),V={href:"https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16046",target:"_blank",rel:"noopener noreferrer"},w=e("\u5DEE\u8BC4"),M=e("\u7ED9\u6211\u4EEC\u53CD\u9988\u3002");function q(C,G){const o=r("font"),n=r("RouterLink"),c=r("ExternalLinkIcon");return i(),l("div",null,[_,s(o,{color:"#949494"},{default:a(()=>[u]),_:1}),f,t("p",null,[s(n,{to:"/doc/arthas3.html"},{default:a(()=>[m]),_:1})]),t("p",null,[s(n,{to:"/doc/profiler.html"},{default:a(()=>[g]),_:1})]),t("p",null,[s(n,{to:"/doc/expert/user-question-history14763.html"},{default:a(()=>[k]),_:1})]),s(o,{color:"#949494"},{default:a(()=>[b]),_:1}),t("h2",v,[x,A,s(o,{color:"#FF0000"},{default:a(()=>[J]),_:1})]),t("p",null,[F,s(o,{color:"#FF0000"},{default:a(()=>[E]),_:1}),I,s(o,{color:"#FF0000"},{default:a(()=>[L]),_:1}),N,t("a",y,[B,s(c)]),D]),O,t("p",null,[S,t("a",V,[w,s(c)]),M])])}const P=d(h,[["render",q],["__file","user-question-history11452.html.vue"]]);export{P as default};