<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-4/12 mx-auto p-16 border mt-12 shadow-md">
    <h1 class="text-2xl font-bold text-gray-800 text-center">Sign Up</h1>
    <Form :validation-schema="formSchema" @submit="register">
      <div class="flex flex-col mt-2">
        <label class="block text-sm font-medium text-gray-700"> Name </label>
        <Field name="name"
              class="
              mt-1
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              shadow-sm
              sm:text-sm
              border-gray-300
              rounded-md
            " placeholder="Name..." type="text" v-model="name" />
          <ErrorMessage name="name" class="text-sm text-red-800" />
      </div>
      <div class="flex flex-col mt-2">
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
            " placeholder="Email..." type="text" v-model="email" />
          <ErrorMessage name="email" class="text-sm text-red-800" />
      </div>
      <div class="flex flex-col mt-2">
        <label class="block text-sm font-medium text-gray-700"> Phone </label>
        <Field name="phone" 
              class="
              mt-1
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              shadow-sm
              sm:text-sm
              border-gray-300
              rounded-md
            " placeholder="Phone..." type="text" v-model="phone" />
        <ErrorMessage name="phone" class="text-sm text-red-800" />
      </div>
      <div class="flex flex-col mt-2">
        <label class="block text-sm font-medium text-gray-700"> Password </label>
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
            " placeholder="Pass..." type="password" v-model="password" />
        <ErrorMessage name="password" class="text-sm text-red-800" />
      </div>
      <div class="flex flex-col mt-2">
        <label class="block text-sm font-medium text-gray-700"> Birth </label>
        <Field name="birth" 
              class="
              mt-1
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              shadow-sm
              sm:text-sm
              border-gray-300
              rounded-md
            " placeholder="Birth day..." type="date" v-model="birth" />
        <ErrorMessage name="birth" class="text-sm text-red-800" />
      </div>
      <div class="flex flex-col mt-2">
        <label class="block text-sm font-medium text-gray-700"> Gender </label>
        <Field name="gender"
              class="
              mt-1
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              shadow-sm
              sm:text-sm
              border-gray-300
              rounded-md
            " placeholder="Gender..." type="text" v-model="gender" />
        <ErrorMessage name="gender" class="text-sm text-red-800" />
      </div>
      <!-- eslint-disable -->
      <button class="bg-indigo-600 py-3 px-8 mx-auto rounded-md text-white font-black text-sm my-4">
        Register
      </button>
      <p>{{message}}</p>
    </Form>
    <div v-if="error" class="text-red-600">{{ error.message }}</div>
  </div>
  
</template>

<script>
import * as yup from 'yup';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { carService } from '@/services/car.service';
export default {
  data() {
    const formSchema = yup.object().shape({
      name: yup
        .string()
        .required('T??n t??i kho???n kh??ng th??? b??? tr???ng.')
        .min(2, "T??n kh??ng th??? ??t h??n 2 k?? t???")
        .max(50, "T??n kh??ng th??? qu?? 50 k?? t???"),
      email: yup
        .string()
        .required('Email ph???i nh???p')
        .min(2, "Email kh??ng th??? ??t h??n 2 k?? t???")
        .max(50, "Email kh??ng th??? qu?? 50 k?? t???"),
      phone: yup
        .string()
        .required('S??? ??i???n tho???i kh??ng th??? b??? tr???ng'),
      password: yup
        .string()
        .required('M???t kh???u kh??ng th??? b??? tr???ng'),
      birth: yup
        .string()
        .required('Kh??ng ???????c r???ng'),
      gender: yup
        .string()
        .required('Kh??ng ???????c r???ng'),
    });

    return {
      name: "",
      email: "",
      phone: "",
      password: "",
      birth: "",
      gender:"",
      error: "",
      formSchema
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
                  user_gender: this.gender
                });
                this.message = 'Create succesfull!.';
            } catch (error) {
                console.log(error);
            }
        },
  },
  components: { Form, Field, ErrorMessage }
};
</script>