<template>
  <div class="loading-container">
    <div class="loading-sprite"></div>
  </div>
</template>

<script setup>
// 不需要额外的 JavaScript 逻辑，使用 CSS 动画实现
</script>

<style scoped lang="less">
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px; /* 根据你的需求调整 */
}

.loading-sprite {
  width: 200px;
  height: 200px;
  background: url('/loading.jpg') 0 0 no-repeat;
  background-size: 2000px 1000px;
  animation: play 3s steps(1, end) infinite;
}


@keyframes play {
  /* 第一行 */
  0% { background-position: 0 0; }
  2% { background-position: -200px 0; }
  4% { background-position: -400px 0; }
  6% { background-position: -600px 0; }
  8% { background-position: -800px 0; }
  10% { background-position: -1000px 0; }
  12% { background-position: -1200px 0; }
  14% { background-position: -1400px 0; }
  16% { background-position: -1600px 0; }
  18% { background-position: -1800px 0; }
  
  /* 第二行 */
  20% { background-position: 0 -200px; }
  22% { background-position: -200px -200px; }
  24% { background-position: -400px -200px; }
  26% { background-position: -600px -200px; }
  28% { background-position: -800px -200px; }
  30% { background-position: -1000px -200px; }
  32% { background-position: -1200px -200px; }
  34% { background-position: -1400px -200px; }
  36% { background-position: -1600px -200px; }
  38% { background-position: -1800px -200px; }
  
  /* 第三行 */
  40% { background-position: 0 -400px; }
  42% { background-position: -200px -400px; }
  44% { background-position: -400px -400px; }
  46% { background-position: -600px -400px; }
  48% { background-position: -800px -400px; }
  50% { background-position: -1000px -400px; }
  52% { background-position: -1200px -400px; }
  54% { background-position: -1400px -400px; }
  56% { background-position: -1600px -400px; }
  58% { background-position: -1800px -400px; }
  
  /* 第四行 */
  60% { background-position: 0 -600px; }
  62% { background-position: -200px -600px; }
  64% { background-position: -400px -600px; }
  66% { background-position: -600px -600px; }
  68% { background-position: -800px -600px; }
  70% { background-position: -1000px -600px; }
  72% { background-position: -1200px -600px; }
  74% { background-position: -1400px -600px; }
  76% { background-position: -1600px -600px; }
  78% { background-position: -1800px -600px; }
  
  /* 第五行 */
  80% { background-position: 0 -800px; }
  82% { background-position: -200px -800px; }
  84% { background-position: -400px -800px; }
  86% { background-position: -600px -800px; }
  88% { background-position: -800px -800px; }
  90% { background-position: -1000px -800px; }
  92% { background-position: -1200px -800px; }
  94% { background-position: -1400px -800px; }
  96% { background-position: -1600px -800px; }
  98% { background-position: -1800px -800px; }
}
</style> 