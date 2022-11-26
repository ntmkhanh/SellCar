<template>
    <ul class="list-group">
        <li v-for="(cars, index) in car" :key="cars.id" :class="{ active: index === activeIndex }">
            <div class="rounded-lg shadow-lg bg-white max-w-3xl my-2 object">
                <div class="p-7">
                    <!--<p class="text-gray-700 text-base mb-4 line-clamp-4">
                        {{ img }}
                    </p>-->
                    <div class="text-gray-900 text-base font-medium mb-2">
                        {{ cars.car_name }}
                    </div>
                    <div class="text-gray-700 text-sm mb-4">
                        @{{ cars.user_price }}
                    </div>
                    <div class="flex justify-center">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {{ cars.car_src }}
                        </h5>
                    </div>
                    <router-link :to="{
                        //name: 'post.show',
                        params: { id: cars.car_id },
                    }">
                    </router-link>
                    <!--
                    <p class="text-gray-700 text-base mb-4 font-medium">
                        Likes: {{ post.numLike }}
                    </p>
                    -->
                </div>
            </div>
        </li>
    </ul>
</template>
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
<style>
.object {
    text-align: justify;
}
</style>