import { createComponent } from '@/layouts/LayoutIndex'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import TheHeader from '@/layouts/headers/TheHeader.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: createComponent(
        'LayoutIndex',
        () => import('@/layouts/headers/TheHeader.vue'),
        () => import('@/layouts/mains/TheMain.vue'),
        () => import('@/layouts/footers/TheFooter.vue')
      ),
      children: [
        {
          path: 'dsfsd',
          name: 'fsddfs',
          component: () => import('@/views/HomeView.vue')
        }
      ]
    }
  ]
})

export default router
