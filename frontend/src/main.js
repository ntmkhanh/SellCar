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
    //chinh thong bao
app.use(Toaster, { position: 'top-right', duration: 1000 })
app.mount('#app')