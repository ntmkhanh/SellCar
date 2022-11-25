<template>
  <div class="w-4/12 mx-auto p-16 border mt-12 shadow-md">
    <h1 class="text-2xl font-bold text-gray-800 text-center">Sign Up</h1>
    <form class="flex flex-col justify-center mt-8" @submit.prevent="signup">
      <div class="flex flex-col mt-2">
        <label class="block text-sm font-medium text-gray-700"> Name </label>
        <input class="
              mt-1
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              shadow-sm
              sm:text-sm
              border-gray-300
              rounded-md
            " placeholder="Name..." type="text" v-model="name" />
      </div>
      <div class="flex flex-col mt-2">
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
            " placeholder="Email..." type="text" v-model="email" />
      </div>
      <div class="flex flex-col mt-2">
        <label class="block text-sm font-medium text-gray-700"> Phone </label>
        <input class="
              mt-1
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              shadow-sm
              sm:text-sm
              border-gray-300
              rounded-md
            " placeholder="Phone..." type="text" v-model="phone" />
      </div>
      <div class="flex flex-col mt-2">
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
            " placeholder="Pass..." type="password" v-model="password" />
      </div>
      <div class="flex flex-col mt-2">
        <label class="block text-sm font-medium text-gray-700"> Birth </label>
        <input class="
              mt-1
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              shadow-sm
              sm:text-sm
              border-gray-300
              rounded-md
            " placeholder="Birth..." type="text" v-model="birth" />
      </div>
      <div class="flex flex-col mt-2">
        <label class="block text-sm font-medium text-gray-700"> Gender </label>
        <input class="
              mt-1
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              shadow-sm
              sm:text-sm
              border-gray-300
              rounded-md
            " placeholder="Gender..." type="text" v-model="gender" />
      </div>
      <!-- eslint-disable -->
      <button class="bg-indigo-600 py-3 px-8 mx-auto rounded-md text-white font-black text-sm my-4">
        Sign Up
      </button>
    </form>
    <div v-if="error" class="text-red-600">{{ error.message }}</div>
  </div>
</template>

<script>
 import * as yup from 'yup';
import { carService } from '@/services/car.service';
export default {
  data() {
    const formSchema = yup.object().shape({
      name: yup
        .string()
        .required('Tên tài khoản không thể bỏ trống.')
        .min(2, "Tên không thể ít hơn 2 kí tự")
        .max(50, "Tên không thể quá 50 kí tự"),
      email: yup
        .string()
        .required('Email phải nhập')
        .min(2, "Email không thể ít hơn 2 kí tự")
        .max(50, "Email không thể quá 50 kí tự"),
      phone: yup
        .string()
        .required('Số điện thoại không thể bỏ trống'),
      password: yup
        .string()
        .required('Mật khẩu không thể bỏ trống'),
      birth: yup
        .string()
        .required('Không được rỗng'),
      gender: yup
        .string()
        .required('Không được rỗng'),
    });

    return {
      name: "",
      email: "",
      phone: "",
      password: "",
      birth: "",
      gender:"",
      error: "",
    };
  },

  methods: {
    async register() {
            try {
                await carService.signUp({
                  user_name: this.name,
                  user_email: this.email,
                  user_phone: this.phone,
                  user_password: this.password,
                  user_birth: this.birth,
                  user_gender: this.password
                });
                this.message = 'Tài khoản được thêm thành công.';
            } catch (error) {
                console.log(error);
            }
        },
  },
};
</script>