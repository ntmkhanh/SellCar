const knex = require('../database/knex.js')

class BookService {
    constructor() {
        this.books = knex('book');
    }#getBook(payload) {
        const book = {...payload };
        const bookProperties = [
            "book_id", "user_id", "car_id", "itemcar_quantity"
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
    async findById(id) {
        return await this.books.where('book_id', id).select('*').first();
    }
    async delete(id) {
        return await this.books.where('book_id', id).del();
    }
    async deleteAll() {
        return await this.books.del();
    }
    async getIDcar(id) {
        return await this.book
            .select('car.car_id', 'car_name')
            .join('car', 'car.car_id', 'posts.user_id')
            .leftJoin('likes', 'posts.post_id', 'likes.post_id')
            .count('likes.post_id', { as: 'numLike' }).groupBy('posts.post_id')
            .where('posts.post_id', id).first();
    }
};

module.exports = BookService;