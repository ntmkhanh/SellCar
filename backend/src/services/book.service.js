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
        const car = this.#getBook(payload);
        const [id] = await this.books.insert(car);
        return { id, ...car };
    }

    async all() {
        return await this.books.select('*');
    }
    async getAllbyEmail(email) {
        return await this.books
            .select('*')
            .where('user_email', email);
    }
    async findById(id) {
        return await this.books.where('book_id', id).select('*').first();
    }
    async delete(id) {
        return await this.books.where('book_id', id).del();
    }
    async deleteAll() {
        return await this.books.del();
    }

        async findByEmail(email) {
            return await this.books.where('user_email', email).select('*');
        }

        // async delete(id) {
        //     return await this.books.where('book_id', id).del();
        // }
        // async deleteAll() {
        //     return await this.books.del();
        // }
        async getIDcar_user() {
            return await this.books
                .select('book.book_id', 'car_id', 'user_id')
                .join('car', 'car.car_id', 'book.book_id')
                .leftJoin('user', 'user.user_id', 'book.user_id')
        }
    };

    module.exports = BookService;