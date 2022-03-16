import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home')
const TopCategory = () => import('@/views/category/index')
const SubCategory = () => import('@/views/category/sub')

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      { path: '/', component: Home },
      { path: '/category/:id', component: TopCategory },
      { path: '/category/sub/:id', component: SubCategory }
    ]
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
