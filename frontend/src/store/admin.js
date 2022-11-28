import axios from 'axios';
import { defineStore } from 'pinia';
const url =
    import.meta.env.VITE_APP_API_URL;
export const adminAuthStore = defineStore({
    // a function that returns a fresh state
    id: "loginadmin",
    //persist: true,
    state: () => ({
        adminAuth: null,
    }),

    actions: {
        async logout() {
            this.adminAuth = null;
        },

        async login({ email, password }) {
            console.log(email, password);
            try {
                const adminid = await axios.post(`${url}/api/adminLogin`, {
                    email: email,
                    password: password,
                });
                console.log("adminid: ", adminid);
                if (adminid.data !== "") {
                    this.adminAuth = adminid;
                } else this.adminAuth = null;
                console.log("in admin: ", this.adminAuth.data);
                // return Promise.resolve(res.data);
            } catch (error) {
                console.log(error);
                // return Promise.reject(error);
            }
        },
    },
});