<template>
    <div class="car-section">
        <div class="heading">
            <span>Product</span>
            <h3>Our Special Version</h3>
        </div>

        <div class="flex justify-center">
            <InputSearch v-model="searchText" />
        </div>
    </div>

    <div class="list-gr justify-center">
            <AppProduct v-if="filteredCarsCount > 0" :cars="filteredCars" />
        <p v-else>
            Not found!
        </p>
    </div>
    <router-link to="/carAdd" >
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add car
        </span>
        </button>
    </router-link>
</template>

<script>

import AppProduct from "@/components/AppProduct.vue";
import { carService } from "@/services/car.service";
import InputSearch from "@/components/InputSearch.vue";
export default {

    components: {
        InputSearch,
        AppProduct,
    },
    //The full code will be presented below
    data() {
        return {
            cars: [],
            searchText: '',
        };
    },
    watch: {
        // Monitor changes on searchText
        // Release the currently selected post
    },
    computed: {
        // Map posts to strings for searching.
        carsAsStrings() {
            return this.cars.map((car) => {
                const { car_name } = car;
                return [car_name.toLowerCase()].join('');
            });
        },
        // Return posts filtered by the search box.
        filteredCars() {
            if (!this.searchText) return this.cars;
            return this.cars.filter((car, index) =>
                this.carsAsStrings[index].includes(this.searchText.toLowerCase())
            );
        },

        filteredCarsCount() {
            return this.filteredCars.length;
        },
    },
    methods: {
        async retrieveCars() {
            try {
                /*
                const postsList = await blogService.getManyPost();
                this.posts = postsList.sort((current, next) =>
                    current.post_title.localeCompare(next.post_title)
                );
                */
                this.cars = await carService.getAllCar();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveCars();
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

.heading h3 {
    font-size: 3rem;
    color: #130f40;
}

.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.list-gr {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
}
</style>