---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "我的博客"
  text: "记录学习与成长"
  tagline: 分享技术，记录生活
  actions:
    - theme: brand
      text: 开始阅读
      link: /practice/windows
    - theme: alt
      text: GitHub
      link: https://github.com/ddcheng2017

features:
  - icon: 📝
    title: 技术博文
    details: 分享Web开发、前端框架、性能优化等技术文章，记录学习心得与实践经验
    link: /articles/tech/
  - icon: 🎨
    title: 学习笔记
    details: 包含算法、设计模式、架构设计等学习笔记，帮助自己也帮助他人
    link: /method/Array/flat
  - icon: 🔧
    title: 实用工具
    details: 收集整理日常开发中实用的工具、库、资源，提高开发效率
    link: /tools/
---
<script setup>
import home from '.vitepress/components/home.vue'
</script>

<!-- <home /> -->


<!-- <comments /> -->