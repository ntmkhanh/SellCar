const CarService = require("../services/car.service");

// Create and Save a new Car
exports.createCar = async(req, res, next) => {
    if(!req.body?.name){
        //return next(new ApiError(400, 'Name can not be empty'));
    }
    try {
        const carService = new CarService();
        const car = await carService.insertCar(req.body);
        return res.send(car);
    } catch (error){
        console.log(error);
        return next(
            //new ApiError(500, 'An error occurred while creating the contact')
        );
    }
};
// Retrieve all car of a user from the database
exports.findAll = async (req, res, next) => {
    let cars = []

    try {
        const carService = new CarService()
        const { name } = req.query
        if (name) {
            cars = await carService.findByName(name)
        } else {
            cars = await carService.all()
        }

    } catch(error) {
        console.log(error)
        return next(
            //new ApiError(500, 'An error occurred while retrieving contacts')
        )
    }

    return res.send(cars)
};
//find a singla contact with an id
exports.findOne = async (req, res, next) => {
    try {
        const carService = new CarService()
        const car = await carService.findById(req.params.id)
        if (!car) {
            //return next(new ApiError(404, 'Contact not found'))
        }
        return res.send(car)
    } catch(error) {
        console.log(error)
        return next(
            // new ApiError(
            //     500,
            //     `Error retrieving contact with id=${req.params.id}`
           // )
        );
    }
};
//update a contact by the id in the request
exports.update = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        //return next(new ApiError(400, 'Data to update can not be empty'))
    }

    try {
        const carService = new CarService()
        const updated = await carService.update(req.params.id, req.body)
        if (!updated) {
            //return next(new ApiError(404, 'Contact not found'))
        }
        return res.send({ message: 'Contact was updated successfully' })
    } catch(error) {
        console.log(error)
        return next(
           // new ApiError(500, `Error updating contact with id=${req.params.id}`)
        );
    }
};
//Delete a contact with the specified id in the request
exports.delete = async (req, res, next) => {
    try{
        const carService = new CarService();
        const deleted = await carService.delete(req.params.id);
        if(!this.delete){
            //return next(new ApiError(404, 'Contact not found'));
        }
        return res.send({message: 'Contact was deleted successfully'});
    } catch (error){
        console.log(error);
        return next(
            // new ApiError(
            //     500,
            //     `Could not delete contact with id=${req.params.id}`
            // )
        );
    }
};
//Find all favorite contacts of a user
exports.findAllFavorite = async (req, res, next) => {
    try {
        const carService = new CarService();
        const cars = await carService.allFavorite();
        return res.send(cars);
    } catch(error) {
        console.log(error);
        return next(
            // new ApiError(
            // 500,
            // 'An error occurred while retrieving favorite contacts'
            // )
        )
    }
};
exports.deleteAll = async (req, res, next) => {
    try {
        const carService = new CarService()
        const deleted = await carService.deleteAll()
        return res.send({
            message: `${deleted} contacts were deleted successfully`
        })
    } catch(error) {
        console.log(error)
        return next(
            //new ApiError(500, 'An error occurred while removing all contacts')
        )
    }
};