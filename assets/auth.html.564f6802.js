import{_ as s,o as i,c as o,a as e,b as r,d as a,e as n,r as c}from"./app.b2be689e.js";const d={},l=a(`<h1 id="auth" tabindex="-1"><a class="header-anchor" href="#auth" aria-hidden="true">#</a> auth</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Authenticates the current session</p></div><h3 id="configure-username-and-password" tabindex="-1"><a class="header-anchor" href="#configure-username-and-password" aria-hidden="true">#</a> Configure username and password</h3><p>When attaching, you can specify a password on the command line. such as:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>java -jar arthas-boot.jar --password ppp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>The user can be specified by the <code>--username</code> option, the default value is <code>arthas</code>.</p></li><li><p>You can also configure username/password in <code>arthas.properties</code>. The priority of the command line is higher than that of the configuration file.</p></li><li><p>If only <code>username</code> is configured and no <code>password</code> is configured, a random password will be generated and printed in <code>~/logs/arthas/arthas.log</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Using generated security password: 0vUBJpRIppkKuZ7dYzYqOKtranj4unGh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="local-connection-does-not-require-authentication" tabindex="-1"><a class="header-anchor" href="#local-connection-does-not-require-authentication" aria-hidden="true">#</a> Local connection does not require authentication</h3><p>By default, there are configurations in the <code>arthas.properties</code> file:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>arthas.localConnectionNonAuth=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>When the password is configured, connect from localhost, the authentication is not required. The default configuration value is true, which is convenient for local connection. Authentication is only required when connecting remotely.</p><h3 id="authenticate-in-the-telnet-console" tabindex="-1"><a class="header-anchor" href="#authenticate-in-the-telnet-console" aria-hidden="true">#</a> Authenticate in the telnet console</h3><p>After connecting to arthas, directly executing the command will prompt for authentication:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>arthas@37430<span class="token punctuation">]</span>$ <span class="token builtin class-name">help</span>
Error<span class="token operator">!</span> <span class="token builtin class-name">command</span> not permitted, try to use <span class="token string">&#39;auth&#39;</span> <span class="token builtin class-name">command</span> to authenticates.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Use the <code>auth</code> command to authenticate, and you can execute other commands after success.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[arthas@37430]$ auth ppp
Authentication result: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>The user can be specified by the <code>--username</code> option, the default value is <code>arthas</code>.</li></ul><h3 id="web-console-authentication" tabindex="-1"><a class="header-anchor" href="#web-console-authentication" aria-hidden="true">#</a> Web console Authentication</h3><p>Open the browser, there will be a pop-up window prompting you to enter your username and password.</p><p>After success, you can directly connect to the web console.</p><h3 id="http-api-authentication" tabindex="-1"><a class="header-anchor" href="#http-api-authentication" aria-hidden="true">#</a> HTTP API Authentication</h3><h4 id="http-authorization-header-recommended" tabindex="-1"><a class="header-anchor" href="#http-authorization-header-recommended" aria-hidden="true">#</a> HTTP Authorization Header(recommended)</h4><p>Arthas uses the HTTP standard Basic Authorization.</p>`,22),u=n("Reference: "),h={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication",target:"_blank",rel:"noopener noreferrer"},p=n("https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"),m=a(`<p>For example, if the user name is: <code>admin</code> and the password is <code>admin</code>, the combination is a string: <code>admin:admin</code>, the base64 result is: <code>YWRtaW46YWRtaW4=</code>, then the HTTP request adds the <code>Authorization</code> header:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;http://localhost:8563/api&#39;</span> <span class="token punctuation">\\</span>
  -H <span class="token string">&#39;Authorization: Basic YWRtaW46YWRtaW4=&#39;</span> <span class="token punctuation">\\</span>
  --data-raw <span class="token string">&#39;{&quot;action&quot;:&quot;exec&quot;,&quot;command&quot;:&quot;version&quot;}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="url-parameters" tabindex="-1"><a class="header-anchor" href="#url-parameters" aria-hidden="true">#</a> URL parameters</h4><p>It supports passing username and password in parameters. such as:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;http://localhost:8563/api?password=admin&#39;</span> <span class="token punctuation">\\</span>
  --data-raw <span class="token string">&#39;{&quot;action&quot;:&quot;exec&quot;,&quot;command&quot;:&quot;version&quot;}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function v(b,g){const t=c("ExternalLinkIcon");return i(),o("div",null,[l,e("ul",null,[e("li",null,[u,e("a",h,[p,r(t)])])]),m])}var x=s(d,[["render",v],["__file","auth.html.vue"]]);export{x as default};
