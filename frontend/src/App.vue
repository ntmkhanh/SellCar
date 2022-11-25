<script> 
  import AppHeader from '@/components/AppHeader.vue';
  export default {
    components: {
      AppHeader,
    },
  };
</script> 

<script setup>
import '@/assets/home.css'
</script>

<template> 
  <div id="app">
    <div id="nav">
      <AppHeader />
      <!-- <AppNavar /> -->
    </div>
    <router-view />
  </div>
</template> 




