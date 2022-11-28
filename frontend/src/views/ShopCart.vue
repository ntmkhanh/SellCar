<template>
    <div class="car-section">
        <div class="heading">
            <span>Cart</span>
        </div>
    </div>
    <div>
        <AppCart />
    </div>
</template>

<script>

import { carService } from "@/services/car.service";
import AppCart from "@/components/AppCart.vue";
export default {
    components: {
        AppCart,
        
    },
    //The full code will be presented below
    data() {
        return {
            cars: [],
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
                this.cars = await carService.getBookID();
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
.heading {
    text-align: center;
    padding-bottom: 2rem;
}

.heading span {
    font-family: 'Satisfy', cursive;
    font-size: 3rem;
    color: #27ae60;
}
</style>