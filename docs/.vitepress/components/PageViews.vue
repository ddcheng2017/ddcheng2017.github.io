<template>
  <span class="page-views">
    <span v-if="views !== null">
      阅读量: {{ views }}
    </span>
    <span v-else class="loading">
      <span class="dot">.</span>
      <span class="dot">.</span>
      <span class="dot">.</span>
    </span>
  </span>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()
const views = ref(null)

// 获取阅读量
const fetchPageViews = async () => {
  try {
    // 构建当前页面的完整 URL
    const path = window.location.pathname
    const site = 'your-site.com' // 替换为您的网站域名
    const url = `https://${site}${path}`
    
    // 调用百度统计 API
    const response = await fetch('https://api.example.com/baidu-stats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url,
        start_date: '20000101', // 统计起始日期
        end_date: formatDate(new Date()), // 当前日期
        metrics: 'pv_count', // 统计指标：页面浏览量
        site_id: 'YOUR_SITE_ID' // 替换为您的百度统计站点 ID
      })
    })

    const data = await response.json()
    views.value = data.result.items[0][0] || 0
  } catch (err) {
    console.error('Failed to fetch page views:', err)
    views.value = 0
  }
}

// 格式化日期为 YYYYMMDD
const formatDate = (date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}${month}${day}`
}

onMounted(() => {
  fetchPageViews()
})
</script>

<style scoped>
.page-views {
  margin-top: 20px;
  display: inline-flex;
  align-items: center;
  font-size: 0.9em;
  color: var(--vp-c-text-2);
}

.loading {
  display: inline-flex;
}

.dot {
  animation: loading 1.4s infinite;
  opacity: 0;
}

.dot:nth-child(2) {
  animation-delay: .2s;
}

.dot:nth-child(3) {
  animation-delay: .4s;
}

@keyframes loading {
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
}
</style> 