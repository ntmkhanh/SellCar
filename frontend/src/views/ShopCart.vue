<template>
    <div class="car-section">
        <div class="heading">
            <span>Cart</span>
        </div>
    </div>
        <div class="table">
            <AppCart
            v-if="filteredCarsCount > 0" :books="filteredCars" :user_email="this.email"
            />
        </div>
</template>

<script>

import { carService } from "@/services/car.service";
import AppCart from "@/components/AppCart.vue";
import { useAuthStore } from '@/store/auth';
import {  mapState } from 'pinia';
export default {
    props: {
        email: { type: String, required: true},
    },
    computed: {
        ...mapState(useAuthStore, ["userAuth"]),
        isAuth() {
            return useAuthStore().userAuth != null;
        },
        /*carsAsStrings() {
            return this.books.map((book) => {
                const { car_name } = book;
                return [car_name.toLowerCase()].join('');
            });
        },*/
        // Return posts filtered by the search box.
        filteredCars() {
            if (!this.searchText) return this.books;
            return this.books.filter((book, index) =>
                this.carsAsStrings[index].includes(this.searchText.toLowerCase())
            );
        },

        filteredCarsCount() {
            return this.filteredCars.length;
        },
    },
    components: {
        AppCart,
        
    },
    //The full code will be presented below
    data() {
        return {
            books: [],
        };
    },
    watch: {
        // Monitor changes on searchText
        // Release the currently selected post
    },
    methods: {
        async retrieveBooks() {
            try {
                /*
                const postsList = await blogService.getManyPost();
                this.posts = postsList.sort((current, next) =>
                    current.post_title.localeCompare(next.post_title)
                );
                */
                this.books = await carService.seecart(this.email);
                this.user_email = this.email;
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveBooks();
        },
    },
    mounted() {
        this.refreshList();
    },
};
</script>

<style scoped>
</style>