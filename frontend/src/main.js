import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/home.css'
import router from "./router";
import '@fortawesome/fontawesome-free/css/all.min.css'

const app = createApp(App);
app.use(router);
app.mount('#app')