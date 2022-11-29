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
                <th>No. Cart    </th>

                <th>Email    </th>

                <th>Car ID    </th>

                <th>Quantity    </th>

                <th>Customer name    </th>

                <th>Phone    </th>
            </tr>
            <tr class="list-group-item"
                v-for="(book, index) in books" 
                :key="book.user_email" 
                :class="{ active: index === activeIndex }" 
            >
                    <td>{{ book.book_id }}    </td>
                    <td>{{ book.user_name }}   </td>
                    <td>{{ book.car_id }}    </td>
                    <td>{{ book.car_quantity}}    </td>
                    <td>{{ book.cus_name }}    </td>
                    <td>{{ book.cus_phone }}    </td>
                    <td><button>Delete</button>    </td>
            </tr>
            
        </table>

</template>
<style>
tr{
    padding-right: 15px;
}
</style>