import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';
// https://vitepress.dev/reference/site-config

const vitePressOptions = {
  base: '/',
  title: "博客",
  description: "个人笔记",
  
  markdown: {
    // 默认显示行号
    lineNumbers: true,
    // 不写语言名时，默认识别为js
    defaultHighlightLang: "js",
  },
  themeConfig: {
    search: {
      // 使用本地搜索
      provider: "local",
      options: {
        // 配置搜索组件展示文本
        translations: {
          button: {
            buttonText: "搜索文档",
          },
          modal: {
            displayDetails: "显示详情",
            noResultsText: "未找到相关结果",
            resetButtonTitle: "清除",
            footer: {
              closeText: "关闭",
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    nav: [
      { text: '首页', link: '/home/' },
      { text: '随手记', link: '/practice/windows' },
      { text: 'js方法', link: '/method/array/flat', activeMatch: '/method/' },
      { text: '总结资料', link: '/summary/flex', activeMatch: '/summary/' },
      // {
      //   text: '总结资料',
      //   items: [
      //     { text: 'Flex布局', link: '/summary/flex' },
      //     { text: 'Gird布局', link: '/summary/gird' },
      //     // { text: 'RegExp正则', link: '/summary/RegExp' },
      //     { text: 'ts总结', link: '/summary/ts' },
      //     // { text: 'angular基础', link: '/summary/angular' },
      //     { text: 'vue基础', link: '/summary/vue' },
      //   ]
      // },
    ],
    sidebarDepth: 0,   //侧边栏提取深度 0-不提取 1-提取H1和H2 2-提取H1 H2 H3 
    searchMaxSuggestions: 10, //搜索默认最大十条
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '目录'
    },
    // 右侧文章索引级别
    outline: "deep",

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
    darkModeSwitchLabel: '切换主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
};

const vitePressSidebarOptions = [
  {
    documentRootPath: 'docs',
    scanStartPath: 'practice',
    basePath: '/practice/',
    resolvePath: '/practice/',
    useTitleFromFileHeading: true,
    collapsed: false,
    capitalizeFirst: true
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'method',
    basePath: '/method/',
    resolvePath: '/method/',
    useTitleFromFileHeading: true,
    collapsed: false,
    capitalizeFirst: true
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'summary',
    basePath: '/summary/',
    resolvePath: '/summary/',
    useTitleFromFileHeading: true,
    collapsed: false,
    capitalizeFirst: true,
    excludeFiles: ['angular.md']
  }
];
export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));
/*
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
*/