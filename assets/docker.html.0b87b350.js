import{_ as n,o as e,c as t,a,b as i,d as o,e as c,r as l}from"./app.b2be689e.js";const p={},r=o(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1><h2 id="use-jdk-in-docker" tabindex="-1"><a class="header-anchor" href="#use-jdk-in-docker" aria-hidden="true">#</a> Use JDK in Docker</h2><p>Many times, the problem that arthas can&#39;t work with the application in docker is because the docker does not install JDK, but installs JRE. If only JRE is installed, many JAVA command line tools and class libraries will be missing, and Arthas will not work properly. Here are two common ways to use JDK in Docker.</p><h3 id="use-public-jdk-image" tabindex="-1"><a class="header-anchor" href="#use-public-jdk-image" aria-hidden="true">#</a> Use public JDK image</h3><ul><li>https://hub.docker.com/_/openjdk/</li></ul><p>such as:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>FROM openjdk:8-jdk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>FROM openjdk:8-jdk-alpine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="install-via-package-management-software" tabindex="-1"><a class="header-anchor" href="#install-via-package-management-software" aria-hidden="true">#</a> Install via package management software</h3><p>such as:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Install OpenJDK-8</span>
RUN <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
    <span class="token function">apt-get</span> <span class="token function">install</span> -y openjdk-8-jdk <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
    <span class="token function">apt-get</span> <span class="token function">install</span> -y ant <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
    <span class="token function">apt-get</span> clean<span class="token punctuation">;</span>

<span class="token comment"># Fix certificate issues</span>
RUN <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
    <span class="token function">apt-get</span> <span class="token function">install</span> ca-certificates-java <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
    <span class="token function">apt-get</span> clean <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
    update-ca-certificates -f<span class="token punctuation">;</span>

<span class="token comment"># Setup JAVA_HOME - useful for docker commandline</span>
ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/
RUN <span class="token builtin class-name">export</span> JAVA_HOME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>or:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>RUN yum <span class="token function">install</span> -y <span class="token punctuation">\\</span>
   java-1.8.0-openjdk <span class="token punctuation">\\</span>
   java-1.8.0-openjdk-devel

ENV JAVA_HOME /usr/lib/jvm/java-1.8.0-openjdk/
RUN <span class="token builtin class-name">export</span> JAVA_HOME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="quick-start-with-docker" tabindex="-1"><a class="header-anchor" href="#quick-start-with-docker" aria-hidden="true">#</a> Quick start with Docker</h2><ol><li><p>Delete the existing <code>math-game</code> docker container (not necessary)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> stop math-game <span class="token operator">||</span> <span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> <span class="token function">rm</span> math-game <span class="token operator">||</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Start <code>math-game</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> run --name math-game -it hengyunabc/arthas:latest /bin/sh -c <span class="token string">&quot;java -jar /opt/arthas/math-game.jar&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Start <code>arthas-boot</code> for diagnosis</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it math-game /bin/sh -c <span class="token string">&quot;java -jar /opt/arthas/arthas-boot.jar&quot;</span>
* <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: <span class="token number">9</span> jar

<span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> arthas home: /opt/arthas
<span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> Try to attach process <span class="token number">9</span>
<span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> Attach process <span class="token number">9</span> success.
<span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> arthas-client connect <span class="token number">127.0</span>.0.1 <span class="token number">3658</span>
,---.  ,------. ,--------.,--.  ,--.  ,---.   ,---.
/  O  <span class="token punctuation">\\</span> <span class="token operator">|</span>  .--. <span class="token string">&#39;&#39;</span>--.  .--<span class="token string">&#39;|  &#39;</span>--<span class="token string">&#39;  | /  O  \\ &#39;</span>   .-<span class="token string">&#39;
|  .-.  ||  &#39;</span>--<span class="token string">&#39;.&#39;</span>   <span class="token operator">|</span>  <span class="token operator">|</span>   <span class="token operator">|</span>  .--.  <span class="token operator">||</span>  .-.  <span class="token operator">|</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">.</span>  <span class="token variable">\`</span></span>-.
<span class="token operator">|</span>  <span class="token operator">|</span> <span class="token operator">|</span>  <span class="token operator">||</span>  <span class="token operator">|</span><span class="token punctuation">\\</span>  <span class="token punctuation">\\</span>    <span class="token operator">|</span>  <span class="token operator">|</span>   <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">||</span>  <span class="token operator">|</span> <span class="token operator">|</span>  <span class="token operator">|</span>.-<span class="token string">&#39;    |
\`--&#39;</span> <span class="token variable"><span class="token variable">\`</span>--&#39;<span class="token variable">\`</span></span>--<span class="token string">&#39; &#39;</span>--<span class="token string">&#39;   \`--&#39;</span>   <span class="token variable"><span class="token variable">\`</span>--&#39;  <span class="token variable">\`</span></span>--<span class="token string">&#39;\`--&#39;</span> <span class="token variable"><span class="token variable">\`</span>--&#39;<span class="token variable">\`</span></span>-----&#39;


wiki: https://arthas.aliyun.com/doc
version: <span class="token number">3.0</span>.5
pid: <span class="token number">9</span>
time: <span class="token number">2018</span>-12-18 <span class="token number">11</span>:30:36
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="diagnose-the-java-process-in-docker" tabindex="-1"><a class="header-anchor" href="#diagnose-the-java-process-in-docker" aria-hidden="true">#</a> Diagnose the Java process in Docker</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it  <span class="token variable">\${containerId}</span> /bin/bash -c <span class="token string">&quot;wget https://arthas.aliyun.com/arthas-boot.jar &amp;&amp; java -jar arthas-boot.jar&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="diagnose-the-java-process-in-the-container-in-k8s" tabindex="-1"><a class="header-anchor" href="#diagnose-the-java-process-in-the-container-in-k8s" aria-hidden="true">#</a> Diagnose the Java process in the container in k8s</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl <span class="token builtin class-name">exec</span> -it <span class="token variable">\${pod}</span> --container <span class="token variable">\${containerId}</span> -- /bin/bash -c <span class="token string">&quot;wget https://arthas.aliyun.com/arthas-boot.jar &amp;&amp; java -jar arthas-boot.jar&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="install-arthas-into-the-base-docker-image" tabindex="-1"><a class="header-anchor" href="#install-arthas-into-the-base-docker-image" aria-hidden="true">#</a> Install Arthas into the base Docker image</h2><p>It&#39;s easy to install Arthas into your Docker image.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>FROM openjdk:8-jdk-alpine

# copy arthas
COPY --from=hengyunabc/arthas:latest /opt/arthas /opt/arthas
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want to specify a version, you can view all the tags:</p>`,24),d={href:"https://hub.docker.com/r/hengyunabc/arthas/tags",target:"_blank",rel:"noopener noreferrer"},u=c("https://hub.docker.com/r/hengyunabc/arthas/tags");function k(v,m){const s=l("ExternalLinkIcon");return e(),t("div",null,[r,a("p",null,[a("a",d,[u,i(s)])])])}var b=n(p,[["render",k],["__file","docker.html.vue"]]);export{b as default};
