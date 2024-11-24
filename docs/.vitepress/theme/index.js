// .vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css';
import GiscusComment from '../components/GiscusComment.vue'
import PageViews from '../components/PageViews.vue'
import BaiduAnalytics from '../components/BaiduAnalytics.vue'
/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component('PageViews', PageViews)
    app.component('BaiduAnalytics', BaiduAnalytics)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h('div', [
        // h(PageViews),
        h(BaiduAnalytics),
        h(GiscusComment)
      ])
    })
  }
}