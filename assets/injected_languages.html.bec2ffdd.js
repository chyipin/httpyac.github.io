import{_ as e,o as a,c as n,d as s}from"./app.387e2432.js";const i={},t=s(`<h1 id="injected-languages" tabindex="-1"><a class="header-anchor" href="#injected-languages" aria-hidden="true">#</a> Injected Languages</h1><p>The parser logic allows to parse other file formats as well and to determine the respective Http blocks. This makes it possible, for example, to extend Http code blocks from Markdown with httpyac functionality. The idea is that directly from the documentation, the respective endpoints can be tested.</p><h2 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h2><p>In Markdown, code blocks can be given a language. If this is set to <code>http</code>, httpyac activates and offers to send the request.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> Markdown</span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">http</span>
<span class="token code-block language-http">GET https://httpbin.org/json</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="asciidoctor" tabindex="-1"><a class="header-anchor" href="#asciidoctor" aria-hidden="true">#</a> Asciidoctor</h2><p>In Asciidoctor, code blocks can be given a language. If this is set to <code>http</code>, httpyac activates and offers to send the request.</p><div class="language-asciidoctor line-numbers-mode" data-ext="asciidoctor"><pre class="language-asciidoctor"><code>== Asciidoctor

[source,http]
----
GET https://httpbin.org/json
----
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),d=[t];function c(o,r){return a(),n("div",null,d)}const h=e(i,[["render",c],["__file","injected_languages.html.vue"]]);export{h as default};
