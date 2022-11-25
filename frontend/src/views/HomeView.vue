<script setup>
import { imgUrlFor } from "@/utils/utils"
const serverUrl = import.meta.env.VITE_SERVER_URL
</script>
<template>
  <div class="mx-auto w-7/12 my-16">
    <vue-flex-waterfall class="mx-auto w-full" :col="4" :col-spacing="15" :break-at="4" :break-by-container="true"
      style="align-content: center;">
      <div class="mb-4 w-1/3" v-for="(photobook, index) in filteredPhotobooks" :key="index">
        <div class="flex flex-col">
          <router-link :to="{ 'name': 'photobook-detail', params: { id: photobook.id } }">
            <div class="flex-shrink-0">
              <img :src="imgUrlFor(serverUrl, photobook.cover)" alt="book" class="rounded-md w-full h-auto" />
            </div>
          </router-link>
          <div class="">
            <h3 class="text-gray-800 font-medium text-base">{{ photobook.name }}</h3>
            <p class="text-gray-600 text-sm">{{ photobook.owner }}</p>
          </div>
        </div>
      </div>
    </vue-flex-waterfall>
  </div>
</template>

<script>
import { VueFlexWaterfall } from 'vue-flex-waterfall';

import axios from 'axios';
export default {
  components: {
    VueFlexWaterfall,
  },
  data: () => ({ photobooks: [] }),
  async mounted() {
    const res = await axios.get(``)
    this.photobooks = res.data
  },
  methods: {
    photobookAsString(photobook) {
      const { name, description, owner } = photobook;
      return [name, description, owner].join('').toLowerCase();
    },
  },
  computed: {
    filteredPhotobooks() {
      const searchText = this.$route.query["q"]?.toLowerCase()
      if (!searchText) return this.photobooks;
      return this.photobooks.filter((photobook) =>
        this.photobookAsString(photobook).includes(searchText)
      );
    },
  }
}
</script>
