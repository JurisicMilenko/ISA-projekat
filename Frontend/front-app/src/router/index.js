import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import FactoryList from '../components/FactoryList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/factories',
    name: 'FactoryList',
    component: FactoryList
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

