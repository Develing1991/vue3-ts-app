import { createComponent } from '@/layouts/LayoutIndex';
import { createRouter, createWebHistory } from 'vue-router';

//import TheHeader from '@/layouts/headers/TheHeader.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Home'
      },
      component: createComponent(
        'LayoutIndex',
        () => import('@/layouts/headers/TheHeader.vue'),
        () => import('@/layouts/mains/TheMain.vue'),
        () => import('@/layouts/footers/TheFooter.vue')
      ),
      children: [
        {
          path: '/',
          name: 'MainPage',
          component: () => import('@/views/ma/MainPage.vue')
        }
      ]
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
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string;
  next();
});

export default router;
