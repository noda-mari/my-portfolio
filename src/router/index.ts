import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Welcome from '../views/welcome.vue'
import Home from '@/views/Home.vue'
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
    component: Home,
    meta: { header: 'main' },
  },
  {
    path: '/work/:slug',
    name: 'WorkDetail',
    component: WorkDetail,
    meta: { header: 'sub' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 }
  }
})


export default router