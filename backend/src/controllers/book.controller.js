const BookService = require('../services/book.service')
const ApiError = require('../api-error');
// Create and Save a new Book
exports.createBook = async(req, res, next) => {
    if(!req.body?.name){
        return next(new ApiError(400, 'Name can not be empty'));
    }
    try {
        const bookService = new BookService();
        const book = await bookService.getIDcar_user(req.body);
        return res.send(book);
    } catch (error){
        console.log(error);
        return next(
            new ApiError(500, 'An error occurred while creating the contact')
        );
    }
};
exports.findAll = async (req, res, next) => {
    let books = []

    try {
        const bookService = new BookService()
        const { name } = req.query
        
        books = await bookService.all()
        

    } catch(error) {
        console.log(error)
        return next(
            new ApiError(500, 'An error occurred while retrieving contacts')
        )
    }

    return res.send(books)
};
exports.findOne = async (req, res, next) => {
    try {
        const bookService = new BookService()
        const book = await bookService.findById(req.params.id)
        if (!book) {
            return next(new ApiError(404, 'Contact not found'))
        }
        return res.send(book)
    } catch(error) {
        console.log(error)
        return next(
            new ApiError(
                500,
                `Error retrieving contact with id=${req.params.id}`
            )
        );
    }
};
exports.delete = async (req, res, next) => {
    try{
        const bookService = new BookService();
        const deleted = await bookService.delete(req.params.id);
        if(!this.delete){
            return next(new ApiError(404, 'Contact not found'));
        }
        return res.send({message: 'Contact was deleted successfully'});
    } catch (error){
        console.log(error);
        return next(
            new ApiError(
                500,
                `Could not delete contact with id=${req.params.id}`
            )
        );
    }
};
exports.deleteAll = async (req, res, next) => {
    try {
        const bookService = new BookService()
        const deleted = await bookService.deleteAll()
        return res.send({
            message: `${deleted} contacts were deleted successfully`
        })
    } catch(error) {
        console.log(error)
        return next(
            new ApiError(500, 'An error occurred while removing all contacts')
        )
    }
};

