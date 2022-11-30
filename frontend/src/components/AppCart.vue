<script>
import {carService} from '@/services/car.service'
import { useAuthStore } from '@/store/auth';
import { mapState } from 'pinia';
export default { 
    data(){
        return {
            bookLocal: { ...this.book},
            book: null,
        };
    },
    created() {
        //this.getBook(this.bookId);
    },
    computed: {
        ...mapState(useAuthStore, ["userAuth"]),
        isAuth() {
            return useAuthStore().userAuth != null;
        },
    },
    props: { 
        books: { type: Array, default: () => [] }, 
        activeIndex: { type: Number, default: -1 },
        bookId: { type: Number, required: true},
        user_email: {type: String, required: true},
    },
    emits: ['update:activeIndex'], 
    methods: { 
        updateActiveIndex(index) { 
            this.$emit('update:activeIndex', index); 
        }, 
        async DeleteBook(id) {
            try {
                await carService.deletebook(id);
                this.$toast.success('Delete Sucessful!');
                
                this.$router.push(`/shopcart/${this.user_email}`);
            } catch (error) {
                console.log(error);
            }
        },
    }, 
};
</script>

<template> 
        <table>
            <tr>
                <th>Email</th>

                <th>No. Cart</th>

                <th>Car ID</th>

                <th>Quantity</th>

                <th>Customer name</th>

                <th>Phone</th>
            </tr>
            <tr class="list-group-item"
                v-for="(book, index) in books" 
                :key="book.user_email" 
                :class="{ active: index === activeIndex }" 
            >
                    <td>{{ book.user_email}}</td>
                    <td>{{ book.book_id }}</td>
                    <td>{{ book.car_id }}</td>
                    <td>{{ book.itemcar_quantity}}</td>
                    <td>{{ book.cus_name }}</td>
                    <td>{{ book.cus_phone }}</td>
                    <button class="btn"
                        v-on:click="DeleteBook(book.book_id)"

                        >Delete
                    </button>
            </tr>
            
        </table>

</template>
<style scoped>

</style>