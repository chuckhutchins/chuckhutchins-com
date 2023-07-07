import { createRouter, createWebHistory } from 'vue-router';
import ResumeView from '@/views/ResumeView.vue';
import { useCoffeeStore } from '@/stores/CoffeeStore.js';
import { useMediaStore } from '@/stores/MediaStore.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
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
      beforeEnter(to, from, next) {
        const mediaStore = useMediaStore();
        mediaStore.getBookList();
        next();
      },
    },
    {
      path: '/media-consumption/movies',
      name: 'MediaConsumptionMoviesPage',
      component: () => import('@/views/MediaConsumptionMoviesView.vue'),
      beforeEnter(to, from, next) {
        const mediaStore = useMediaStore();
        mediaStore.getMovieList();
        next();
      },
    },
    {
      path: '/media-consumption/tv-shows',
      name: 'MediaConsumptionTVShowsPage',
      component: () => import('@/views/MediaConsumptionTVShowsView.vue'),
      beforeEnter(to, from, next) {
        const mediaStore = useMediaStore();
        mediaStore.getTVShowList();
        next();
      },
    },
    {
      path: '/media-consumption/video-games',
      name: 'MediaConsumptionVideoGamesPage',
      component: () => import('@/views/MediaConsumptionVideoGamesView.vue'),
      beforeEnter(to, from, next) {
        const mediaStore = useMediaStore();
        mediaStore.getVideoGameList();
        next();
      },
    },
    {
      path: '/wishlist',
      name: 'WishlistPage',
      component: () => import('@/views/WishlistView.vue'),
    },
  ],
});

export default router;
