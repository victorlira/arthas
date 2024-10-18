import{_ as d,o as i,c as h,b as t,w as s,a as o,d as l,e,r}from"./app.e05b0501.js";const _={},p=l(`<h2 id="\u7528\u6237\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u95EE\u9898" aria-hidden="true">#</a> \u7528\u6237\u95EE\u9898 \uFF1A</h2><p>\u5982\u4F55\u67E5\u770Bjava\u5185\u5B58\u589E\u957F\u54EA\u4E9B\u5BF9\u8C61</p><hr><h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54" tabindex="-1"><a class="header-anchor" href="#\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54" aria-hidden="true">#</a> \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2><p>\u8981\u4F7F\u7528Arthas\u67E5\u770BJava\u5185\u5B58\u4E2D\u54EA\u4E9B\u5BF9\u8C61\u5728\u589E\u957F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u64CD\u4F5C\uFF1A</p><ol><li><p><strong>\u76D1\u63A7\u6574\u4F53\u5185\u5B58\u72B6\u6001</strong>\uFF1A \u9996\u5148\uFF0C\u4F60\u9700\u8981\u9891\u7E41\u5730\u8FD0\u884CArthas\u7684<code>memory</code>\u547D\u4EE4\u6765\u89C2\u5BDFJVM\u7684\u6574\u4F53\u5185\u5B58\u4F7F\u7528\u60C5\u51B5\u3002\u8FD9\u5C06\u5E2E\u52A9\u4F60\u8BC6\u522B\u662F\u5426\u6709\u7279\u5B9A\u533A\u57DF\u7684\u5185\u5B58\u6301\u7EED\u589E\u957F\uFF0C\u4ECE\u800C\u521D\u6B65\u5224\u65AD\u5185\u5B58\u6CC4\u6F0F\u7684\u53EF\u80FD\u6027\u53CA\u5927\u81F4\u4F4D\u7F6E\u3002\u6BD4\u5982\uFF0C\u5982\u679C<code>g1_old_gen</code>\u6216<code>heap</code>\u533A\u57DF\u7684\u4F7F\u7528\u91CF\u4E0D\u65AD\u4E0A\u5347\uFF0C\u8FD9\u53EF\u80FD\u662F\u6CC4\u9732\u53D1\u751F\u7684\u533A\u57DF\u3002</p></li><li><p><strong>\u5BF9\u6BD4\u5206\u6790\u5185\u5B58\u5FEB\u7167</strong>\uFF1A \u4F7F\u7528<code>heapdump</code>\u547D\u4EE4\u751F\u6210\u5806\u7684\u5168\u91CF\u5185\u5B58\u4FE1\u606F\u3002\u4E3A\u4E86\u5206\u6790\u5185\u5B58\u589E\u957F\u7684\u5177\u4F53\u5BF9\u8C61\uFF0C\u4F60\u9700\u8981\u5728\u4E0D\u540C\u65F6\u95F4\u70B9\u6267\u884C\u6B64\u547D\u4EE4\uFF0C\u6BD4\u5982\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u6267\u884C\u4E00\u6B21\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>arthas@58205<span class="token punctuation">]</span>$ heapdump arthas-output/dump_<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y%m%d%H%M%S<span class="token variable">)</span></span>.hprof
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u6837\u6BCF\u6B21\u751F\u6210\u7684\u5806\u8F6C\u50A8\u6587\u4EF6\u540D\u90FD\u4F1A\u5305\u542B\u65F6\u95F4\u6233\uFF0C\u4FBF\u4E8E\u533A\u5206\u548C\u5BF9\u6BD4\u3002</p></li><li><p><strong>\u5206\u6790\u5806\u8F6C\u50A8\u6587\u4EF6</strong>\uFF1A \u751F\u6210\u7684<code>.hprof</code>\u6587\u4EF6\u53EF\u4EE5\u4F7F\u7528Eclipse Memory Analyzer (MAT) \u5DE5\u5177\u8FDB\u884C\u5206\u6790\u3002\u901A\u8FC7MAT\uFF0C\u4F60\u53EF\u4EE5\u5BF9\u6BD4\u4E0D\u540C\u65F6\u95F4\u70B9\u7684\u5806\u8F6C\u50A8\uFF0C\u67E5\u627E\u90A3\u4E9B\u5BF9\u8C61\u6570\u91CF\u6216\u5185\u5B58\u5360\u7528\u663E\u8457\u589E\u52A0\u7684\u5B9E\u4F8B\u3002\u91CD\u70B9\u5173\u6CE8\u8FD9\u4E9B\u5BF9\u8C61\u7684\u5F15\u7528\u94FE\uFF0C\u4EE5\u786E\u5B9A\u662F\u54EA\u4E9B\u90E8\u5206\u7684\u4EE3\u7801\u6301\u6709\u8FD9\u4E9B\u4E0D\u518D\u9700\u8981\u4F46\u4ECD\u88AB\u5F15\u7528\u7684\u5BF9\u8C61\uFF0C\u4ECE\u800C\u5BFC\u81F4\u5185\u5B58\u6CC4\u6F0F\u3002</p></li><li><p><strong>\u4F7F\u7528Live\u5BF9\u8C61\u5206\u6790</strong>\uFF1A \u82E5\u8981\u4E13\u6CE8\u4E8E\u672A\u88AB\u5783\u573E\u56DE\u6536\u7684\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u5728\u4F7F\u7528MAT\u6216\u5176\u4ED6\u5206\u6790\u5DE5\u5177\u65F6\uFF0C\u5229\u7528\u5176\u63D0\u4F9B\u7684\u529F\u80FD\u6765\u7B5B\u9009\u51FA\u6D3B\u5BF9\u8C61\uFF08\u5373\u5728\u5206\u6790\u65F6\u4ECD\u5B58\u5728\u7684\u5BF9\u8C61\uFF09\u3002\u8FD9\u53EF\u4EE5\u901A\u8FC7\u5F00\u542F\u76F8\u5E94\u7684\u5206\u6790\u9009\u9879\u6216\u5728\u6267\u884C\u547D\u4EE4\u65F6\u52A0\u5165\u7279\u5B9A\u6807\u5FD7\uFF0C\u5982MAT\u4E2D\u76F4\u63A5\u5206\u6790 <code>.hprof</code> \u6587\u4EF6\u65F6\u81EA\u7136\u805A\u7126\u4E8E\u5B58\u6D3B\u5BF9\u8C61\uFF0C\u800C\u5728Arthas\u4E2D\uFF0C\u867D\u7136\u76F4\u63A5\u547D\u4EE4\u4E0D\u63D0\u4F9B<code>--live</code>\u9009\u9879\uFF0C\u4F46\u5206\u6790\u8FC7\u7A0B\u4E2D\u5173\u6CE8\u672A\u88AB\u56DE\u6536\u7684\u5BF9\u8C61\u4E5F\u662F\u5173\u952E\u3002</p></li><li><p><strong>\u603B\u7ED3\u4E0E\u5B9A\u4F4D</strong>\uFF1A \u7EFC\u5408\u4E0A\u8FF0\u5206\u6790\u7ED3\u679C\uFF0C\u5B9A\u4F4D\u5230\u5177\u4F53\u589E\u957F\u7684\u5BF9\u8C61\u7C7B\u578B\u53CA\u5176\u5728\u4EE3\u7801\u4E2D\u7684\u5F15\u7528\u6E90\u5934\u3002\u4E00\u65E6\u53D1\u73B0\u53EF\u7591\u5BF9\u8C61\uFF0C\u5C31\u9700\u8981\u5BA1\u67E5\u76F8\u5173\u4EE3\u7801\u903B\u8F91\uFF0C\u4FEE\u590D\u6F5C\u5728\u7684\u5185\u5B58\u6CC4\u6F0F\u95EE\u9898\uFF0C\u6BD4\u5982\u672A\u53CA\u65F6\u91CA\u653E\u8D44\u6E90\u3001\u96C6\u5408\u7C7B\u672A\u6E05\u7406\u7B49\u3002</p></li></ol><p>\u8BF7\u8BB0\u5F97\uFF0C\u5728\u8FDB\u884C\u8FD9\u4E9B\u64CD\u4F5C\u65F6\uFF0C\u8981\u6839\u636E\u5B9E\u9645\u7684\u5185\u5B58\u4F7F\u7528\u60C5\u51B5\u548C\u5E94\u7528\u7279\u70B9\u7075\u6D3B\u8C03\u6574\u5206\u6790\u7B56\u7565\uFF0C\u4EE5\u6700\u9AD8\u6548\u5730\u5B9A\u4F4D\u95EE\u9898\u3002</p><p><strong>\u6CE8\u610F</strong>\uFF1A\u4E0A\u8FF0\u6B65\u9AA4\u4F9D\u8D56\u4E8EArthas\u5DE5\u5177\u53CA\u5176\u63D0\u4F9B\u7684\u547D\u4EE4\uFF0C\u8BF7\u786E\u4FDD\u4F60\u7684\u73AF\u5883\u4E2D\u5DF2\u6B63\u786E\u5B89\u88C5\u5E76\u914D\u7F6E\u4E86Arthas\u3002\u6B64\u5916\uFF0C\u9891\u7E41\u7684\u5806\u8F6C\u50A8\u64CD\u4F5C\u53EF\u80FD\u4F1A\u5BF9\u5E94\u7528\u6027\u80FD\u4EA7\u751F\u5F71\u54CD\uFF0C\u56E0\u6B64\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u5B9E\u65BD\u65F6\u9700\u8C28\u614E\u9009\u62E9\u65F6\u673A\u3002</p>`,8),u=e("---------------"),f=o("h2",{id:"\u53C2\u8003\u94FE\u63A5",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true"},"#"),e(" \u53C2\u8003\u94FE\u63A5 \uFF1A")],-1),m=e("\u4E13\u5BB6\u7ECF\u9A8C\uFF1AArthas \u6392\u67E5\u5185\u5B58\u6CC4\u9732\u7684\u65B9\u6CD5"),g=e("\u4E13\u5BB6\u7ECF\u9A8C\uFF1AJava \u5806\u5185\u5B58\u8BF4\u660E"),b=e("profiler"),v=e("---------------"),k={id:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",tabindex:"-1"},x=o("a",{class:"header-anchor",href:"#\u7B54\u7591\u670D\u52A1\u8BF4\u660E","aria-hidden":"true"},"#",-1),A=e(),y=e("\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"),M=e("\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86"),F=e("\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1"),E=e("\uFF0C\u5728"),J=e("\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C"),L=e("\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : "),T={href:"https://answer.opensource.alibaba.com/docs/intro",target:"_blank",rel:"noopener noreferrer"},V=e("\u5168\u5C40\u4E13\u5BB6\u7B54\u7591"),B=e(" \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898"),I=o("h3",{id:"\u53CD\u9988",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u53CD\u9988","aria-hidden":"true"},"#"),e(" \u53CD\u9988")],-1),N=e("\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A"),O={href:"https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16075",target:"_blank",rel:"noopener noreferrer"},q=e("\u5DEE\u8BC4"),w=e("\u7ED9\u6211\u4EEC\u53CD\u9988\u3002");function C(G,H){const a=r("font"),n=r("RouterLink"),c=r("ExternalLinkIcon");return i(),h("div",null,[p,t(a,{color:"#949494"},{default:s(()=>[u]),_:1}),f,o("p",null,[t(n,{to:"/doc/expert/user-question-history12455.html"},{default:s(()=>[m]),_:1})]),o("p",null,[t(n,{to:"/doc/expert/user-question-history12716.html"},{default:s(()=>[g]),_:1})]),o("p",null,[t(n,{to:"/doc/profiler.html"},{default:s(()=>[b]),_:1})]),t(a,{color:"#949494"},{default:s(()=>[v]),_:1}),o("h2",k,[x,A,t(a,{color:"#FF0000"},{default:s(()=>[y]),_:1})]),o("p",null,[M,t(a,{color:"#FF0000"},{default:s(()=>[F]),_:1}),E,t(a,{color:"#FF0000"},{default:s(()=>[J]),_:1}),L,o("a",T,[V,t(c)]),B]),I,o("p",null,[N,o("a",O,[q,t(c)]),w])])}const R=d(_,[["render",C],["__file","user-question-history13512.html.vue"]]);export{R as default};