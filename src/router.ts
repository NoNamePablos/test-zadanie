import { createRouter, createWebHistory } from 'vue-router';
import { VLoadingView } from '@/views/VLoadingView';
import { VHomeView } from '@/views/VHomeView';
import { VDetailView } from '@/views/VDetailView';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: VHomeView,
    },
    {
      path: '/:id',
      name: 'detail',
      component: VDetailView,
    },
  ],
});

export default router;
