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
    <ul class="list-group"> 
        <li 
            class="list-group-item"
            v-for="(book, index) in books" 
            :key="book.book_id" 
            :class="{ active: index === activeIndex }"  
        > 
        <div class="rounded-lg shadow-lg bg-white max-w-xl my-2 object">
            <table>
                <tr>
                    <td>
                        {{ book.book_id }}
                    </td>
                    <td>
                        {{ book.user_id }}
                    </td>
                    <td>
                        {{ book.car_id }}
                    </td>
                    <td>
                        {{ book.cus_name }}
                    </td>     
                    <td>
                        {{ book.cus_phone }} 
                    </td> 
                    <td>
                        {{ book.car_quantity}}
                    </td>              
                </tr>
            </table>
        </div>
        </li> 
    </ul> 
</template>