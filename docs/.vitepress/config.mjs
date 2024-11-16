import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "博客",
  description: "个人笔记",
  markdown: {
    lineNumbers: false, // 默认显示行号
    toc: { includeLevel: [2, 3] }
  },
  outline: {
    label: '页面导航'
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/home/' },
      { text: '随手记', link: '/practice/' },
      { text: '方法汇总', link: '/method/browserInfo', activeMatch: '/method/' },
      // { text: '总结资料', link: '/summary/' },
      {
        text: '总结资料',
        items: [
          { text: 'Flex布局', link: '/summary/flex' },
          { text: 'Gird布局', link: '/summary/gird' },
          // { text: 'RegExp正则', link: '/summary/RegExp' },
          { text: 'ts总结', link: '/summary/ts' },
          // { text: 'angular基础', link: '/summary/angular' },
          { text: 'vue基础', link: '/summary/vue' },
        ]
      },
    ],
    sidebar: {
      '/home/': [
        // ['', '首页'],
        // {
        //   title: '首页',
        //   collapsable: false,
        //   children: [
        //     ['', '首页'],
        //   ]
        // },
      ],
      '/practice/':[
        {text: '一句话总结', link: '/practice/'},
        {text: '数据类型', link: '/practice/dataType'},
      ],
      '/method/': {
        base: '/method/',
        items: [
          {
            text: 'Other',
            collapsable: false,
            items: [
              {text: 'js判断浏览器方法', link: 'browserInfo'},
              {text: '浏览器中的宽高问题', link: 'height'},
              {text: 'node中的输入与输出', link: 'nodeIO'},
              {text: '移动端rem的js监控', link: 'rem'},
              {text: '浏览器自定义滚动条', link: 'scrollBar'},
              {text: '使用js动态为锚点添加动画', link: 'hashAnimate'},
              {text: 'js中的时间问题', link: 'time'},
              {text: '选择div中的所有文字', link: 'selectText'},
            ]
          },
          {
            text: 'String',
            collapsable: false,
            items: [
              {text: '获取指定元素的指定出现位置', link: 'String/find'},
            ]
          },
          {
            title: 'Math',
            collapsable: false,
            items: [
              {text: 'trunc()去除小数（es6新增）', link: 'Math/trunc'},
              {text: 'sign()判断数字正负（es6新增）', link: 'Math/sign'},
            ]
          },
          {
            text: 'Array',
            collapsable: false,
            items: [
              {text: '数组扁平化', link: 'Array/flat'},
              {text: '数组添加非重复元素', link: 'Array/unique'},
              {text: '数组扁平化', link: 'Array/pushNoRepeat'},
            ]
          },
          {
            text: 'Object',
            collapsable: false,
            items: [
              {text: '对象的拷贝（深拷贝和浅拷贝）', link: 'Object/copy'},
            ]
          },
          {
            text: 'Compatible',
            collapsable: false,
            items: [
              {text: '鼠标滚轮兼容问题', link: 'Compatible/mouse'},
              {text: '获取元素的样式', link: 'Compatible/getCss'},
            ]
          },
        ]
      },
    },
    sidebarDepth: 0,   //侧边栏提取深度 0-不提取 1-提取H1和H2 2-提取H1 H2 H3 
    searchMaxSuggestions: 10, //搜索默认最大十条
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
