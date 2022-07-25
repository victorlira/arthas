import{_ as l,o as i,c,a,b as n,w as t,e as s,d as p,r}from"./app.b2be689e.js";const d={},u=a("h1",{id:"advanced-usage",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#advanced-usage","aria-hidden":"true"},"#"),s(" Advanced Usage")],-1),h=a("h2",{id:"web-console",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#web-console","aria-hidden":"true"},"#"),s(" Web Console")],-1),v=a("p",null,"Arthas supports living inside a browser. The communication between arthas and browser is via websocket.",-1),b=s("Web Console"),m=a("h2",{id:"arthas-properties",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#arthas-properties","aria-hidden":"true"},"#"),s(" Arthas Properties")],-1),k=s("Arthas Properties"),_=a("h2",{id:"start-as-a-java-agent",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#start-as-a-java-agent","aria-hidden":"true"},"#"),s(" Start as a Java Agent")],-1),g=s("Start as a Java Agent"),f=p(`<h2 id="as-sh-and-arthas-boot-tips" tabindex="-1"><a class="header-anchor" href="#as-sh-and-arthas-boot-tips" aria-hidden="true">#</a> as.sh and arthas-boot tips</h2><ul><li>Select the process to be attached via the <code>select</code> option.</li></ul><p>Normally, <code>as.sh</code>/<code>arthas-boot.jar</code> needs to a pid, bacause the pid will change.</p><p>For example, with <code>math-game.jar</code> already started, use the <code>jps</code> command to see.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ jps
<span class="token number">58883</span> math-game.jar
<span class="token number">58884</span> Jps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>select</code> option allows you to specify a process name, which is very convenient.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ./as.sh --select math-game
Arthas script version: <span class="token number">3.3</span>.6
<span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> JAVA_HOME: /tmp/java/8.0.222-zulu
Arthas home: /Users/admin/.arthas/lib/3.3.6/arthas
Calculating attach execution time<span class="token punctuation">..</span>.
Attaching to <span class="token number">59161</span> using version /Users/admin/.arthas/lib/3.3.6/arthas<span class="token punctuation">..</span>.

real	0m0.572s
user	0m0.281s
sys	0m0.039s
Attach success.
telnet connecting to arthas server<span class="token punctuation">..</span>. current timestamp is <span class="token number">1594280799</span>
Trying <span class="token number">127.0</span>.0.1<span class="token punctuation">..</span>.
Connected to localhost.
Escape character is <span class="token string">&#39;^]&#39;</span><span class="token builtin class-name">.</span>
  ,---.  ,------. ,--------.,--.  ,--.  ,---.   ,---.
 /  O  <span class="token punctuation">\\</span> <span class="token operator">|</span>  .--. <span class="token string">&#39;&#39;</span>--.  .--<span class="token string">&#39;|  &#39;</span>--<span class="token string">&#39;  | /  O  \\ &#39;</span>   .-<span class="token string">&#39;
|  .-.  ||  &#39;</span>--<span class="token string">&#39;.&#39;</span>   <span class="token operator">|</span>  <span class="token operator">|</span>   <span class="token operator">|</span>  .--.  <span class="token operator">||</span>  .-.  <span class="token operator">|</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">.</span>  <span class="token variable">\`</span></span>-.
<span class="token operator">|</span>  <span class="token operator">|</span> <span class="token operator">|</span>  <span class="token operator">||</span>  <span class="token operator">|</span><span class="token punctuation">\\</span>  <span class="token punctuation">\\</span>    <span class="token operator">|</span>  <span class="token operator">|</span>   <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">||</span>  <span class="token operator">|</span> <span class="token operator">|</span>  <span class="token operator">|</span>.-<span class="token string">&#39;    |
\`--&#39;</span> <span class="token variable"><span class="token variable">\`</span>--&#39;<span class="token variable">\`</span></span>--<span class="token string">&#39; &#39;</span>--<span class="token string">&#39;   \`--&#39;</span>   <span class="token variable"><span class="token variable">\`</span>--&#39;  <span class="token variable">\`</span></span>--<span class="token string">&#39;\`--&#39;</span> <span class="token variable"><span class="token variable">\`</span>--&#39;<span class="token variable">\`</span></span>-----&#39;


wiki      https://arthas.aliyun.com/doc
tutorials https://arthas.aliyun.com/doc/arthas-tutorials.html
version   <span class="token number">3.3</span>.6
pid       <span class="token number">58883</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="user-data-report" tabindex="-1"><a class="header-anchor" href="#user-data-report" aria-hidden="true">#</a> User data report</h2><p>After the <code>3.1.4</code> version, arthas support user data report.</p><p>At startup, use the <code>stat-url</code> option, such as: <code>./as.sh --stat-url &#39;http://192.168.10.11:8080/api/stat&#39;</code></p><p>There is a sample data report in the tunnel server that users can implement on their own.</p>`,11),x={href:"https://github.com/alibaba/arthas/blob/master/tunnel-server/src/main/java/com/alibaba/arthas/tunnel/server/app/web/StatController.java",target:"_blank",rel:"noopener noreferrer"},w=s("StatController.java"),A=a("h2",{id:"other-features",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#other-features","aria-hidden":"true"},"#"),s(" Other features")],-1),j=s("Async support"),y=s("log the output"),C=s("batch"),N={href:"https://github.com/alibaba/arthas/issues/11",target:"_blank",rel:"noopener noreferrer"},S=s("how to use ognl");function E(O,T){const e=r("RouterLink"),o=r("ExternalLinkIcon");return i(),c("div",null,[u,h,v,a("ul",null,[a("li",null,[n(e,{to:"/en/doc/web-console.html"},{default:t(()=>[b]),_:1})])]),m,a("ul",null,[a("li",null,[n(e,{to:"/en/doc/arthas-properties.html"},{default:t(()=>[k]),_:1})])]),_,a("ul",null,[a("li",null,[n(e,{to:"/en/doc/agent.html"},{default:t(()=>[g]),_:1})])]),f,a("p",null,[a("a",x,[w,n(o)])]),A,a("ul",null,[a("li",null,[n(e,{to:"/en/doc/async.html"},{default:t(()=>[j]),_:1})]),a("li",null,[n(e,{to:"/en/doc/logger.html"},{default:t(()=>[y]),_:1})]),a("li",null,[n(e,{to:"/en/doc/batch-support.html"},{default:t(()=>[C]),_:1})]),a("li",null,[a("a",N,[S,n(o)])])])])}var V=l(d,[["render",E],["__file","advanced-use.html.vue"]]);export{V as default};
