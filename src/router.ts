import { createRouter, createWebHistory } from 'vue-router';
import { VLoadingView } from '@/views/VLoadingView';
import { VHomeView } from '@/views/VHomeView';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: VHomeView,
    },
  ],
});

export default router;
