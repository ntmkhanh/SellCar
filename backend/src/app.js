const express = require('express')
const cors = require('cors')
const userController = require('../src/controllers/user.controller');
const CarController = require('../src/controllers/car.controller');


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
    .post(CarController.createCar)
module.exports = app;


