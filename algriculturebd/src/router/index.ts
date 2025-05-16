import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect:'/main'
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/main/main.vue'),
    },
    {
      path: '/login',
      name:'login',
      component: () => import('@/views/login/login.vue'),
    }
    {
      path:'/:patchMatch(.*)*',
      name:'NotFound',
      component:()=>import('@/views/main/NotFound/NotFound.vue')
    }
  ],
})


export function addRoutesWithMenu(menus: any) {
  // 1.获取匹配到的所有的路由
  const routes = mapMenuToRoutes(menus)

  // 2.动态添加到router中
  for (const route of routes) {
    router.addRoute('main', route)
  }
}
export default router
