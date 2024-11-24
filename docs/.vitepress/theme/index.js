// .vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css';
import GiscusComment from '../components/GiscusComment.vue'
import BaiduAnalytics from '../components/BaiduAnalytics.vue'
import PageViews from '../components/PageViews.vue'
import Example from '../components/Example.vue'
import { registerComponents } from '../utils/registerComponents'
/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component('BaiduAnalytics', BaiduAnalytics)
    app.component('PageViews', PageViews)
    app.component('Example', Example)
    // 注册所有示例组件
    registerComponents(app)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h('div', [
        h(BaiduAnalytics),
        h(PageViews),
        h(GiscusComment),
      ])
    })
  }
}