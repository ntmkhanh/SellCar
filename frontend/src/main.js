import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/home.css'
import router from "./router";
import { createPinia } from "pinia";
import '@fortawesome/fontawesome-free/css/all.min.css'
import Toaster from '@meforma/vue-toaster';

const pinia = createPinia()
const app = createApp(App);
app.use(router);
app.use(pinia)
<<<<<<< HEAD
app.use(Toaster)
app.mount('#app')
=======
app.mount('#app')
>>>>>>> 130383a6ee8ef4e081d89e3aa4c0f735bb0171b5
