const express = require('express')
const cors = require('cors')
const ApiError = require('./api-error');
const userController = require('../src/controllers/user.controller');
const carController = require('../src/controllers/car.controller');
const bookController = require('../src/controllers/book.controller');
const adminController = require('../src/controllers/admin.controller');

const app = express();

app.use('/img', express.static('img'));

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to SellCar application.' })
})

// app.use((req, res, next) => {
//     return next(new ApiError(404, 'Resource not found'));
// });


app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || 'Internal Server Error',
    });
});
app.route('/api/admins')
    .post(adminController.createAccount)

app.route('/api/adminLogin')
    .post(adminController.signIn)

app.route('/api/users')
    .post(userController.createAccount)
    .get(userController.findAll)

app.route('/api/userLogin')
    .post(userController.signIn);

// app.route('/api/users/:id')
//     .get(userController.findOne)

app.route('/api/cars')
    .get(carController.findAll)

app.route('/api/cars/:id')
    .get(carController.findOne)

app.route('/api/books')
    .post(bookController.createBook)
app.route('/api/books/:id')
    .delete(bookController.delete)

app.route('/api/cart/:email')
    .get(bookController.seeCartUser)

app.route('/api/books/:id')
    .delete(bookController.delete)
    // .delete(bookController.delete)


module.exports = app;