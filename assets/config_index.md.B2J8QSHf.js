import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.DHk-hcUK.js";
const __pageData = JSON.parse('{"title":"Configuration Reference","description":"","frontmatter":{},"headers":[],"relativePath":"config/index.md","filePath":"config/index.md"}'), _sfc_main = { name: "config/index.md" }, _hoisted_1 = /* @__PURE__ */ createStaticVNode(`<h1 id="configuration-reference" tabindex="-1">Configuration Reference <a class="header-anchor" href="#configuration-reference" aria-label="Permalink to &quot;Configuration Reference&quot;">​</a></h1><p>Basic settings for all requests, logging and general application behavior can be configured via application argument (CLI arguments or VS Code settings). It is also possible to store these centrally in the project root in an <code>httpyac.config.js</code> file, which is observed by both CLI and VS Code Extension.</p><h2 id="project-root" tabindex="-1">Project Root <a class="header-anchor" href="#project-root" aria-label="Permalink to &quot;Project Root&quot;">​</a></h2><p>The project root directory is determined by finding closest directory depending on the current file with one of the following files:</p><ul><li><code>package.json</code></li><li><code>httpyac.config.js</code></li><li><code>.httpyac.js</code></li><li><code>.httpyac.json</code></li><li><code>env</code> directory</li></ul><p>If no suitable folder can be determined, the default settings are used.</p><h2 id="httpyac-config-js" tabindex="-1">httpyac.config.js <a class="header-anchor" href="#httpyac-config-js" aria-label="Permalink to &quot;httpyac.config.js&quot;">​</a></h2><p><code>httpyac.config.js</code> (or <code>.httpyac.js</code>, <code>.httpyac.json</code>) is an optional config file that will be automatically loaded by httpYac if it&#39;s present in your project root (next to <code>package.json</code>). You can also use the <code>httpyac</code> field in <code>package.json</code>, but do note in that case you will be limited to JSON-compatible values only.</p><p>The file should export an object containing options:</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// httpyac.config.js</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // options...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  log: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    level: models.LogLevel.warn,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    supportAnsiColors: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  cookieJarEnabled: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  envDirName: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;env&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>The content of the httpyac.config.js file should correspond to the <a href="https://github.com/AnWeber/httpyac/blob/main/src/models/environmentConfig.ts" target="_blank" rel="noreferrer">interface <code>environmentConfig</code></a>.</p><h3 id="log-level" tabindex="-1">log.level <a class="header-anchor" href="#log-level" aria-label="Permalink to &quot;log.level&quot;">​</a></h3><ul><li>Type: <code>number</code></li><li>Default: <code>warn</code></li></ul><p><a href="https://github.com/AnWeber/httpyac/blob/main/src/models/logHandler.ts#L4-L11" target="_blank" rel="noreferrer">log level</a> of outputs.</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LogLevel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  trace</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  debug</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  warn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  info</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  error</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  none</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="log-supportansicolors" tabindex="-1">log.supportAnsiColors <a class="header-anchor" href="#log-supportansicolors" aria-label="Permalink to &quot;log.supportAnsiColors&quot;">​</a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>enable ansi color support (using <a href="https://github.com/chalk/chalk" target="_blank" rel="noreferrer">chalk</a>)</p><h3 id="envdirname" tabindex="-1">envDirName <a class="header-anchor" href="#envdirname" aria-label="Permalink to &quot;envDirName&quot;">​</a></h3><ul><li>Type: <code>string</code></li><li>Default: <code>&#39;env&#39;</code></li></ul><p>relative or absolute path to env dir</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>A changed value is not used in the Project Root determination</p></div><h3 id="environments" tabindex="-1">environments <a class="header-anchor" href="#environments" aria-label="Permalink to &quot;environments&quot;">​</a></h3><ul><li>Type: <code>object</code></li><li>Default: <code>undefined</code></li></ul><p>This setting is used for environment detection using <a href="/guide/environments.html#json">JSON</a>. Each key of first level of the object is used as environment. Value of the Object is used as Variables.</p><h3 id="request" tabindex="-1">request <a class="header-anchor" href="#request" aria-label="Permalink to &quot;request&quot;">​</a></h3><ul><li>Type: <code>Object</code></li><li>Default: <code>undefined</code></li></ul><p>default configuration for each http request. httpYac uses <a href="https://github.com/sindresorhus/got" target="_blank" rel="noreferrer">got</a> as Http Request Library. <a href="https://github.com/sindresorhus/got/blob/main/documentation/2-options.md" target="_blank" rel="noreferrer">Here</a> all options of <a href="https://github.com/sindresorhus/got" target="_blank" rel="noreferrer">got</a> are described.</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;request&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;https&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:  {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;rejectUnauthorized&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This configuration is passed directly to <code>got</code> without further adjustment. No files are loaded and no variable substitution takes place.</p></div><h3 id="proxy" tabindex="-1">proxy <a class="header-anchor" href="#proxy" aria-label="Permalink to &quot;proxy&quot;">​</a></h3><ul><li>Type: <code>string</code></li><li>Default: <code>undefined</code></li></ul><p>Proxy url for which an HttpProxyAgent is created</p><h3 id="proxyexcludelist" tabindex="-1">proxyExcludeList <a class="header-anchor" href="#proxyexcludelist" aria-label="Permalink to &quot;proxyExcludeList&quot;">​</a></h3><ul><li>Type: <code>array</code> of <code>string</code></li><li>Default: <code>undefined</code></li></ul><p>List of url to ignore proxy setting</p><h3 id="requestbodyinjectvariablesextensions" tabindex="-1">requestBodyInjectVariablesExtensions <a class="header-anchor" href="#requestbodyinjectvariablesextensions" aria-label="Permalink to &quot;requestBodyInjectVariablesExtensions&quot;">​</a></h3><ul><li>Type: <code>Array&lt;String&gt;</code></li><li>Default: <code>undefined</code></li></ul><p>List of file extensions for which <a href="./../guide/request.html#request-body">request body variable replacement</a> is always activated automatically</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This setting was introduced because of better compatibility with Intellij. It is recommended to specify it explicitly per file, otherwise files will be loaded into memory unnecessarily.</p></div><h3 id="clientcertificates" tabindex="-1">clientCertificates <a class="header-anchor" href="#clientcertificates" aria-label="Permalink to &quot;clientCertificates&quot;">​</a></h3><ul><li>Type: <code>Object</code></li><li>Default: <code>undefined</code></li></ul><p><a href="https://github.com/AnWeber/httpyac/blob/main/src/models/clientCertifcateOptions.ts" target="_blank" rel="noreferrer">Object</a> with all client certificates. Each key is interpreted as host. When a call is made to this host, the certificate is automatically appended to the request.</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;clientCertificates&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;localhost:8081&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;cert&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/Users/demo/Certificates/client.crt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/Users/demo/Keys/client.key&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;example.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;cert&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/Users/demo/Certificates/client.crt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/Users/demo/Keys/client.key&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="defaultheaders" tabindex="-1">defaultHeaders <a class="header-anchor" href="#defaultheaders" aria-label="Permalink to &quot;defaultHeaders&quot;">​</a></h3><ul><li>Type: <code>Object</code></li><li>Default: <code>undefined</code></li></ul><p>Object with default headers used for every request.</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;defaultHeaders&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;Authorization&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Bearer {{token}}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="cookiejarenabled" tabindex="-1">cookieJarEnabled <a class="header-anchor" href="#cookiejarenabled" aria-label="Permalink to &quot;cookieJarEnabled&quot;">​</a></h3><ul><li>Type: <code>boolean</code> or <code>Object</code></li><li>Default: <code>true</code></li></ul><p>Enable cookieJar support for every request. Following options are available</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  allowSpecialUseDomain</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> boolean </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  looseMode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> boolean </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  rejectPublicSuffixes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> boolean </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  prefixSecurity</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> string </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="configurehooks" tabindex="-1">configureHooks <a class="header-anchor" href="#configurehooks" aria-label="Permalink to &quot;configureHooks&quot;">​</a></h3><ul><li>Type: <code>Function</code></li></ul><p>By means of the function <a href="https://github.com/AnWeber/httpyac/blob/main/src/models/environmentConfig.ts#L35" target="_blank" rel="noreferrer"><code>configureHooks</code></a> the <a href="./../plugins/plugin-api.html">plugin api</a> can be accessed easily. So without creating a plugin, the same interface can be used to make further adjustments to httpYac.</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	configureHooks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">api</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		api.hooks.responseLogging.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addHook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;removeSensitiveData&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (response.request) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">				delete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.request.headers[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;authorization&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="plugins" tabindex="-1">plugins <a class="header-anchor" href="#plugins" aria-label="Permalink to &quot;plugins&quot;">​</a></h3><ul><li>Type: <code>Object</code></li><li>Default: <code>undefined</code></li></ul><p>This is an object that doesn&#39;t go through any schema validation, so it can be used to pass arbitrary options to 3rd party plugins.</p>`, 59), _hoisted_60 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_60);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
