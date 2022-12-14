import axios from 'axios';
import { defineStore } from 'pinia';
const url =
    import.meta.env.VITE_APP_API_URL;
export const useAuthStore = defineStore({
    // a function that returns a fresh state
    id: "loginauth",
    //persist: true,
    state: () => ({
        userAuth: null,
    }),

    actions: {
        async logout() {
            this.userAuth = null;
        },

        async login({ email, password }) {
            console.log(email, password);
            try {
                const userid = await axios.post(`${url}/api/userLogin`, {
                    email: email,
                    password: password,
                });
                console.log("userid: ", userid);
                if (userid.data !== "") {
                    this.userAuth = userid;
                } else this.userAuth = null;
                console.log("in auth: ", this.userAuth.data);
                // return Promise.resolve(res.data);
            } catch (error) {
                console.log(error);
                // return Promise.reject(error);
            }
        },
    },
});