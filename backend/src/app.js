const express = require('express')
const cors = require('cors')
const userController = require('../src/controllers/user.controller');
const carController = require('../src/controllers/car.controller');
const bookController = require('../src/controllers/book.controller')

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to SellCar application.'})
})

app.route('/api/users')
    .post(userController.createAccount)
    .get(userController.findAll)

app.route('/api/users/:id')
    .get(userController.findOne)
    
app.route('/api/cars')
    .post(carController.createCar)

app.route('/api/books')
    .post(bookController.createBook)

module.exports = app;


