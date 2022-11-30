<script>
import {carService} from '@/services/car.service'
import { useAuthStore } from '@/store/auth';
import { mapState } from 'pinia';
export default { 
    data(){
        return {
            bookLocal: { ...this.books},
            books: [],
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
        /*carsAsStrings() {
            return this.books.map((book) => {
                const { car_name } = book;
                return [car_name.toLowerCase()].join('');
            });
        },*/
        // Return posts filtered by the search box.
        filteredCars() {
            if (!this.searchText) return this.books;
            return this.books.filter((book, index) =>
                this.carsAsStrings[index].includes(this.searchText.toLowerCase())
            );
        },

        filteredCarsCount() {
            return this.filteredCars.length;
        },
    },
    props: {
        email: { type: String, required: true},
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
                this.refreshList();
            } catch (error) {
                console.log(error);
            }
        },
        async retrieveBooks() {
            try {
                /*
                const postsList = await blogService.getManyPost();
                this.posts = postsList.sort((current, next) =>
                    current.post_title.localeCompare(next.post_title)
                );
                */
                this.books = await carService.seecart(this.email);
                this.user_email = this.email;
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveBooks();
        },
    },
    mounted() {
        this.refreshList();
    },
};
</script>

<template> 
        <div class="car-section">
            <div class="heading">
                <span>Cart</span>
            </div>
        </div>
        <table>
            <tr>
                <th>Email </th>

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
                    <td>{{book.user_email}}</td>
                    <td>{{ book.book_id }}</td>
                    <td>{{ book.car_id }}</td>
                    <td>{{ book.itemcar_quantity}}</td>
                    <td>{{ book.cus_name }}</td>
                    <td>{{ book.cus_phone }}</td>
                    <button 
                        class="btn"
                        v-on:click="DeleteBook(book.book_id)"

                        >Delete
                    </button>
            </tr>
            
        </table>

</template>
<style scoped>
.heading {
    text-align: center;
}
.heading span {
    font-family: 'Satisfy', cursive;
    font-size: 3rem;
    color: #27ae60;
}
table, th, td{
    border:1px solid #868585;
}
table, tr{
    height: 30px;
}
table{
    text-align: center;
    border-collapse: collapse;
    margin: 1 auto;
    width: 100%;

}
table tr:nth-child(odd){
    background-color:#eee;
}
table tr:nth-child(even){
    background-color:white;
}
table tr:nth-child(1){
    background-color:skyblue;
}

.btn {
  background-color: white; 
  color: black; 
  border: 2px solid #f44336;
  border-radius: 50%;
  margin-bottom: 0px;
}

.btn:hover {
  background-color: #f44336;
  color: white;
}
</style>