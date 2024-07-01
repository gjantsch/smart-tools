import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mysql2data',
      name: 'mysql2data',
      component: () => import('../views/Mysql2DataView.vue')
    },
    {
      path: '/uuencode',
      name: 'uuencode',
      component: () => import('../views/UUEncodeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
