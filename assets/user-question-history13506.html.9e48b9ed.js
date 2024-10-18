import{_ as i,o as h,c,b as o,w as t,a,d as l,e,r as n}from"./app.e05b0501.js";const _={},p=l(`<h2 id="\u7528\u6237\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u95EE\u9898" aria-hidden="true">#</a> \u7528\u6237\u95EE\u9898 \uFF1A</h2><p>\u5982\u4F55\u67E5\u770Bjava\u5185\u5B58\u589E\u957F\u54EA\u4E9B\u5BF9\u8C61</p><hr><h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54" tabindex="-1"><a class="header-anchor" href="#\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54" aria-hidden="true">#</a> \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2><p>\u8981\u4F7F\u7528Arthas\u67E5\u770BJava\u5185\u5B58\u4E2D\u54EA\u4E9B\u5BF9\u8C61\u5728\u589E\u957F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u64CD\u4F5C\uFF1A</p><h3 id="_1-\u521D\u59CB\u68C0\u6D4B\u5185\u5B58\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_1-\u521D\u59CB\u68C0\u6D4B\u5185\u5B58\u72B6\u6001" aria-hidden="true">#</a> 1. \u521D\u59CB\u68C0\u6D4B\u5185\u5B58\u72B6\u6001</h3><p>\u9996\u5148\uFF0C\u4F7F\u7528Arthas\u7684<code>memory</code>\u547D\u4EE4\u6765\u67E5\u770B\u5F53\u524DJVM\u7684\u5185\u5B58\u6982\u51B5\uFF0C\u8FD9\u80FD\u5E2E\u52A9\u6211\u4EEC\u521D\u6B65\u5224\u65AD\u662F\u5426\u6709\u5185\u5B58\u6CC4\u6F0F\u8FF9\u8C61\u53CA\u53EF\u80FD\u7684\u6CC4\u6F0F\u533A\u57DF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ memory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6B64\u547D\u4EE4\u4F1A\u8FD4\u56DE\u5404\u4E2A\u5185\u5B58\u533A\u57DF\u7684\u4F7F\u7528\u60C5\u51B5\uFF0C\u5982\u5806\u3001\u975E\u5806\u3001\u5404\u4EE3\u7A7A\u95F4\u7B49\u3002\u6CE8\u610F\u89C2\u5BDF\u54EA\u4E9B\u533A\u57DF\u7684\u4F7F\u7528\u7387\u5F02\u5E38\u9AD8\u6216\u6301\u7EED\u589E\u957F\u3002</p><h3 id="_2-\u5B9A\u671F\u76D1\u63A7\u5185\u5B58\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9A\u671F\u76D1\u63A7\u5185\u5B58\u53D8\u5316" aria-hidden="true">#</a> 2. \u5B9A\u671F\u76D1\u63A7\u5185\u5B58\u53D8\u5316</h3><p>\u591A\u6B21\u6267\u884C<code>memory</code>\u547D\u4EE4\u5E76\u8BB0\u5F55\u7ED3\u679C\uFF0C\u5173\u6CE8\u4EFB\u4F55\u5185\u5B58\u533A\u57DF\u7684\u4F7F\u7528\u91CF\u662F\u5426\u6301\u7EED\u589E\u957F\u3002\u7279\u522B\u662Fheap\u3001old gen\u7B49\u533A\u57DF\uFF0C\u8FD9\u4E9B\u901A\u5E38\u662F\u5185\u5B58\u6CC4\u6F0F\u53D1\u751F\u7684\u70ED\u70B9\u3002</p><h3 id="_3-\u5206\u6790\u5806\u5185\u5B58" tabindex="-1"><a class="header-anchor" href="#_3-\u5206\u6790\u5806\u5185\u5B58" aria-hidden="true">#</a> 3. \u5206\u6790\u5806\u5185\u5B58</h3><p>\u4E3A\u4E86\u5177\u4F53\u5B9A\u4F4D\u5230\u589E\u957F\u7684\u5BF9\u8C61\uFF0C\u9700\u8981\u4F7F\u7528<code>heapdump</code>\u547D\u4EE4\u751F\u6210\u5806\u8F6C\u50A8\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>arthas@58205<span class="token punctuation">]</span>$ heapdump arthas-output/dump.hprof
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4F1A\u5728\u6307\u5B9A\u4F4D\u7F6E\uFF08\u9ED8\u8BA4\u6216\u81EA\u5B9A\u4E49\uFF09\u751F\u6210\u4E00\u4E2A<code>.hprof</code>\u6587\u4EF6\uFF0C\u5305\u542B\u4E86\u5806\u5185\u5B58\u4E2D\u7684\u6240\u6709\u5BF9\u8C61\u4FE1\u606F\u3002</p><h3 id="_4-\u5206\u6790\u5806\u8F6C\u50A8\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-\u5206\u6790\u5806\u8F6C\u50A8\u6587\u4EF6" aria-hidden="true">#</a> 4. \u5206\u6790\u5806\u8F6C\u50A8\u6587\u4EF6</h3><p>\u4F7F\u7528\u50CFEclipse Memory Analyzer (MAT)\u8FD9\u6837\u7684\u5DE5\u5177\u5206\u6790<code>.hprof</code>\u6587\u4EF6\u3002\u91CD\u70B9\u5728\u4E8E\u627E\u51FA\u54EA\u4E9B\u7C7B\u7684\u5BF9\u8C61\u6570\u91CF\u5F02\u5E38\u589E\u591A\u6216\u5360\u7528\u5185\u5B58\u663E\u8457\u589E\u957F\u3002</p><ul><li>\u6253\u5F00MAT\uFF0C\u5BFC\u5165<code>.hprof</code>\u6587\u4EF6\u3002</li><li>\u4F7F\u7528\u201CLeak Suspects Report\u201D\u6216\u624B\u52A8\u5206\u6790\uFF0C\u67E5\u627E\u5185\u5B58\u6CC4\u6F0F\u7684\u5ACC\u7591\u5BF9\u8C61\u3002</li><li>\u91CD\u70B9\u5173\u6CE8\u201CDominator Tree\u201D\uFF08\u652F\u914D\u6811\uFF09\uFF0C\u5B83\u5C55\u793A\u4E86\u54EA\u4E9B\u5BF9\u8C61\u5360\u7528\u4E86\u5927\u91CF\u5185\u5B58\u3002</li><li>\u5229\u7528\u201CHistogram\u201D\u89C6\u56FE\u67E5\u770B\u5404\u7C7B\u5BF9\u8C61\u7684\u6570\u91CF\u548C\u5927\u5C0F\u5206\u5E03\u3002</li></ul><h3 id="_5-\u4F7F\u7528-live\u6807\u5FD7\u4F18\u5316\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#_5-\u4F7F\u7528-live\u6807\u5FD7\u4F18\u5316\u5206\u6790" aria-hidden="true">#</a> 5. \u4F7F\u7528<code>--live</code>\u6807\u5FD7\u4F18\u5316\u5206\u6790</h3><p>\u5982\u679C\u60F3\u4E13\u6CE8\u4E8E\u672A\u88AB\u5783\u573E\u56DE\u6536\u7684\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u5728\u4F7F\u7528\u5206\u6790\u5DE5\u5177\u65F6\u52A0\u4E0A<code>--live</code>\u6807\u5FD7\uFF0C\u4EE5\u8FC7\u6EE4\u6389\u90A3\u4E9B\u65E0\u5BB3\u7684\u5BF9\u8C61\u3002</p><h3 id="\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA" aria-hidden="true">#</a> \u89E3\u91CA</h3><p>\u901A\u8FC7\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u6211\u4EEC\u5229\u7528Arthas\u521D\u6B65\u68C0\u6D4B\u5185\u5B58\u4F7F\u7528\u60C5\u51B5\uFF0C\u968F\u540E\u901A\u8FC7\u5806\u8F6C\u50A8\u5206\u6790\u7CBE\u786E\u5B9A\u4F4D\u5230\u5BFC\u81F4\u5185\u5B58\u589E\u957F\u7684\u5177\u4F53\u5BF9\u8C61\u7C7B\u578B\u548C\u6570\u91CF\u3002\u8FD9\u6837\u53EF\u4EE5\u6709\u6548\u5730\u8BC6\u522B\u51FA\u5185\u5B58\u6CC4\u6F0F\u7684\u6839\u6E90\uFF0C\u4E3A\u8FDB\u4E00\u6B65\u4F18\u5316\u548C\u4FEE\u590D\u63D0\u4F9B\u4F9D\u636E\u3002\u8BF7\u6CE8\u610F\uFF0C\u5B9A\u671F\u8FDB\u884C\u5185\u5B58\u72B6\u6001\u76D1\u6D4B\u5BF9\u4E8E\u53D1\u73B0\u6F5C\u5728\u7684\u5185\u5B58\u6CC4\u6F0F\u81F3\u5173\u91CD\u8981\uFF0C\u56E0\u4E3A\u5185\u5B58\u6CC4\u6F0F\u95EE\u9898\u5F80\u5F80\u968F\u65F6\u95F4\u9010\u6E10\u663E\u73B0\u3002</p>`,22),u=e("---------------"),f=a("h2",{id:"\u53C2\u8003\u94FE\u63A5",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true"},"#"),e(" \u53C2\u8003\u94FE\u63A5 \uFF1A")],-1),m=e("\u4E13\u5BB6\u7ECF\u9A8C\uFF1AArthas \u6392\u67E5\u5185\u5B58\u6CC4\u9732\u7684\u65B9\u6CD5"),b=e("\u4E13\u5BB6\u7ECF\u9A8C\uFF1AJava \u5806\u5185\u5B58\u8BF4\u660E"),v=e("profiler"),x=e("---------------"),g={id:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",tabindex:"-1"},k=a("a",{class:"header-anchor",href:"#\u7B54\u7591\u670D\u52A1\u8BF4\u660E","aria-hidden":"true"},"#",-1),y=e(),A=e("\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"),F=e("\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86"),E=e("\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1"),J=e("\uFF0C\u5728"),L=e("\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C"),V=e("\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : "),B={href:"https://answer.opensource.alibaba.com/docs/intro",target:"_blank",rel:"noopener noreferrer"},I=e("\u5168\u5C40\u4E13\u5BB6\u7B54\u7591"),M=e(" \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898"),N=a("h3",{id:"\u53CD\u9988",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u53CD\u9988","aria-hidden":"true"},"#"),e(" \u53CD\u9988")],-1),O=e("\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A"),T={href:"https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16069",target:"_blank",rel:"noopener noreferrer"},q=e("\u5DEE\u8BC4"),w=e("\u7ED9\u6211\u4EEC\u53CD\u9988\u3002");function R(C,D){const r=n("font"),s=n("RouterLink"),d=n("ExternalLinkIcon");return h(),c("div",null,[p,o(r,{color:"#949494"},{default:t(()=>[u]),_:1}),f,a("p",null,[o(s,{to:"/doc/expert/user-question-history12455.html"},{default:t(()=>[m]),_:1})]),a("p",null,[o(s,{to:"/doc/expert/user-question-history12716.html"},{default:t(()=>[b]),_:1})]),a("p",null,[o(s,{to:"/doc/profiler.html"},{default:t(()=>[v]),_:1})]),o(r,{color:"#949494"},{default:t(()=>[x]),_:1}),a("h2",g,[k,y,o(r,{color:"#FF0000"},{default:t(()=>[A]),_:1})]),a("p",null,[F,o(r,{color:"#FF0000"},{default:t(()=>[E]),_:1}),J,o(r,{color:"#FF0000"},{default:t(()=>[L]),_:1}),V,a("a",B,[I,o(d)]),M]),N,a("p",null,[O,a("a",T,[q,o(d)]),w])])}const H=i(_,[["render",R],["__file","user-question-history13506.html.vue"]]);export{H as default};