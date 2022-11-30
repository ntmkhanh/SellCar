const knex = require('../database/knex.js')

class BookService {
    constructor() {
        this.books = knex('book');
        this.cars = knex('car');
        this.users = knex('user')
    }#getBook(payload) {
        const book = {...payload };
        const bookProperties = [
            "user_email", "car_id", "itemcar_quantity", "cus_name", "cus_phone"
        ];
        //Remove non-book properties
        Object.keys(book).forEach(function(key) {
            if (bookProperties.indexOf(key) == -1) {
                delete book[key];
            }
        });
        return book;
    }
    async insertBook(payload) {
        const book = this.#getBook(payload);
        const [id] = await this.books.insert(book);
        return { id, ...book };
    }

    async all() {
        return await this.books.select('*');
    }

    async getAllbyEmail(email) {
        return await this.books
            .select('*')
            //.join('car', 'book.car_id','car.car_id')
            .where('user_email', email);
    }

    async delete(id) {
        await this.books.where('book_id', id).del();
        return await this.books
            .where('book_id', id).del();
    }

    async findByEmail(email) {
        return await this.books.where('user_email', email).select('*');
    }

};

module.exports = BookService;