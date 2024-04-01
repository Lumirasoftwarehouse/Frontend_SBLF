import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: () => import('../views/LandingPage.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/admin-dashboard',
      name: 'admin-dashboard',
      component: () => import('../views/admin/Dashboard.vue')
    },    
    {
      path: '/admin-trend',
      name: 'admin-trend',
      component: () => import('../views/admin/GlobalTrends.vue')
    },    
    {
      path: '/admin-quote',
      name: 'admin-quote',
      component: () => import('../views/admin/Quote.vue')
    },    
    {
      path: '/admin-value',
      name: 'admin-value',
      component: () => import('../views/admin/OrientationValue.vue')
    },    
    {
      path: '/admin-client',
      name: 'admin-client',
      component: () => import('../views/admin/ClientPartner.vue')
    },    
  ]
})

export default router
