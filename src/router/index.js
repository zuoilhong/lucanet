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
      },
      {
        path: '/references',
        component: () => import('../views/references/index.vue'),
        meta: {
          title: 'references',
          requiresAuth: false
        }
      },
      {
        path: '/financial',
        component: () => import('../views/financial-consolidation/index.vue'),
        meta: {
          title: 'financial-consolidation',
          requiresAuth: false
        }
      },
      {
        path: '/ifrs16',
        component: () => import('../views/financial-consolidation/ifrs16.vue'),
        meta: {
          title: 'IFRS-16',
          requiresAuth: false
        }
      },
      {
        path: '/Financial_Planning',
        component: () => import('../views/plan/index.vue'),
        meta: {
          title: 'Financial Planning',
          requiresAuth: false
        }
      },
      {
        path: '/forecasting',
        component: () => import('../views/plan/forecasting.vue'),
        meta: {
          title: 'Forecasting and Scenario Planning',
          requiresAuth: false
        }
      },
      {
        path: '/group_Controlling',
        component: () => import('../views/plan/group_Controlling.vue'),
        meta: {
          title: 'Group Controlling',
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
