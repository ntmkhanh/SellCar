const UserService = require('../services/user.service');
const ApiError = require('../api-error');

/*exports.signUp = (req, res) => {
    return res.send({ message: 'signUp user handler' });
};*/
exports.signIn = (req, res) => {
    return res.send({ message: 'signIn user handler' });
};

exports.signIn = async(req, res, next) => {
    if (!req.body?.email) {
        return next(new ApiError(400, 'Email can not be empty'));
    }
    if (!req.body?.password) {
        return next(new ApiError(400, 'Password can not be empty'));
    }
    /*if (!req.body?.name) {
        return next(new ApiError(400, 'Password can not be empty'));
    }*/
    try {
        const userService = new UserService();
        const user = await userService.signIn(req.body.email, req.body.password);
        return res.send(user);
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, ' An error occured while login the User')
        );
    }
};

exports.createAccount = async(req, res, next) => {
    if (!req.body?.user_name) {
        return next(new ApiError(400, 'Name can not be empty'));
    }
    try {
        const userService = new UserService();
        const user = await userService.insertUser(req.body);
        return res.send(user);
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, 'An error occurred while creating the User')
        );
    }
};
exports.findAll = async(req, res, next) => {
    let users = []

    try {
        const userService = new UserService()
        const { name } = req.query
        if (name) {
            users = await userService.findByName(name)
        } else {
            users = await userService.all()
        }

    } catch (error) {
        console.log(error)
        return next(
            new ApiError(500, 'An error occurred while retrieving User')
        )
    }

    return res.send(users)
};
//find a singla contact with an id
// exports.findOne = async(req, res, next) => {
//     try {
//         const userService = new UserService()
//         const user = await userService.findById(req.params.id)
//         if (!user) {
//             return next(new ApiError(404, 'Contact not found'))
//         }
//         return res.send(user)
//     } catch (error) {
//         console.log(error)
//         return next(
//             new ApiError(
//                 500,
//                 `Error retrieving contact with id=${req.params.id}`
//             )
//         );
//     }
// };