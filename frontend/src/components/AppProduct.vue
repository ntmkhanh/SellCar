<script>
import { imgUrlFor } from '@/utils/utils';
const serverUrl = import.meta.env.VITE_SERVER_URL;
export default {
    data: () => ({
        serverUrl,
        imgUrlFor,
    }),
    props: {
        cars: { type: Array, default: () => [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ['update:activeIndex'],
    methods: {
        updateActiveIndex(index) {
            this.$emit('update:activeIndex', index);
        },
        /*imagePath() {
            return `car.car_src`
        }*/
    },
};
</script>
<template>
    <ul class="list-group">
        <li v-for="(car, index) in cars" :key="car.car_id" :class="{ active: index === activeIndex }">
            <div class="rounded-lg shadow-lg bg-white max-w-xl my-2 object">
                <div class="p-7">
                    <div class="flex-shrink-0" v-if="car.car_src">
                        <img :src="imgUrlFor(serverUrl, car.car_src)" alt="book" class="rounded-md w-[8.5rem] h-[11rem]" />
                    </div>
                    <!--<div class="image">
                        <img :src="require(`../img/${car.car_src}`)" alt="" />
                    </div>-->
                    <!--<p class="text-gray-900 text-base font-medium mb-2">
                        <img src="@/img/dsds.png"  alt="Logo" />      
                    </p>-->
                    <div class="text-gray-900 text-base font-medium mb-2">
                        {{ car.car_name }}
                    </div>
                    <div class="text-gray-900 text-base font-medium mb-2">
                        {{ car.car_price }}
                    </div>
                    <div class="text-gray-900 text-base font-medium mb-2">
                        {{ car.car_type }} 
                    </div>
                    <router-link to="/bookCar" >
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Book
                    </span>
        </button>
    </router-link>
                </div>
            </div>
        </li>
    </ul>
</template>

<style>
.object {
    text-align: justify;
}

.list-group{
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 2%;
    gap: 50px;
    font-size: 20;
}
</style>