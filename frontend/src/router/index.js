import { createWebHistory, createRouter } from 'vue-router';
//import { useAuthStore } from "@/store/auth";


//import Home from "@view/Home.vue";


/*function isAuth() {
    const authStore = useAuthStore();
    if (authStore.userAuth == null) {
        return { name: "Login" };
    }
    return true;
}*/
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
        path: "/about",
        name: "About",
        component: () =>
            import ('@/views/About.vue')
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
    {
        path: '/carAdd',
        name: 'carAdd',
        component: () =>
            import ('@/views/CarAdd.vue')
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () =>
            import ('@/admin/Admin.vue')
    },
    {
        path: "/admin/dashboard",
        name: "Dashboard",
        component: () =>
            import('@/admin/Dashboard.vue')
      },
];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});

export default router;