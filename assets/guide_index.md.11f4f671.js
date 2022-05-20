import{_ as n,c as s,o as a,a as e}from"./app.2d18e4df.js";const f='{"title":"\u4F7F\u7528","description":"","frontmatter":{"sidebar":5},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"More info","slug":"more-info"}],"relativePath":"guide/index.md"}',t={},o=e(`<h1 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h1><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><p>More info see <a href="https://vitepress.vuejs.org/" target="_blank" rel="noopener noreferrer">VitePress Docs</a>.</p><div class="language-bash"><pre><code><span class="token function">pnpm</span> <span class="token function">add</span> vitepress-theme-you
</code></pre></div><p>\u5728 <code>.vitepress/theme/index.ts</code> \u4E2D\u5F15\u5165\u3002</p><div class="language-ts"><pre><code><span class="token comment">// docs/.vitepress/theme/index.ts</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Theme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vitepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VPTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vitepress-theme-you&#39;</span>

<span class="token comment">// https://github.com/antfu/unocss</span>
<span class="token keyword">import</span> <span class="token string">&#39;uno.css&#39;</span>

<span class="token keyword">const</span> theme<span class="token operator">:</span> Theme <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>VPTheme<span class="token punctuation">,</span>
  <span class="token function-variable function">enhanceApp</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> app <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> theme
</code></pre></div><p>\u914D\u7F6E <code>.vitepress/config.ts</code>\u3002</p><blockquote><p>\u56E0\u4E3A\u4F7F\u7528 unocss \u6765\u52A8\u6001\u751F\u6210 CSS \u56FE\u6807\u3002</p></blockquote><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> UserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vitepress&#39;</span>
<span class="token keyword">import</span> baseConfig <span class="token keyword">from</span> <span class="token string">&#39;vitepress-theme-you/config&#39;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> UserConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> baseConfig<span class="token punctuation">,</span>
  title<span class="token operator">:</span> <span class="token string">&#39;You&#39;</span><span class="token punctuation">,</span>
  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config
</code></pre></div><h2 id="more-info" tabindex="-1">More info <a class="header-anchor" href="#more-info" aria-hidden="true">#</a></h2><p>...</p>`,11),p=[o];function c(r,i,l,k,u,d){return a(),s("div",null,p)}var m=n(t,[["render",c]]);export{f as __pageData,m as default};
