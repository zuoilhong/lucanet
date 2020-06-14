import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('../views/layout/main.vue'),
    redirect: '/home/index',
    children: [
      {
        path: '/home/index',
        alias: '/home',
        component: () => import('../views/home/index.vue'),
        meta: {
          title: '首页',
          requiresAuth: false
        }
      },
      {
        path: '/consulting',
        component: () => import('../views/consulting/index.vue'),
        meta: {
          title: 'consulting',
          requiresAuth: false
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
