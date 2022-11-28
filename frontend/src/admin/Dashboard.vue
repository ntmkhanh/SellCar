<template>
    <div class="car-section">
        <div class="heading">
            <span>Product</span>
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