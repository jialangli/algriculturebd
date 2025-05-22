import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main/index',
  },
  {
    path: '/main',
    name: 'main',
    redirect: '/main/index',
    component: () => import('@/views/main/Main.vue'),
    children: [
      { path: 'index', name: 'index', component: () => import('@/views/main/index/Index.vue') },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/main/about/about.vue'),
      },
      {
        path: 'news',
        redirect: '/main/news/news',
        children: [
          // { path: 'news', name: 'news', component: () => import('@/views/main/news/news1.vue') ,

          // },
          { path: 'industyConsult', name: 'industrConsult', component: () => import('@/views/main/news/IndustyConsult.vue') },
          {
            path: 'policyDoc',
            name: 'policyDoc',
            component: () => import('@/views/main/news/PolicyDoc.vue'),
          },
          {
            path: 'news',
            name: 'news',
            component: () => import('@/views/main/news/news.vue'),
          },
          { path: 'news/:id', name: 'detail', component: () => import('@/views/main/news/detail.vue') },
        ],
      },
      {
        path: 'algriculture',
        name: 'Algriculture',
        redirect: '/main/algriculture/algriculturePrice',
        component: () => import('@/views/main/algriculture/Index.vue'),
        children: [
          { path: 'algriculturePrice', name: 'algriculturePrice', component: () => import('@/views/main/algriculture/AlgriculturePrice.vue') },
          { path: 'plantingArea', name: 'PlantingArea', component: () => import('@/views/main/algriculture/PlantingArea.vue') },
          { path: 'yieldPredict', name: 'YieldPredict', component: () => import('@/views/main/algriculture/YieldPrediction.vue') },
        ],
      },

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
]
