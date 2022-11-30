const CarService = require("../services/car.service");
const ApiError = require('../api-error');
// Retrieve all car of a user from the database
exports.findAll = async(req, res, next) => {
    let cars = []

    try {
        const carService = new CarService()
        const { name } = req.query
        if (name) {
            cars = await carService.findByName(name)
        } else {
            cars = await carService.all()
        }

    } catch (error) {
        console.log(error)
        return next(
            new ApiError(500, 'An error occurred while retrieving contacts')
        )
    }

    return res.send(cars)
};
//find a singla contact with an id
exports.findOne = async(req, res, next) => {
    try {
        const carService = new CarService()
        const car = await carService.findById(req.params.id)
        if (!car) {
            return next(new ApiError(404, 'Contact not found'))
        }
        return res.send(car)
    } catch (error) {
        console.log(error)
        return next(
            new ApiError(
                500,
                `Error retrieving contact with id=${req.params.id}`
            )
        );
    }
};