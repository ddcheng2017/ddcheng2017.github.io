import{_ as a,c as e,a6 as l,G as n,B as t,o as p}from"./chunks/framework.DRkX1tMa.js";const h="/img/flex/flex.png",r="/img/flex/1.png",d="/img/flex/2.png",y=JSON.parse('{"title":"Flex 布局","description":"","frontmatter":{},"headers":[],"relativePath":"summary/flex.md","filePath":"summary/flex.md","lastUpdated":1732427191000}'),k={name:"summary/flex.md"};function o(c,s,E,g,u,b){const i=t("comments");return p(),e("div",null,[s[0]||(s[0]=l('<h1 id="flex-布局" tabindex="-1">Flex 布局 <a class="header-anchor" href="#flex-布局" aria-label="Permalink to &quot;Flex 布局&quot;">​</a></h1><p>网页布局（layout）是 CSS 的一个重点应用。</p><p>布局的传统解决方案，基于<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model" target="_blank" rel="noreferrer">盒状模型</a>，依赖 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display" target="_blank" rel="noreferrer">display</a> 属性 + <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position" target="_blank" rel="noreferrer">position</a>属性 + <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float" target="_blank" rel="noreferrer">float</a>属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。</p><p>2009 年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。</p><p><img src="'+h+`" alt="flex"></p><p>Flex<a href="http://static.vgee.cn/static/index.html" target="_blank" rel="noreferrer">实例 demo</a></p><p>布局实例参照<a href="http://www.ruanyifeng.com/blog/2015/07/flex-examples.html" target="_blank" rel="noreferrer">此篇文章</a></p><h2 id="一、flex-布局是什么" tabindex="-1">一、Flex 布局是什么？ <a class="header-anchor" href="#一、flex-布局是什么" aria-label="Permalink to &quot;一、Flex 布局是什么？&quot;">​</a></h2><p>Flex 是 Flexible Box 的缩写，意为&quot;弹性布局&quot;，用来为盒状模型提供最大的灵活性。</p><p>任何一个容器都可以指定为 Flex 布局。</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>行内元素也可以使用 Flex 布局。</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">inline-flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Webkit 内核的浏览器，必须加上<code>-webkit</code>前缀。</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-webkit-flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Safari */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>注意，设为 Flex 布局以后，子元素的<code>float</code>、<code>clear</code>和<code>vertical-align</code>属性将失效。</li></ul><h2 id="二、基本概念" tabindex="-1">二、基本概念 <a class="header-anchor" href="#二、基本概念" aria-label="Permalink to &quot;二、基本概念&quot;">​</a></h2><p>采用 Flex 布局的元素，称为 Flex 容器（flex container），简称&quot;容器&quot;。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称&quot;项目&quot;。</p><p>容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做<code>main start</code>，结束位置叫做<code>main end</code>；交叉轴的开始位置叫做<code>cross start</code>，结束位置叫做<code>cross end</code>。</p><p>项目默认沿主轴排列。单个项目占据的主轴空间叫做<code>main size</code>，占据的交叉轴空间叫做<code>cross size</code></p><h2 id="三、容器的属性。" tabindex="-1">三、容器的属性。 <a class="header-anchor" href="#三、容器的属性。" aria-label="Permalink to &quot;三、容器的属性。&quot;">​</a></h2><p>以下 6 个属性设置在容器上。</p><ul><li>flex-direction</li><li>flex-wrap</li><li>flex-flow</li><li>justify-content</li><li>align-items</li><li>align-content</li></ul><h3 id="_3-1、flex-direction-属性" tabindex="-1">3.1、flex-direction 属性 <a class="header-anchor" href="#_3-1、flex-direction-属性" aria-label="Permalink to &quot;3.1、flex-direction 属性&quot;">​</a></h3><p><code>flex-direction</code>属性决定主轴的方向（即项目的排列方向）。</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex-direction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">row</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">row-reverse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">column</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">column-reverse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>它可能有 4 个值。</p><ul><li>row（默认值）：主轴为水平方向，起点在左端。</li><li>row-reverse：主轴为水平方向，起点在右端。</li><li>column：主轴为垂直方向，起点在上沿。</li><li>column-reverse：主轴为垂直方向，起点在下沿。</li></ul><h3 id="_3-2-flex-wrap-属性" tabindex="-1">3.2 flex-wrap 属性 <a class="header-anchor" href="#_3-2-flex-wrap-属性" aria-label="Permalink to &quot;3.2 flex-wrap 属性&quot;">​</a></h3><p>默认情况下，项目都排在一条线（又称&quot;轴线&quot;）上。<code>flex-wrap</code>属性定义，如果一条轴线排不下，如何换行。</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex-wrap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">nowrap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">wrap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">wrap-reverse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>它可能取三个值。</p><ul><li>nowrap（默认）：不换行。</li><li>wrap：换行，第一行在上方。</li><li>wrap-reverse：换行，第一行在下方。</li></ul><h3 id="_3-3-flex-flow-属性" tabindex="-1">3.3 flex-flow 属性 <a class="header-anchor" href="#_3-3-flex-flow-属性" aria-label="Permalink to &quot;3.3 flex-flow 属性&quot;">​</a></h3><p><code>flex-flow</code>属性是<code>flex-direction</code>属性和<code>flex-wrap</code>属性的简写形式，默认值为<code>row nowrap</code>。</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex-flow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: &lt;flex-direction&gt; || &lt;flex-wrap&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_3-4-justify-content-属性" tabindex="-1">3.4 justify-content 属性 <a class="header-anchor" href="#_3-4-justify-content-属性" aria-label="Permalink to &quot;3.4 justify-content 属性&quot;">​</a></h3><ul><li><code>justify-content</code>属性定义了项目在主轴上的对齐方式。</li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  justify-content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex-start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex-end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">space-between</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">space-around</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>它可能取 5 个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。</p><ul><li>flex-start（默认值）：左对齐</li><li>flex-end：右对齐</li><li>center： 居中</li><li>space-between：两端对齐，项目之间的间隔都相等。</li><li>space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</li></ul><h3 id="_3-5-align-items-属性" tabindex="-1">3.5 align-items 属性 <a class="header-anchor" href="#_3-5-align-items-属性" aria-label="Permalink to &quot;3.5 align-items 属性&quot;">​</a></h3><ul><li><code>align-items</code>属性定义项目在交叉轴上如何对齐。</li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  align-items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex-start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex-end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">baseline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">stretch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>它可能取 5 个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。</p><ul><li>flex-start：交叉轴的起点对齐。</li><li>flex-end：交叉轴的终点对齐。</li><li>center：交叉轴的中点对齐。</li><li>baseline: 项目的第一行文字的基线对齐。</li><li>stretch（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度。</li></ul><h3 id="_3-6-align-content-属性" tabindex="-1">3.6 align-content 属性 <a class="header-anchor" href="#_3-6-align-content-属性" aria-label="Permalink to &quot;3.6 align-content 属性&quot;">​</a></h3><ul><li><code>align-content</code>属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  align-content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex-start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex-end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">space-between</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">space-around</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> |</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    stretch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>该属性可能取 6 个值。</p><ul><li>flex-start：与交叉轴的起点对齐。</li><li>flex-end：与交叉轴的终点对齐。</li><li>center：与交叉轴的中点对齐。</li><li>space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。</li><li>space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</li><li>stretch（默认值）：轴线占满整个交叉轴。</li></ul><h2 id="四、项目的属性" tabindex="-1">四、项目的属性 <a class="header-anchor" href="#四、项目的属性" aria-label="Permalink to &quot;四、项目的属性&quot;">​</a></h2><ul><li><p>以下 6 个属性设置在项目上。</p></li><li><p>order</p></li><li><p>flex-grow</p></li><li><p>flex-shrink</p></li><li><p>flex-basis</p></li><li><p>flex</p></li><li><p>align-self</p></li></ul><h3 id="_4-1-order-属性" tabindex="-1">4.1 order 属性 <a class="header-anchor" href="#_4-1-order-属性" aria-label="Permalink to &quot;4.1 order 属性&quot;">​</a></h3><ul><li>order 属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0。</li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  order</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: &lt;integer&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="`+r+`" alt="flex"></p><h3 id="_4-2-flex-grow-属性" tabindex="-1">4.2 flex-grow 属性 <a class="header-anchor" href="#_4-2-flex-grow-属性" aria-label="Permalink to &quot;4.2 flex-grow 属性&quot;">​</a></h3><ul><li><code>flex-grow</code>属性定义项目的放大比例，默认为<code>0</code>，即如果存在剩余空间，也不放大。</li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex-grow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: &lt;number&gt;; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* default 0 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="`+d+`" alt="flex"></p><p>如果所有项目的<code>flex-grow</code>属性都为<code>1</code>，则它们将等分剩余空间（如果有的话）。如果一个项目的<code>flex-grow</code>属性为<code>2</code>，其他项目都为<code>1</code>，则前者占据的剩余空间将比其他项多一倍。</p><h3 id="_4-3-flex-shrink-属性" tabindex="-1">4.3 flex-shrink 属性 <a class="header-anchor" href="#_4-3-flex-shrink-属性" aria-label="Permalink to &quot;4.3 flex-shrink 属性&quot;">​</a></h3><ul><li><code>flex-shrink</code>属性定义了项目的缩小比例，默认为<code>1</code>，即如果空间不足，该项目将缩小。</li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex-shrink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: &lt;number&gt;; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* default 1 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如果所有项目的<code>flex-shrink</code>属性都为<code>1</code>，当空间不足时，都将等比例缩小。如果一个项目的<code>flex-shrink</code>属性为 0，其他项目都为 1，则空间不足时，前者不缩小。</p><ul><li>负值对该属性无效。</li></ul><h3 id="_4-4-flex-basis-属性" tabindex="-1">4.4 flex-basis 属性 <a class="header-anchor" href="#_4-4-flex-basis-属性" aria-label="Permalink to &quot;4.4 flex-basis 属性&quot;">​</a></h3><ul><li><code>flex-basis</code>属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为<code>auto</code>，即项目的本来大小。</li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex-basis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: &lt;length&gt; | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* default auto */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>它可以设为跟<code>width</code>或<code>height</code>属性一样的值（比如 350px），则项目将占据固定空间。</p><h3 id="_4-5-flex-属性" tabindex="-1">4.5 flex 属性 <a class="header-anchor" href="#_4-5-flex-属性" aria-label="Permalink to &quot;4.5 flex 属性&quot;">​</a></h3><ul><li>flex 属性是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。</li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | [ &lt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;flex-grow&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &gt; &lt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;flex-shrink&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &gt;? || &lt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;flex-basis&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &gt; ];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>该属性有两个快捷值：<code>auto (1 1 auto)</code>和 <code>none (0 0 auto)</code>。</p><p>建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。</p><h3 id="_4-6-align-self-属性" tabindex="-1">4.6 align-self 属性 <a class="header-anchor" href="#_4-6-align-self-属性" aria-label="Permalink to &quot;4.6 align-self 属性&quot;">​</a></h3><ul><li>align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。</li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  align-self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex-start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex-end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">baseline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">stretch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>该属性可能取 6 个值，除了<code>auto</code>，其他都与<code>align-items</code>属性完全一致。</p>`,80)),n(i)])}const x=a(k,[["render",o]]);export{y as __pageData,x as default};