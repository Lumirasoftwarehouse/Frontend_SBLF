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
      path: '/about-us',
      name: 'about-us',
      component: () => import('../views/AboutUs.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/Services.vue')
    },
    {
      path: '/pengurus',
      name: 'pengurus',
      component: () => import('../views/Pengurus.vue')
    },
    {
      path: '/obip',
      name: 'obip',
      component: () => import('../views/Obip.vue')
    },
    {
      path: '/olip',
      name: 'olip',
      component: () => import('../views/Olip.vue')
    },
    {
      path: '/daftar',
      name: 'daftar',
      component: () => import('../views/Daftar.vue')
    },
    {
      path: '/anggota',
      name: 'anggota',
      component: () => import('../views/Anggota.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },



    // admin
    {
      path: '/admin-dashboard',
      name: 'admin-dashboard',
      component: () => import('../views/admin/Dashboard.vue')
    },    
    {
      path: '/admin-about',
      name: 'admin-about',
      component: () => import('../views/admin/About.vue')
    },    
    {
      path: '/admin-visi-misi',
      name: 'admin-visi-misi',
      component: () => import('../views/admin/VisiMisi.vue')
    },    
    {
      path: '/admin-opportunity',
      name: 'admin-opportunity',
      component: () => import('../views/admin/Opportunity.vue')
    },    
    {
      path: '/admin-benefit',
      name: 'admin-benefit',
      component: () => import('../views/admin/BenefitProgram.vue')
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
    {
      path: '/admin-register',
      name: 'admin-register',
      component: () => import('../views/admin/Register.vue')
    },    
    {
      path: '/admin-service',
      name: 'admin-service',
      component: () => import('../views/admin/Service.vue')
    },    
    {
      path: '/admin-anggota',
      name: 'admin-anggota',
      component: () => import('../views/admin/Anggota.vue')
    },    
    {
      path: '/admin-pengurus',
      name: 'admin-pengurus',
      component: () => import('../views/admin/Pengurus.vue')
    },    
  ]
})

export default router
