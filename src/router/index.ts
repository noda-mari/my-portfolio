import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Welcome from '../views/welcome.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import WorkDetail from '@/views/WorkDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/work/:slug',
    name: 'WorkDetail',
    component: WorkDetail,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router