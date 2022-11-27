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
        return `cars.car_src`
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
                        <img v-bind:src="imagePath" class="imageproduit">
                    </p>
                    <div class="text-gray-900 text-base font-medium mb-2">
                        {{ car.car_name }}
                    </div>
                    <div class="text-gray-900 text-base font-medium mb-2">
                        {{ car.user_price }}
                    </div>
                    <div class="text-gray-900 text-base font-medium mb-2">
                        {{ car.user_price }} 
                    </div>
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