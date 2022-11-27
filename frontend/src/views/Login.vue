<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="w-4/12 mx-auto p-16 border mt-12 shadow-md">
      <h1 class="text-2xl font-bold text-gray-800 text-center">Sign In</h1>
      <Form :validation-schema="formSchema" @submit="login">
        <div>
          <label class="block text-sm font-medium text-gray-700"> Email </label>
          <Field name="email" 
                class="
                mt-1
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              " placeholder="Email..." type="email" v-model="email" />
          <ErrorMessage name="email" class="text-sm text-red-800" />
        </div>
        <div class="flex flex-col mt-4">
          <label class="block text-sm font-medium text-gray-700"> Password: </label>
          <Field name="password" 
                class="
                mt-1
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              " placeholder="Password" type="password" v-model="password" />
            <ErrorMessage name="password" class="text-sm text-red-800" />
            </div>
        <!-- eslint-disable -->
        <button class="bg-indigo-600 py-3 px-8 mx-auto rounded-md text-white font-black text-sm my-4" type="submit">
          Sign In
        </button>
      </Form>
      <div class="text-red-600 text-sm">{{ error.message }}</div>
    </div>
  </template>
  <script>
  import * as yup from 'yup';
  import { Form, Field, ErrorMessage } from 'vee-validate';
  //import { carService } from '@/services/car.service';
  import { useAuthStore } from '@/store/auth';
  import { mapActions, mapState } from 'pinia';
  export default {
      data() {
          const formSchema = yup.object().shape({
              email: yup
                  .string()
                  .required('Tên tài khoản không thể trống.')
                  .max(50, 'Tên tài khoản không quá 50 kí tự'),
              password: yup
                  .string()
                  .required('Mật khẩu không thể trống.')
                  .min(6, 'Mật khẩu ít nhất 6 kí tự.'),
          });
          return ({
              email: "",
              password: "",
              error: "",
              formSchema
          })
      },
      computed: {
        ...mapState(useAuthStore, ["userAuth"]),
      },
      mounted() {
          console.log("in login 1: ", this.userAuth);
      },
      methods: {
        ...mapActions(useAuthStore, { loginVue: "login"}),
          async login() {
              try {
                  await this.loginVue({
                      email: this.email,
                      password: this.password,
                  });
                  if(this.userAuth != null){
                    this.$router.push("/");
                    this.$toast.success('Đăng nhập thành công');
                  } else {
                    this.$toast.error('Tài khoản hoặc mật khẩu không đúng');
                  }
                  console.log("in login: ", this.userAuth);
              } catch (error) {
                  console.log(error);
              }
          }
          
      },
      components: { Form, Field, ErrorMessage }
  };
  </script>
<!-- <script>
  import axios from 'axios'
  export default {
    data: () => ({
      email: "",
      password: "",
      error: "",
    }),
    methods: {
      async login() {
        try {
          await this.loginVue({
            email: this.email,
            password: this.password,
          });
          this.$router.push("/");
        } catch (error) {
          this.error = error;
        }
      },
      async loginVue({ email, password }) {
            console.log(email, password);
            try {
                // Sign in here
                const res = await axios.post("/api/authenticate", { email: email, password: password })
                this.user = res.data["user"]

                return Promise.resolve("Success")
            } catch (error) {
                console.log(error);
                return Promise.reject(error)
            }
        },
    },
  }; 
</script> -->