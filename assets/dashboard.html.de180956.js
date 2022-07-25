import{_ as n}from"./dashboard.12e8f42a.js";import{_ as s,o as r,c as d,a as e,b as i,e as a,d as l,r as o}from"./app.b2be689e.js";const h={},c=e("h1",{id:"dashboard",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dashboard","aria-hidden":"true"},"#"),a(" dashboard")],-1),u={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=en&id=command-dashboard",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"dashboard",-1),v=a(" online tutorial"),p=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[a("This is the real time statistics dashboard for the current system, press "),e("code",null,"Ctrl+C"),a(" to exit.")])],-1),b=a("When running in Apache Tomcat Alibaba edition, the dashboard will also present the real time statistics of the tomcat, including "),f={href:"https://en.wikipedia.org/wiki/Queries_per_second",target:"_blank",rel:"noopener noreferrer"},g=a("QPS"),_=a(", RT, error counts, and thread pool, etc."),T=l(`<h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3><table><thead><tr><th style="text-align:right;">Name</th><th style="text-align:left;">Specification</th></tr></thead><tbody><tr><td style="text-align:right;">[i:]</td><td style="text-align:left;">The interval (in ms) between two executions, default is 5000 ms.</td></tr><tr><td style="text-align:right;">[n:]</td><td style="text-align:left;">The number of times this command will be executed.</td></tr></tbody></table><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ dashboard
ID   NAME                           GROUP           PRIORITY   STATE     %CPU      DELTA_TIME TIME      INTERRUPTE DAEMON
-1   C2 CompilerThread0             -               -1         -         1.55      0.077      0:8.684   false      true
53   Timer-for-arthas-dashboard-07b system          5          RUNNABLE  0.08      0.004      0:0.004   false      true
22   scheduling-1                   main            5          TIMED_WAI 0.06      0.003      0:0.287   false      false
-1   C1 CompilerThread0             -               -1         -         0.06      0.003      0:2.171   false      true
-1   VM Periodic Task Thread        -               -1         -         0.03      0.001      0:0.092   false      true
49   arthas-NettyHttpTelnetBootstra system          5          RUNNABLE  0.02      0.001      0:0.156   false      true
16   Catalina-utility-1             main            1          TIMED_WAI 0.0       0.000      0:0.029   false      false
-1   G1 Young RemSet Sampling       -               -1         -         0.0       0.000      0:0.019   false      true
17   Catalina-utility-2             main            1          WAITING   0.0       0.000      0:0.025   false      false
34   http-nio-8080-ClientPoller     main            5          RUNNABLE  0.0       0.000      0:0.016   false      true
23   http-nio-8080-BlockPoller      main            5          RUNNABLE  0.0       0.000      0:0.011   false      true
-1   VM Thread                      -               -1         -         0.0       0.000      0:0.032   false      true
-1   Service Thread                 -               -1         -         0.0       0.000      0:0.006   false      true
-1   GC Thread#5                    -               -1         -         0.0       0.000      0:0.043   false      true
Memory                     used     total    max      usage    GC
heap                       36M      70M      4096M    0.90%    gc.g1_young_generation.count   12
g1_eden_space              6M       18M      -1       33.33%                                  86
g1_old_gen                 30M      50M      4096M    0.74%    gc.g1_old_generation.count     0
g1_survivor_space          491K     2048K    -1       24.01%   gc.g1_old_generation.time(ms)  0
nonheap                    66M      69M      -1       96.56%
codeheap_&#39;non-nmethods&#39;    1M       2M       5M       22.39%
metaspace                  46M      47M      -1       98.01%
Runtime
os.name                                                        Mac OS X
os.version                                                     10.15.4
java.version                                                   15
java.home                                                      /Library/Java/JavaVirtualMachines/jdk-15.jdk/Contents/Home
systemload.average                                             10.68
processors                                                     8
uptime                                                         272s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="notes-on-column-headers" tabindex="-1"><a class="header-anchor" href="#notes-on-column-headers" aria-hidden="true">#</a> Notes on column headers</h3><ul><li>ID: JVM thread ID, pls. note this ID is different from the nativeID in jstack</li><li>NAME: thread name</li><li>GROUP: thread group name</li><li>PRIORITY: thread priority, ranged from 1 to 10. The greater number, the higher priority</li><li>STATE: thread state</li><li>CPU%: the ratio of CPU usage for the thread. For example, the sampling interval is 1000ms, and the incremental cpu time of a thread is 100ms, then the cpu usage rate=100/1000=10%</li><li>DELTA_TIME: incremental CPU time of thread running after the last sampling in <code>second</code> format</li><li>TIME: total CPU time of the thread in <code>minute:second</code> format</li><li>INTERRUPTED: the thread interruption state</li><li>DAEMON: daemon thread or not</li></ul><h4 id="jvm-internal-threads" tabindex="-1"><a class="header-anchor" href="#jvm-internal-threads" aria-hidden="true">#</a> JVM internal threads</h4><p>After Java 8, it is supported to obtain the CPU time of JVM internal threads. These threads only have the name and CPU time, without ID and status information (display ID is -1).</p><p>JVM activities can be observed through internal threads, such as GC, JIT compilation, etc., to perceive the overall status of JVM.</p><ul><li>When the JVM heap/metaspace space is insufficient or OOM, it can be seen that the CPU usage of the GC threads is significantly higher than other threads.</li><li>After executing commands such as <code>trace/watch/tt/redefine</code>, you can see that JIT threads activities become more frequent. Because the JIT compilation data related to this class is cleared when the JVM hot update the class bytecode, it needs to be recompiled.</li></ul><p>JVM internal threads include the following:</p><ul><li>JIT compilation thread: such as <code>C1 CompilerThread0</code>, <code>C2 CompilerThread0</code></li><li>GC thread: such as <code>GC Thread0</code>, <code>G1 Young RemSet Sampling</code></li><li>Other internal threads: such as<code>VM Periodic Task Thread</code>, <code>VM Thread</code>, <code>Service Thread</code></li></ul><h3 id="screenshot" tabindex="-1"><a class="header-anchor" href="#screenshot" aria-hidden="true">#</a> Screenshot</h3><p><img src="`+n+'" alt="" title="dashboard"></p>',14);function M(I,C){const t=o("ExternalLinkIcon");return r(),d("div",null,[c,e("p",null,[e("a",u,[m,v,i(t)])]),p,e("p",null,[b,e("a",f,[g,i(t)]),_]),T])}var E=s(h,[["render",M],["__file","dashboard.html.vue"]]);export{E as default};
