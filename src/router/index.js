import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/views/Layout')

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout
  }, {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
