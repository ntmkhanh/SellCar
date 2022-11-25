import { createWebHistory, createRouter } from 'vue-router';
//import Home from "@view/Home.vue";

const routes = [{
        path: "/",
        name: "home",
        component: () =>
            import ('@/view/Homeview.vue'),
    },

    {
        path: '/Login',
        name: 'Login',
        component: () =>
            import ('@/view/Login.vue'),
    },

];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});

export default router;