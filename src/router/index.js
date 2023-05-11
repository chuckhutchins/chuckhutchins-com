import { createRouter, createWebHistory } from 'vue-router';
import ResumeView from '@/views/ResumeView.vue';
import {useCoffeeStore} from '@/stores/CoffeeStore.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ResumePage',
      component: ResumeView,
    },
    {
      path: '/coffee-consumption',
      name: 'CoffeeConsumptionPage',
      component: () => import('@/views/CoffeeConsumptionView.vue'),
      beforeEnter(to, from, next) {
        const coffeeStore = useCoffeeStore();
        coffeeStore.getCoffeeList();
        next();
      },
    },
    {
      path: '/media-consumption',
      name: 'MediaConsumptionPage',
      component: () => import('@/views/MediaConsumptionView.vue'),
    },
    {
      path: '/media-consumption/books',
      name: 'MediaConsumptionBooksPage',
      component: () => import('@/views/MediaConsumptionBooksView.vue'),
    },
    {
      path: '/media-consumption/movies',
      name: 'MediaConsumptionMoviesPage',
      component: () => import('@/views/MediaConsumptionMoviesView.vue'),
    },
    {
      path: '/media-consumption/tv-shows',
      name: 'MediaConsumptionTVShowsPage',
      component: () => import('@/views/MediaConsumptionTVShowsView.vue'),
    },
    {
      path: '/media-consumption/video-games',
      name: 'MediaConsumptionVideoGamesPage',
      component: () => import('@/views/MediaConsumptionVideoGamesView.vue'),
    },
  ],
});

export default router;
