import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PaintComingSoon from '../components/PaintComingSoon.vue'
import CleanComingSoon from '../components/CleanComingSoon.vue'
import Moovers from '../views/Moovers.vue'
import LandingPage from '../views/LandingPage.vue'
import Checkout from '../views/Checkout.vue'
import Invoice from '../views/Invoice.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '1',
    component: LandingPage
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/painters',
    name: 'Painters',
    component: PaintComingSoon
  },
  {
    path: '/cleaners',
    name: 'Cleaners',
    component: CleanComingSoon
  },
  {
    path: '/moovers',
    name: 'Moovers',
    component: Moovers
  },
 
  {
    path: '/moovers/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/moovers/invoice',
    name: 'Invoice',
    component: Invoice
  },
  {
    path: '/landingpage',
    name: 'LandingPage',
    component: LandingPage
  }
  


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
