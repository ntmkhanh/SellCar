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
    },
};
</script>
<template>
    <ul class="list-group">
        <li v-for="(car, index) in cars" :key="car.car_id" :class="{ active: index === activeIndex }">
            <div class="rounded-lg shadow-lg bg-white max-w-3xl my-2 object">
                <div class="p-7">
                    <p class="text-gray-700 text-base mb-4 line-clamp-4">
                        <img src="@/img/dsds.png" class="mr-3 h-6 sm:h-9" alt="Logo" />
                    </p>
                    <div class="text-gray-900 text-base font-medium mb-2">
                        {{ car.car_name }}
                    </div>
                    <div class="text-gray-700 text-sm mb-4">
                        {{ car.user_price }}
                    </div>
                    <div class="flex justify-center">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {{ car.car_src }}
                        </h5>
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
</style>