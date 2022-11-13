import{_ as i,r as t,o,c as l,a,e,b as r,w as c,d as n}from"./app.387e2432.js";const p="/assets/parse_flow.3426f319.svg",d="/assets/send_flow.e379ca24.svg",u="/assets/execute_flow.7ea97810.svg",h={},g=n(`<h1 id="plugin-development-guide" tabindex="-1"><a class="header-anchor" href="#plugin-development-guide" aria-hidden="true">#</a> Plugin Development Guide</h1><h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting started</h2><p>A httpYac plugin is an npm package that can add additional features to the project using httpYac. These features can include:</p><ul><li>provide additional environments</li><li>remove sensitive information from logging</li><li>provide additional variable substitution</li><li>add new parser logic and actions</li></ul><p>As an npm package, CLI plugin must have a <code>package.json</code> file. It&#39;s also recommended to have a plugin description in <code>README.md</code> to help others find your plugin on npm.</p><p>So, typical CLI plugin folder structure looks like the following:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── README.md
├── index.js      <span class="token comment"># service plugin</span>
├── package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="naming-and-discoverability" tabindex="-1"><a class="header-anchor" href="#naming-and-discoverability" aria-hidden="true">#</a> Naming and Discoverability</h2><p>For a plugin to be usable in a httpYac project, it must follow the name convention <code>httpyac-plugin-&lt;name&gt;</code> or <code>@scope/httpyac-plugin-&lt;name&gt;</code>. It allows your plugin to be:</p><ul><li>Discoverable by httpYac;</li><li>Discoverable by other developers via searching;</li></ul><div class="custom-container warning"><p class="custom-container-title">Warning</p><p>Make sure to name the plugin correctly, otherwise it will be impossible to find it with httpYac plugins search!</p></div><p>For better discoverability when a user searches for your plugin, put keywords describing your plugin in the <code>description</code> field of the plugin <code>package.json</code> file.</p><p>Example:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;httpyac-plugin-keystore&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.7.7&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;httpyac plugin to add keystore support to variables&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\`</p><h2 id="service-plugin" tabindex="-1"><a class="header-anchor" href="#service-plugin" aria-hidden="true">#</a> Service Plugin</h2><p>Service plugin serves for extending hooks on every httpyac execution.</p><p>Service plugins are loaded automatically when a Service instance is created - i.e. every time the <code>httpyac</code> command is invoked inside a project. It&#39;s located in the <code>index.js</code> file in httpyac plugin root folder.</p><p>A service plugin should export a function which receives one arguments:</p>`,19),v=n(`<p>The minimal required code in the service plugin file is the following:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="parsing-flowchart" tabindex="-1"><a class="header-anchor" href="#parsing-flowchart" aria-hidden="true">#</a> Parsing FlowChart</h2><p><img src="`+p+'" alt="parse flow"></p><h2 id="sending-flowchart" tabindex="-1"><a class="header-anchor" href="#sending-flowchart" aria-hidden="true">#</a> Sending FlowChart</h2><p><img src="'+d+'" alt="send flow"></p><h2 id="execute-http-region-flowchart" tabindex="-1"><a class="header-anchor" href="#execute-http-region-flowchart" aria-hidden="true">#</a> Execute Http Region FlowChart</h2><p><img src="'+u+'" alt="execute flow"></p>',8);function m(f,b){const s=t("RouterLink");return o(),l("div",null,[g,a("ul",null,[a("li",null,[e("A "),r(s,{to:"/plugins/plugin-api.html"},{default:c(()=>[e("PluginAPI")]),_:1}),e(" instance")])]),v])}const w=i(h,[["render",m],["__file","index.html.vue"]]);export{w as default};
