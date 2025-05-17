import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
import UnoCSS from 'unocss/vite'

import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// 获取当前文件的URL并转换为路径
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// API服务器地址
const API_BASE_URL = 'http://47.115.160.54:28080'
export default defineConfig({
  plugins: [vue(), vueJsx(), UnoCSS(), AutoImport({
    resolvers: [ElementPlusResolver()],
  }), Components({
    resolvers: [ElementPlusResolver()],
  })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5174,
    open: true,
    cors: true,
    // 代理配置
    proxy: {
      '/api': {
        target: API_BASE_URL,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
        configure: (proxy, options) => {
          // 代理服务器配置
          proxy.on('error', (err, req, res) => {
            console.log('代理错误', err)
          })
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log('代理请求:', req.method, req.url)
          })
          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log('代理响应:', req.method, req.url, proxyRes.statusCode)
          })
        },
      },
    },
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false, // 保留console
        drop_debugger: true,
      },
    },
    // 分块策略
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router', 'pinia'],
          elementPlus: ['element-plus'],
        },
      },
    },
  },
})
