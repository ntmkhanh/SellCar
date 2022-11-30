<template> 
    <Form class="container"
        @submit="submitCar" 
        :validation-schema="formSchema" 
    > 
        <div class="form-group">
            <label for="name">Name Customers</label>
            <Field
                name="name" 
                type="text" 
                class="form-control" 
                v-model="name" 
            />
            <ErrorMessage name="name" class="error-feedback" /> 
        </div> 
        <div class="form-group"> 
            <label for="phone">Phone</label> 
            <Field
                name="phone" 
                type="text" 
                class="form-control"
                v-model="phone" 
            />
            <ErrorMessage name="phone" class="error-feedback" /> 
        </div> 
        <!--<div class="form-group"> 
            <label for="discount">Discount</label> 
            <Field
                name="discount" 
                type="text" 
                class="form-control" 
                v-model="contactLocal.discount" 
            />
            <ErrorMessage name="discount" class="error-feedback" />
        </div> -->
        <!--<div class="form-group"> 
            <label for="decs">Decs</label> 
            <Field
                name="decs" 
                type="text" 
                class="form-control" 
                v-model="contactLocal.decs" 
            />
            <ErrorMessage name="decs" class="error-feedback" />
        </div> -->
        <!--<div class="form-group"> 
            <label for="status">Status</label>
            <Field
                name="status" 
                type="text" 
                class="form-control" 
                v-model="contactLocal.status" 
            />
            <ErrorMessage name="status" class="error-feedback" /> 
        </div> -->
        <div class="form-group"> 
            <label for="quantity">Quantity:</label>
            <Field
                name="quantity" 
                type="text" 
                class="form-control" 
                v-model="quantity" 
            />
            <ErrorMessage name="quantity" class="error-feedback" /> 
        </div> 
        <!--<div class="form-group"> 
            <label for="category">Category</label>
            <Field
                name="category" 
                type="text" 
                class="form-control" 
                v-model="contactLocal.category" 
            />
            <ErrorMessage name="category" class="error-feedback" /> 
        </div>-->

        <!--<div class="form-group"> 
            <button class="btn btn-primary">Lưu</button> 
            <button 
                v-if="contactLocal.id" 
                type="button" 
                class="ml-2 btn btn-danger"
                @click="deleteContact" 
            > 
                Xóa 
            </button> 
        </div>-->
        <button class="bg-indigo-600 py-3 px-8 mx-auto rounded-md text-white font-black text-sm my-4" type="submit">
                Seve Info
        </button>
    </Form> 
</template>

<script> 
import * as yup from 'yup'; 
import { Form, Field, ErrorMessage } from 'vee-validate'; 
import {carService} from '@/services/car.service'
import { useAuthStore } from '@/store/auth';
import {  mapState } from 'pinia';
export default { 
    computed: {
        ...mapState(useAuthStore, ["userAuth"]),
        isAuth() {
            return useAuthStore().userAuth != null;
        },
    },
    props: {
        carid: { type: String, required: true},
    },
    data() { 
        const formSchema = yup.object().shape({ 
        name: yup 
            .string() 
            .required('Not empty.'),
        phone: yup 
            .string() 
            .required('Not empty.'),
        quantity: yup 
            .string() 
            .required('Not empty.'),
        });
        return {
            name:"",
            phone:"",
            quantity:"",
            formSchema, 
        }; 
    },
    /*methods: { 
        submitCar() { 
            this.$emit('submit:car', this.cartLocal); 
        },
        deleteCar() { 
            this.$emit('delete:car', this.cartLocal.id);
        }, 
    }, */
    
    methods: {
    async submitCar() {
            try {
                await carService.createbook({
                  user_email: this.userAuth.data.user_email,
                  car_id: this.carid,
                  //car_name: this.namecar,
                  itemcar_quantity: this.quantity,
                  cus_name: this.name,
                  cus_phone: this.phone,
                });
                this.$toast.success('Saved');
            } catch (error) {
                console.log(error);
            }
        },
  },
  components: { Form, Field, ErrorMessage }
};

</script> 

<style scoped> 
    @import '@/assets/form.css'; 
</style>