import { createApp } from 'vue'; // Import createApp from 'vue'

import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .mount('#app');
