const BookService = require('../services/book.service')

// Create and Save a new Book
exports.createBook = async(req, res, next) => {
    if(!req.body?.name){
        //return next(new ApiError(400, 'Name can not be empty'));
    }
    try {
        const bookService = new BookService();
        const book = await bookService.insertBook(req.body);
        return res.send(book);
    } catch (error){
        console.log(error);
        return next(
            //new ApiError(500, 'An error occurred while creating the contact')
        );
    }
};
