// .vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css';
import GiscusComment from '../components/GiscusComment.vue'
/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    // app.component('Comments', Valine)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': ()=> h(GiscusComment)
    })
  }
}