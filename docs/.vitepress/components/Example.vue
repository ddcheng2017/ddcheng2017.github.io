<template>
  <div class="demo-block">
    <div class="demo-preview">
      <component :is="componentName" v-if="componentName"></component>
    </div>
    <div class="demo-code">
      <div class="code-control">
        <span class="code-title">示例代码</span>
        <span class="code-copy" @click="copyCode">复制代码</span>
      </div>
      <div class="code-content">
        <div class="code-light" v-html="lightCode" v-show="!isDark"></div>
        <div class="code-dark" v-html="darkCode" v-show="isDark"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'
import { getHighlighter } from 'shiki'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const { isDark } = useData()
const componentName = ref(props.name)
const sourceCode = ref('')
const lightCode = ref('')
const darkCode = ref('')

// 初始化代码高亮
const initializeHighlight = async () => {
  const highlighter = await getHighlighter({
    themes: ['github-light', 'github-dark'],
    langs: ['vue', 'js', 'css', 'less', 'scss', 'html', 'typescript', 'json']
  })

  try {
    // 同时生成两种主题的高亮代码
    lightCode.value = highlighter.codeToHtml(sourceCode.value, {
      lang: 'vue',
      theme: 'github-light'
    })
    darkCode.value = highlighter.codeToHtml(sourceCode.value, {
      lang: 'vue',
      theme: 'github-dark'
    })
  } catch (err) {
    console.error('Highlight error:', err)
    lightCode.value = darkCode.value = sourceCode.value
  }
}

// 加载组件源码
onMounted(async () => {
  try {
    const module = await import(`../components/example/${props.name}.vue?raw`)
    sourceCode.value = module.default
    await initializeHighlight()
  } catch (err) {
    console.error('Failed to load component source:', err)
  }
})

// 复制代码功能
const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(sourceCode.value)
    alert('代码已复制到剪贴板')
  } catch (err) {
    console.error('Failed to copy code:', err)
  }
}
</script>

<style scoped>
.demo-block {
  margin: 24px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg);
}

.demo-preview {
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--vp-c-divider);
}

.demo-code {
  background-color: var(--vp-c-bg-soft);
}

.code-control {
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--vp-c-divider);
}

.code-title {
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.code-copy {
  font-size: 14px;
  color: var(--vp-c-brand);
  cursor: pointer;
  transition: color 0.2s;
}

.code-copy:hover {
  color: var(--vp-c-brand-dark);
}

.code-content {
  padding: 16px;
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
  line-height: 1.5;
  overflow-x: auto;
}

:deep(.code-content pre) {
  margin: 0;
  padding: 0;
  background: transparent !important;
}

/* 确保代码块容器高度一致 */
.code-light,
.code-dark {
  height: 100%;
}
</style> 