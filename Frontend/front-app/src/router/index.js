import { createRouter, createWebHistory } from 'vue-router';
import Main from '../components/Main.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue'
import MyProfile from '@/components/MyProfile.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/myprofile',
    name: 'MyProfile',
    component: MyProfile,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;