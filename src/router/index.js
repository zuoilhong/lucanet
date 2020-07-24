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
        component: () => import('../views/close/financial.vue'),
        meta: {
          title: 'financial-consolidation',
          requiresAuth: false
        }
      },
      {
        path: '/ifrs16',
        component: () => import('../views/close/ifrs16.vue'),
        meta: {
          title: 'IFRS-16',
          requiresAuth: false
        }
      },
      {
        path: '/close',
        component: () => import('../views/close/close.vue'),
        meta: {
          title: 'Close | Solutions | LucaNet',
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
      },
      {
        path: '/plan',
        component: () => import('../views/plan/plan.vue'),
        meta: {
          title: 'Group Controlling',
          requiresAuth: false
        }
      },
      {
        path: '/report',
        component: () => import('../views/report/report.vue'),
        meta: {
          title: 'Reporting | Solutions | LucaNet',
          requiresAuth: false
        }
      },
      {
        path: '/management',
        component: () => import('../views/report/management.vue'),
        meta: {
          title: 'Management Reporting | Software Solutions | LucaNet',
          requiresAuth: false
        }
      },
      {
        path: '/business',
        component: () => import('../views/report/business.vue'),
        meta: {
          title: 'Business Intelligence & Dashboarding | Software Solutions | LucaNet',
          requiresAuth: false
        }
      },
      {
        path: '/disclosure',
        component: () => import('../views/report/disclosure.vue'),
        meta: {
          title: 'Disclosure Management and ESEF-Reporting | Software Solutions | LucaNet',
          requiresAuth: false
        }
      },
      {
        path: '/collect',
        component: () => import('../views/collect/collect.vue'),
        meta: {
          title: 'Collect | Solutions | LucaNet',
          requiresAuth: false
        }
      },
      {
        path: '/collect/migration',
        component: () => import('../views/collect/migration.vue'),
        meta: {
          title: 'Collect | Solutions | LucaNet',
          requiresAuth: false
        }
      },
      {
        path: '/collect/quality',
        component: () => import('../views/collect/quality.vue'),
        meta: {
          title: 'Collect | Solutions | LucaNet',
          requiresAuth: false
        }
      },
      {
        path: '/collect/intercompany',
        component: () => import('../views/collect/intercompany.vue'),
        meta: {
          title: 'Collect | Solutions | LucaNet',
          requiresAuth: false
        }
      },
      {
        path: '/technology/software-architecture',
        component: () => import('../views/technology/software-architecture.vue'),
        meta: {
          title: 'Collect | Solutions | LucaNet',
          requiresAuth: false
        }
      },
      {
        path: '/technology/cloud',
        component: () => import('../views/technology/cloud.vue'),
        meta: {
          title: 'Collect | Solutions | LucaNet',
          requiresAuth: false
        }
      },
      {
        path: '/resources/blog',
        component: () => import('../views/resources/blog.vue'),
        meta: {
          title: 'Collect | Solutions | LucaNet',
          requiresAuth: false
        }
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})

export default router
