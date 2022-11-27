<script>
export default {
    props: {
        cars: { type: Array, default: () => [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ['update:activeIndex'],
    methods: {
        updateActiveIndex(index) {
            this.$emit('update:activeIndex', index);
        },
        imagePath() {
            return `car.car_src`
        }
    },
};
</script>
<template>
    <ul class="list-group">
        <li v-for="(car, index) in cars" :key="car.car_id" :class="{ active: index === activeIndex }">
            <div class="rounded-lg shadow-lg bg-white max-w-xl my-2 object">
                <div class="p-7">
                    <p class="text-gray-900 text-base font-medium mb-2">
                        <img src="@/img/dsds.png" alt="Logo" />
                    </p>
                    <div class="text-gray-900 text-base font-medium mb-2">
                        {{ car.car_name }}
                    </div>
                    <div class="text-gray-900 text-base font-medium mb-2">
                        {{ car.car_price }}
                    </div>
                    <div class="text-gray-900 text-base font-medium mb-2">
                        {{ car.car_type }}
                    </div>
                    <router-link to="/bookCar">
                        <button class="button">
                            <span class="bookbtn">
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
.button {
    background-color: white; /* Green */
    border: 2px solid #008CBA;
    color: black; 
    padding: 8px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    /* margin: 4px 2px; */
    transition-duration: 0.4s;
    cursor: pointer;
    margin-left: 30%;
    border-radius: .5rem;
    
}

.button:hover {
    background-color: #008CBA;
    color: white;
}

.object {
    text-align: justify;
}

.list-group {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 2%;
    gap: 50px;
    font-size: 20;
}
</style>