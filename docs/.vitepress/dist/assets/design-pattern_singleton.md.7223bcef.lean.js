import{_ as n,c as s,o as a,a as t}from"./app.1116aa0f.js";const y='{"title":"\u5355\u4F8B\u6A21\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u610F\u56FE","slug":"\u610F\u56FE"},{"level":2,"title":"\u5B9E\u73B0","slug":"\u5B9E\u73B0"},{"level":3,"title":"\u61D2\u6C49\u5F0F","slug":"\u61D2\u6C49\u5F0F"},{"level":3,"title":"\u997F\u6C49\u5F0F","slug":"\u997F\u6C49\u5F0F"},{"level":3,"title":"\u53CC\u68C0\u9501","slug":"\u53CC\u68C0\u9501"}],"relativePath":"design-pattern/singleton.md","lastUpdated":1640960462120}',p={},o=t(`__VP_STATIC_START__<h1 id="\u5355\u4F8B\u6A21\u5F0F" tabindex="-1">\u5355\u4F8B\u6A21\u5F0F <a class="header-anchor" href="#\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a></h1><h2 id="\u610F\u56FE" tabindex="-1">\u610F\u56FE <a class="header-anchor" href="#\u610F\u56FE" aria-hidden="true">#</a></h2><p>\u4FDD\u8BC1\u4E00\u4E2A\u7C7B\u53EA\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E2A\u8BBF\u95EE\u4ED6\u7684\u5168\u5C40\u8BBF\u95EE\u70B9\u3002</p><h2 id="\u5B9E\u73B0" tabindex="-1">\u5B9E\u73B0 <a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a></h2><p><img src="https://egoist-markdown-image-bucket.oss-cn-beijing.aliyuncs.com/singleton-20211224112208-2021-12-24-11-22-09.png" alt="singleton-20211224112208-2021-12-24-11-22-09"></p><ol><li>\u79C1\u6709\u5316\u9759\u6001\u6210\u5458\u53D8\u91CF\u7528\u4E8E\u4FDD\u5B58\u5355\u4F8B\u5B9E\u4F8B\u3002</li><li>\u79C1\u6709\u5316\u6784\u9020\u51FD\u6570\u3002</li><li>\u58F0\u660E\u4E00\u4E2A\u516C\u6709\u9759\u6001\u65B9\u6CD5\uFF08getInstance\uFF09\u7528\u4E8E\u83B7\u53D6\u5B9E\u4F8B\u3002\uFF08\u53D7\u63A7\u8BBF\u95EE\uFF09</li><li>geInstance\u4E2D\u6DFB\u52A0\u6761\u4EF6\u5224\u65AD\u5B9E\u4F8B\u662F\u5426\u5DF2\u5B58\u5728\uFF0C\u5B58\u5728\u5219\u8FD4\u56DE\u5DF2\u6709\u5B9E\u4F8B\uFF0C\u5426\u5219\u521B\u5EFA\u5B9E\u4F8B\u3002</li></ol><p>\u4EE5\u4E0A\u7684\u5B9E\u73B0\u88AB\u79F0\u4E3A<strong>\u61D2\u6C49\u5F0F</strong>\uFF0C\u8BF4\u7684\u662F\u61D2\u6C49\u53EA\u4F1A\u5F20\u5634\u7B49\u522B\u4EBA\u5582\uFF08\u53EA\u6709\u5BA2\u6237\u7C7B\u8C03\u7528\u4E86<code>getInstance()</code>\u624D\u4F1A\u521B\u5EFA\u5B9E\u4F8B\uFF09\uFF0C</p><h3 id="\u61D2\u6C49\u5F0F" tabindex="-1">\u61D2\u6C49\u5F0F <a class="header-anchor" href="#\u61D2\u6C49\u5F0F" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> instance<span class="token operator">:</span> Singleton<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>instance
  <span class="token punctuation">}</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;I am Iron Man.&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> singleton1 <span class="token operator">=</span> Singleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> singleton2 <span class="token operator">=</span> Singleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
singleton1<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//I am Iron Man.</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>singleton1<span class="token operator">===</span>singleton2<span class="token punctuation">)</span> <span class="token comment">//true</span>
</code></pre></div><p>\u90A3\u4E48\u8FD9\u79CD\u6A21\u5F0F\u6709\u4EC0\u4E48\u95EE\u9898\u5462\uFF1F<strong>\u7EBF\u7A0B\u4E0D\u5B89\u5168</strong>\uFF0C\u524D\u7AEF\u95EE\u9898\u4E0D\u5927\uFF0C\u56E0\u4E3Ajs\u662F\u5355\u7EBF\u7A0B\u7684\uFF0C\u4F46\u662F\u540E\u7AEF\u5C31\u4F1A\u78B0\u5230\u8FD9\u6837\u4E00\u4E2A\u95EE\u9898\uFF0C\u5982\u679C\u591A\u4E2A\u7EBF\u7A0B\u540C\u65F6\u8C03\u7528\u4E86<code>getInstance()</code>\uFF0C\u90A3\u4E48\u5B83\u4EEC\u90FD\u80FD\u901A\u8FC7if\u5224\u65AD\uFF0C\u5C31\u4F1A\u521B\u5EFA\u4E24\u4E2A\u5B9E\u4F8B\uFF0C\u663E\u7136\u4E0E\u6211\u4EEC\u7684\u610F\u56FE\u4E0D\u76F8\u7B26\u3002<br> \u90A3\u4E48\u5982\u4F55\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u5462\uFF1F\u5F88\u7B80\u5355\uFF0C\u5728\u7C7B\u521D\u59CB\u5316\u7684\u65F6\u5019\u76F4\u63A5\u521B\u5EFA\u5B9E\u4F8B\u5373\u53EF\uFF0C\u8FD9\u88AB\u79F0\u4E3A<strong>\u997F\u6C49\u5F0F</strong>\uFF0C\u997F\u4E86\u5C31\u81EA\u5DF1\u5403\u7684\u561B\uFF08\u4E3B\u52A8\u521B\u5EFA\u5B9E\u4F8B\uFF09\u3002</p><h3 id="\u997F\u6C49\u5F0F" tabindex="-1">\u997F\u6C49\u5F0F <a class="header-anchor" href="#\u997F\u6C49\u5F0F" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>instance
  <span class="token punctuation">}</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;I am Iron Man.&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> singleton1 <span class="token operator">=</span> Singleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> singleton2 <span class="token operator">=</span> Singleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

singleton1<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>singleton1<span class="token operator">===</span>singleton2<span class="token punctuation">)</span> 
</code></pre></div><p>\u867D\u7136\u6211\u4EEC\u89E3\u51B3\u4E86\u7EBF\u7A0B\u4E0D\u5B89\u5168\u7684\u95EE\u9898\uFF0C\u4F46\u662F\u540C\u65F6\u4E5F\u5E26\u6765\u4E86\u53E6\u4E00\u4E2A\u95EE\u9898\uFF0C\u6027\u80FD\u6D88\u8017\uFF0C\u5728\u5B9E\u9645\u7684\u4E1A\u52A1\u4E2D\uFF0C\u5355\u4F8B\u7C7B\u6709\u53EF\u80FD\u4F1A\u627F\u62C5\u6BD4\u8F83\u7E41\u91CD\u7684\u5DE5\u4F5C\uFF0C\u521B\u5EFA\u5B9E\u4F8B\u7684\u4EE3\u7801\u8F83\u591A\uFF0C\u5728\u7C7B\u521D\u59CB\u5316\u521B\u5EFA\u4F1A\u6BD4\u8F83\u5360\u7528\u8D44\u6E90\u3002\u6709\u6CA1\u6709\u4E00\u79CD\u529E\u6CD5\uFF0C\u53C8\u80FD\u6309\u9700\u521B\u5EFA\uFF0C\u53C8\u80FD\u7EBF\u7A0B\u5B89\u5168\u5462\uFF1F\u8FD9\u91CC\u9700\u8981\u7528\u5230\u4E00\u4E2A\u5DE5\u5177\uFF0C<strong>\u7EBF\u7A0B\u9501</strong>\uFF0C\u7EBF\u7A0B\u9501\u4F1A\u5728\u7B2C\u4E00\u4E2A\u7EBF\u7A0B\u8BBF\u95EE\u65F6\u7981\u6B62\u5176\u4ED6\u7EBF\u7A0B\u8BBF\u95EE\u3002\u4F46\u662F\u52A0\u9501\u4E4B\u540E\u4E5F\u662F\u9700\u8981\u7A0D\u5FAE\u6539\u52A8\u6211\u4EEC\u7684\u4EE3\u7801\u3002 \u6765\u770B\u4EE5\u4E0B\u8FD9\u79CD\u88AB\u79F0\u4E3A<strong>\u53CC\u68C0\u9501</strong>\u7684\u5B9E\u73B0\uFF1A</p><h3 id="\u53CC\u68C0\u9501" tabindex="-1">\u53CC\u68C0\u9501 <a class="header-anchor" href="#\u53CC\u68C0\u9501" aria-hidden="true">#</a></h3><div class="language-go"><pre><code><span class="token comment">// https://github.com/go-sql-driver/mysql</span>
<span class="token keyword">type</span> singleton <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	DB <span class="token operator">*</span>sql<span class="token punctuation">.</span>DB
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
	instances <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">*</span>singleton <span class="token comment">// dbkey-&gt;instance</span>
	mu        sync<span class="token punctuation">.</span>Mutex  
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	instances <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">*</span>singleton<span class="token punctuation">)</span>
<span class="token punctuation">}</span> 

<span class="token keyword">func</span> <span class="token function">GetInstance</span><span class="token punctuation">(</span>dbkey <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>singleton<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> err <span class="token builtin">error</span>

	<span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> instances<span class="token punctuation">[</span>dbkey<span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		<span class="token keyword">return</span> instances<span class="token punctuation">[</span>dbkey<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		mu<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">defer</span> mu<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 

		<span class="token keyword">if</span> instance<span class="token punctuation">,</span> ok <span class="token operator">:=</span> instances<span class="token punctuation">[</span>dbkey<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
      <span class="token comment">//create instance      </span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> instances<span class="token punctuation">[</span>dbkey<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol><li>\u591A\u4E2A\u7EBF\u7A0B\u8FDB\u5165GetInstance\uFF0C\u53D1\u73B0instances[dbkey]\u4E0D\u4E3A\u7A7A\uFF0C\u8FD4\u56DE\u5B9E\u4F8B\u3002</li><li>\u4E0D\u4E3A\u7A7A\uFF0C\u8FDB\u5165else\u5206\u652F\uFF0C\u4E89\u62A2\u540C\u4E00\u4E2A\u9501\uFF0C\u7B2C\u4E00\u4E2A\u7EBF\u7A0B\u4E89\u62A2\u6210\u529F\u3002</li><li>\u518D\u6B21\u5224\u65ADinstances[dbkey]\u662F\u5426\u4E3A\u7A7A\uFF0C\u662F\u5219\u521B\u5EFA\u5B9E\u4F8B\uFF0C\u5426\u5219\u8FD4\u56DE\u8BE5\u5B9E\u4F8B\u3002</li><li>\u89E3\u9501\u3002</li></ol><p>\u7531\u4E8E\u9700\u8981\u4E24\u6B21\u5224\u65AD\uFF08\u9501\u524D\u9501\u540E\uFF09\uFF0C\u56E0\u6B64\u88AB\u79F0\u4E3A\u53CC\u68C0\u9501\uFF08double check + lock\uFF09\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u5F88\u597D\u5730\u89E3\u51B3\u4E86\u61D2\u6C49\u5F0F\u548C\u997F\u6C49\u5F0F\u7684\u95EE\u9898\uFF0C\u5177\u4F53\u4F7F\u7528\u54EA\u4E00\u79CD\u8FD8\u662F\u89C6\u5177\u4F53\u573A\u666F\u800C\u5B9A\u3002</p>__VP_STATIC_END__`,17),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{y as __pageData,h as default};