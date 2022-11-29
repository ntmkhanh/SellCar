<script> 
export default { 
    props: { 
        books: { type: Array, default: () => [] }, 
        activeIndex: { type: Number, default: -1 }, 
    },
    emits: ['update:activeIndex'], 
    methods: { 
        updateActiveIndex(index) { 
            this.$emit('update:activeIndex', index); 
        }, 
    }, 
};
</script>

<template> 
        <table>
            <tr>
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
                    <td>{{ book.book_id }}</td>
                    <td>{{ book.car_id }}</td>
                    <td>{{ book.itemcar_quantity}}</td>
                    <td>{{ book.cus_name }}</td>
                    <td>{{ book.cus_phone }}</td>
                    <button class="btn">Delete</button>
            </tr>
            
        </table>

</template>
<style scoped>

table, th, td{
    border:1px solid #868585;
}
table{
    text-align: center;
    border-collapse:collapse;
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
</style>