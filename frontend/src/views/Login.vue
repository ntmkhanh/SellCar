<template>
    <div class="w-4/12 mx-auto p-16 border mt-12 shadow-md">
      <h1 class="text-2xl font-bold text-gray-800 text-center">Sign In</h1>
      <form class="flex flex-col justify-center" @submit.prevent="login">
        <div>
          <label class="block text-sm font-medium text-gray-700"> Email </label>
          <input class="
                mt-1
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              " placeholder="Email..." type="email" v-model="email" />
        </div>
        <div class="flex flex-col mt-4">
          <label class="block text-sm font-medium text-gray-700"> Password </label>
          <input class="
                mt-1
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              " placeholder="Password" type="password" v-model="password" />
        </div>
        <!-- eslint-disable -->
        <button class="bg-indigo-600 py-3 px-8 mx-auto rounded-md text-white font-black text-sm my-4">
          Sign In
        </button>
      </form>
      <div class="text-red-600 text-sm">{{ error.message }}</div>
    </div>
  </template>
  <script>
  import { mapActions, mapState } from "pinia";
  import { useAuthStore } from "@/stores/auth/auth";
  export default {
    data: () => ({
      email: "",
      password: "",
      error: "",
    }),
    computed: {
      // gives access to this.count inside the component
      // same as reading from store.count
      ...mapState(useAuthStore, ["user"]),
      // same as above but registers it as this.myOwnName
    },
    methods: {
      ...mapActions(useAuthStore, { loginVue: "login" }),
      async login() {
        try {
          await this.loginVue({
            email: this.email,
            password: this.password,
          });
          this.$router.push("/albums");
        } catch (error) {
          this.error = error;
        }
      },
    },
  };
  </script>