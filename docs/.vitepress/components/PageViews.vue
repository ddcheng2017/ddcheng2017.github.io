<template>
  <div class="page-views">
    <span id="busuanzi_container_site_pv" style="display: none">
      总访问量: <span id="busuanzi_value_site_pv"></span> 次
    </span>
    <span id="busuanzi_container_site_uv" style="display: none">
      | 访客数: <span id="busuanzi_value_site_uv"></span> 人
    </span>
    <span id="busuanzi_container_page_pv" style="display: none">
      | 本文阅读量: <span id="busuanzi_value_page_pv"></span> 次
    </span>
  </div>
</template>

<script>
export default {
  name: 'PageViews',
  mounted() {
    let script = document.createElement('script')
    script.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
    script.async = true
    document.body.appendChild(script)
  }
}
</script>

<style>
.page-views {
  text-align: center;
  padding: 1rem 0;
  font-size: 0.875rem;
  color: #666;
}
</style> 