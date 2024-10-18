import{_ as c,o,c as d,a as e,b as a,w as t,e as s,d as r,r as l}from"./app.e05b0501.js";const u={},p=e("h1",{id:"dump",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dump","aria-hidden":"true"},"#"),s(" dump")],-1),h={href:"https://arthas.aliyun.com/doc/arthas-tutorials?language=en&id=command-dump",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"dump",-1),v=s(" online tutorial"),b=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"Dump the bytecode for the particular classes to the specified directory.")],-1),g=s("The dump command is used to dump the bytecode of classes actually running in the JVM to a specified directory. It is suitable for bulk downloading the bytecode of classes in a specific package directory. If you need to decompile a single class or view class information in real-time, you can refer to "),_=s("jad"),f=s("."),k=e("h2",{id:"options",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),s(" Options")],-1),L=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"right"}},"Name"),e("th",{style:{"text-align":"left"}},"Specification")])],-1),y=e("tr",null,[e("td",{style:{"text-align":"right"}},[e("em",null,"class-pattern")]),e("td",{style:{"text-align":"left"}},"class name pattern")],-1),x=e("td",{style:{"text-align":"right"}},[e("code",null,"[c:]")],-1),C={style:{"text-align":"left"}},A=s("hashcode of the "),S=s("class loader"),w=s(" that loaded the target class"),O=e("tr",null,[e("td",{style:{"text-align":"right"}},[e("code",null,"[classLoaderClass:]")]),e("td",{style:{"text-align":"left"}},"The class name of the ClassLoader that executes the expression.")],-1),E=e("tr",null,[e("td",{style:{"text-align":"right"}},[e("code",null,"[d:]")]),e("td",{style:{"text-align":"left"}},"set the destination directory for class files")],-1),$=e("tr",null,[e("td",{style:{"text-align":"right"}},[e("code",null,"[E]")]),e("td",{style:{"text-align":"left"}},"turn on regex match, the default behavior is wild card match")],-1),j=r(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ dump java.lang.String
 HASHCODE  CLASSLOADER  LOCATION
 null                   /Users/admin/logs/arthas/classdump/java/lang/String.class
Affect<span class="token punctuation">(</span>row-cnt:1<span class="token punctuation">)</span> cost <span class="token keyword">in</span> <span class="token number">119</span> ms.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ dump demo.*
 HASHCODE  CLASSLOADER                                    LOCATION
 3d4eac69  +-sun.misc.Launcher<span class="token variable">$AppClassLoader</span>@3d4eac69    /Users/admin/logs/arthas/classdump/sun.misc.Launcher<span class="token variable">$AppClassLoader</span>-3d4eac69/demo/MathGame.class
             +-sun.misc.Launcher<span class="token variable">$ExtClassLoader</span>@66350f69
Affect<span class="token punctuation">(</span>row-cnt:1<span class="token punctuation">)</span> cost <span class="token keyword">in</span> <span class="token number">39</span> ms.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ dump <span class="token parameter variable">-d</span> /tmp/output java.lang.String
 HASHCODE  CLASSLOADER  LOCATION
 null                   /tmp/output/java/lang/String.class
Affect<span class="token punctuation">(</span>row-cnt:1<span class="token punctuation">)</span> cost <span class="token keyword">in</span> <span class="token number">138</span> ms.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Specify classLoader</li></ul><p>Note that the hashcode changes, you need to check the current ClassLoader information first, and extract the hashcode corresponding to the ClassLoader.</p><p>if you use<code>-c</code>, you have to manually type hashcode by <code>-c &lt;hashcode&gt;</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ dump <span class="token parameter variable">-c</span> 3d4eac69 demo.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>For classloader with only one instance, it can be specified by <code>--classLoaderClass</code> using class name, which is more convenient to use.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ dump <span class="token parameter variable">--classLoaderClass</span> sun.misc.Launcher<span class="token variable">$AppClassLoader</span> demo.*
 HASHCODE  CLASSLOADER                                    LOCATION
 3d4eac69  +-sun.misc.Launcher<span class="token variable">$AppClassLoader</span>@3d4eac69    /Users/admin/logs/arthas/classdump/sun.misc.Launcher<span class="token variable">$AppClassLoader</span>-3d4eac69/demo/MathGame.class
             +-sun.misc.Launcher<span class="token variable">$ExtClassLoader</span>@66350f69
Affect<span class="token punctuation">(</span>row-cnt:1<span class="token punctuation">)</span> cost <span class="token keyword">in</span> <span class="token number">39</span> ms.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>PS: Here the classLoaderClass in java 8 is sun.misc.Launcher$AppClassLoader, while in java 11 it&#39;s jdk.internal.loader.ClassLoaders$AppClassLoader. Currently killercoda using java 11.</li></ul><p>The value of <code>--classloaderclass</code> is the class name of classloader. It can only work when it matches a unique classloader instance. The purpose is to facilitate the input of general commands. However, <code>-c &lt;hashcode&gt;</code> is dynamic.</p>`,12);function H(I,N){const i=l("ExternalLinkIcon"),n=l("RouterLink");return o(),d("div",null,[p,e("p",null,[e("a",h,[m,v,a(i)])]),b,e("p",null,[g,a(n,{to:"/en/doc/jad.html"},{default:t(()=>[_]),_:1}),f]),k,e("table",null,[L,e("tbody",null,[y,e("tr",null,[x,e("td",C,[A,a(n,{to:"/en/doc/classloader.html"},{default:t(()=>[S]),_:1}),w])]),O,E,$])]),j])}const D=c(u,[["render",H],["__file","dump.html.vue"]]);export{D as default};