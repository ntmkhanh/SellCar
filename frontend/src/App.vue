<script> 
  import AppHeader from '@/components/AppHeader.vue';
  import Footer from '@/components/Footer.vue';
  import { useAuthStore} from '@/store/auth';
  //import { mapActions, mapState } from 'pinia';
  //import AppNavar from './components/AppNavar.vue';
  export default {
    setup(){
      const store = useAuthStore();
    return{
      store,
    };
    },
    components: {
    AppHeader,
    Footer,
    //AppNavar
},
  };
</script> 

<script setup>
import '@/assets/home.css'
</script>

 <!-- <template> 
  <div id="app">
    <div id="nav">
      <AppHeader /> -->
      <!-- <AppNavar />  -->
    <!-- </div>
    <router-view />
  </div>
</template>   -->
<template>
  <div id="app">
      <div v-if="admin">
          <router-view></router-view>
      </div>
      <div v-else>
          <AppHeader />

          <div class="auth-wrapper">
              <div class="auth-inner">
                  <router-view></router-view>
              </div>
          </div>
          <Footer />
      </div>
  </div>
</template>


