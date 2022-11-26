import { createWebHistory, createRouter } from 'vue-router';
//import Home from "@view/Home.vue";

const routes = [{
        path: "/",
        name: "HomeView",
        component: () =>
            import ('@/views/HomeView.vue'),
    },
    {
        path: "/product",
        name: "Product",
        component: () =>
            import ('@/views/Product.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('@/views/Login.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('@/views/Register.vue'),
    },

];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});

export default router;