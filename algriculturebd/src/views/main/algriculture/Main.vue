<script setup lang='ts'>
import { dividerProps } from 'element-plus'
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const tabsItems = [
  {
    path: '/algriculture/algriculturePrice',
    name: '价格行情',
  },
  {
    path: '/algriculture/plantingArea',
    name: '种植面积',
  },
  {
    path: '/algriculture/yieldPredict',
    name: '产量预测',
  },
]
const activeIndex = ref(0)
function tabsAvtive(index: number) {
  activeIndex.value = index
}
</script>

<template>
  <main class="container">
    <!-- 数据选项卡 -->
    <div class="data-tabs">
      <div v-for="item, index in tabsItems" :key="item.path" class="data-tab" :class="{ active: activeIndex === index }">
        <RouterLink :to="item.path" class="w-full h-full block" @click="tabsAvtive(index)">
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
    <RouterView />
  </main>
</template>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.btn {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 14px;
}

.btn-primary {
  background-color: #389e0d;
  color: white;
  border: 1px solid #389e0d;
}

.btn-primary:hover {
  background-color: #52c41a;
  border-color: #52c41a;
}

.btn-outline {
  background-color: transparent;
  color: #389e0d;
  border: 1px solid #389e0d;
}

.btn-outline:hover {
  background-color: #f6ffed;
}

/* 导航栏 */
.navbar {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  color: #389e0d;
  display: flex;
  align-items: center;
}

.logo-icon {
  margin-right: 8px;
  font-size: 24px;
}

.nav-menu {
  display: flex;
}

.nav-item {
  margin-left: 25px;
  position: relative;
  padding: 18px 0;
  font-weight: 500;
  font-size: 15px;
}

.nav-item.active {
  color: #389e0d;
}

.nav-item.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #389e0d;
}

.auth-buttons .btn {
  margin-left: 10px;
  padding: 6px 12px;
}

/* 数据选项卡 */
.data-tabs {
  display: flex;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
}

.data-tab {
  flex: 1;
  text-align: center;
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.data-tab.active {
  background-color: #389e0d;
  color: white;
}
</style>
