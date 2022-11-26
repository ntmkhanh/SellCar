import { createWebHistory, createRouter } from 'vue-router';
import { useAuthStore } from "@/store/auth";


//import Home from "@view/Home.vue";


function isAuth() {
    const authStore = useAuthStore();
    if (authStore.userAuth == null) {
        return { name: "Login" };
    }
    return true;
}
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