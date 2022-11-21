const UserService = require('../services/user.service');


exports.createAccount = async(req, res, next) => {
    if(!req.body?.user_name){
        //return next(new ApiError(400, 'Name can not be empty'));
    }
    try {
        const userService = new UserService();
        const user = await userService.insertUser(req.body);
        return res.send(user);
    } catch (error){
        console.log(error);
        return next(
            //new ApiError(500, 'An error occurred while creating the contact')
        );
    }
};
exports.findAll = async (req, res, next) => {
    let users = []

    try {
        const userService = new UserService()
        const { name } = req.query
        if (name) {
            users = await userService.findByName(name)
        } else {
            users = await userService.all()
        }

    } catch(error) {
        console.log(error)
        return next(
            //new ApiError(500, 'An error occurred while retrieving contacts')
        )
    }

    return res.send(users)
};
//find a singla contact with an id
exports.findOne = async (req, res, next) => {
    try {
        const userService = new UserService()
        const user = await userService.findById(req.params.id)
        if (!user) {
            //return next(new ApiError(404, 'Contact not found'))
        }
        return res.send(user)
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