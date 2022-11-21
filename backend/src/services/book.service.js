const knex = require('../database/knex.js')

class BookService {
    constructor() {
        this.books = knex('book');
    }
    #getBook(payload) {
        const book = { ...payload };
        const bookProperties = [
            "user_id", "car_id", "item_quantity"
        ];
        //Remove non-contact properties
        Object.keys(book).forEach(function (key) {
            if (bookProperties.indexOf(key) == -1) {
                delete book[key];
            }
        });
        return book;
    }   
        async insertBook(payload){
            const book = this.#getBook(payload);
            const [id] = await this.books.insert(book);
            return{id, ...book};
        }
        
    
    };

module.exports = BookService;
