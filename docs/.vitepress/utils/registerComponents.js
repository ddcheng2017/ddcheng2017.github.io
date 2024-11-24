import { defineAsyncComponent } from 'vue'

// 自动导入 components/example 目录下的所有组件
export function registerComponents(app) {
  // 使用 Vite 的 glob 导入功能
  const components = import.meta.glob('../components/example/*.vue', { eager: true })
  
  Object.entries(components).forEach(([path, module]) => {
    // 获取组件名称 (去掉路径和后缀)
    const componentName = path
      .split('/')
      .pop()
      .replace(/\.\w+$/, '')
    
      console.log({componentName})
    // 注册组件
    app.component(componentName, module.default)
  })
} 