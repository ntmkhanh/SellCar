<template>
    <div class="car-section">
        <div class="heading">
            <span>Product</span>
            <h3>Our Special Version</h3>
        </div>
    </div>
    <!-- <div class="row">
        <div class="col-sm-4 col-12 filter-box">
            <div class="row search-box">
                <input type="text" class="search-input" placeholder="Search.." />
            </div>

            <div class="row filter-drop-down">
                <p @click="displayFilterDrop">Filter<span v-if="showDropDown">x</span><span v-else>v</span></p>
            </div>

            <div class="row filter-heading">
                <h1>Status</h1>
            </div>
        </div>
    </div> -->
    <div class="flex justify-center">
        <AppProduct v-if="filteredCarsCount > 0" :cars="filteredCars" />
        <p v-else>

        </p>
    </div>

</template>

<script>

import AppProduct from "@/components/AppProduct.vue";
import { carService } from "@/services/car.service";
// export default {
//     name: "Menu",

//     data() {
//         return {
//             foodObj: { name: "", category: "", status: [], price: "", type: "" },

//             showQuickView: false,
//             showDropDown: false,
//             sendId: null,

//             perPage: 6,
//             pageNum: 0,
//             previousCategoryClicked: "",
//             previousPriceClicked: "",
//             previousTypeClicked: "",
//         };
//     },
export default {
    name: "Productview",
    components: {
        AppProduct,
    },
    //The full code will be presented below
    data() {
        return {
            //carObj: {name: "", category: "", status: [], price: "", type: "" }
            cars: [],
            searchText: '',
        };
    },
    watch: {
        // Monitor changes on searchText
        // Release the currently selected post
    },
    computed: {
        //...mapState(["allCars"]),
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
        // filterCars: function () {
        //     return this.allCars.filter((f) => f.car_name.toLowerCase().match(this.carObj.name.toLowerCase()) &&
        //         (f.car_category.match(this.carObj.category) || this.carObj.category == "all" || this.carObj.category == "") &&
        //         (this.evaluatePrice(f, this.carObj.price)) &&
        //         f.car_type.toLowerCase().match(this.carObj.type.toLowerCase()) &&
        //         (this.evaluateStatus(f, this.carObj.status)));
        // },
        filteredCarsCount() {
            return this.filteredCars.length;
        },
    },
    methods: {
        async retrieveCars() {
            try {
                
                const postsList = await blogService.getManyPost();
                this.posts = postsList.sort((current, next) =>
                    current.post_title.localeCompare(next.post_title)
                );
                
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

.heading h3 {
    font-size: 3rem;
    color: #2cb06e;
}

.heading span {
    font-family: 'Satisfy', cursive;
    font-size: 3rem;
    color: #070e86;
}
</style>