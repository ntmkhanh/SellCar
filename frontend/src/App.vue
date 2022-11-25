<script> 
  import AppHeader from '@/components/AppHeader.vue';
  import AppNavar from './components/AppNavar.vue';
  export default {
    components: {
      AppHeader,
      AppNavar,
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




