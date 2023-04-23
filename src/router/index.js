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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/MediaConsumptionView.vue'),
    },
  ],
});

export default router;
