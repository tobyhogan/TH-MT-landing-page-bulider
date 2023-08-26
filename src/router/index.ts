import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/my-account',
      name: 'My Accuont',
      component: () => import('../views/AccountView.vue')
    },
    {
      path: '/editor',
      name: 'Editor',
      component: () => import('../views/EditorView.vue')
    }
  ]
})

export default router
