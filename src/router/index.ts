import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
