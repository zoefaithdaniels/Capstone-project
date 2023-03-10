import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import( '../views/AdminView.vue')
  },
  {
    path: '/Product',
    name: 'Products',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/SingleProduct',
    name: 'Single Product',
    component: () => import('../views/SingleProductView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
