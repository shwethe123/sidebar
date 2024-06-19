import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@arco-design/web-vue/dist/arco.css';
import router from './router';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { auth } from '@/firebase/config';

let app;

auth.onAuthStateChanged(user => {
  if (!app) {
    // Initialize and mount the Vue app once the authentication state is determined
    app = createApp(App);
    app.use(router);
    app.mount('#app');

    if (user) {
      console.log('User signed in:', user);
    } else {
      console.log('User signed out');
    }
  }
});
