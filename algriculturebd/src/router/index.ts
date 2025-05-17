import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/main/main.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/main/about/about.vue'),
    },
    {
      path: '/news/news',
      name: 'news',
      component: () => import('@/views/main/news/news.vue'),
      children: [

        { path: 'industyConsult', name: 'industrConsult', component: () => import('@/views/main/news/IndustyConsult.vue') },

        {
          path: 'policyDoc',
          name: 'policyDoc',
          component: () => import('@/views/main/news/PolicyDoc.vue'),
        },
      ],
    },

    {
      path: '/algriculture',
      name: 'Algriculture',
      redirect: '/algriculture/algriculturePrice',
      component: () => import('@/views/main/algriculture/Main.vue'),
      children: [
        { path: 'algriculturePrice', name: 'algriculturePrice', component: () => import('@/views/main/algriculture/AlgriculturePrice.vue') },
        { path: 'plantingArea', name: 'PlantingArea', component: () => import('@/views/main/algriculture/PlantingArea.vue') },
        { path: 'yieldPredict', name: 'YieldPredict', component: () => import('@/views/main/algriculture/YieldPrediction.vue') },
      ],
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue'),
    },
    {
      path: '/:patchMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound/NotFound.vue'),
    },
  ],
})

// 将菜单数据转换为路由配置
function mapMenuToRoutes(menus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 遍历菜单数据
  for (const menu of menus) {
    // 根据菜单的url匹配对应的路由配置
    const route = router.getRoutes().find(route => route.path === menu.url)
    if (route) {
      routes.push(route)
    }
  }

  return routes
}

export function addRoutesWithMenu(menus: any) {
  // 1.获取匹配到的所有的路由
  const routes = mapMenuToRoutes(menus)

  // 2.动态添加到router中
  for (const route of routes) {
    router.addRoute('main', route)
  }
}

export default router
