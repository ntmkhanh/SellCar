const express = require('express')
const cors = require('cors')
const userController = require('../src/controllers/user.controller')

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to SellCar application.'})
})

app.route('/api/users')
    .post(userController.createAccount)


module.exports = app;


