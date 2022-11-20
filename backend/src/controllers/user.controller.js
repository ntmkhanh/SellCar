const UserService = require('../services/user.service');

// create user
/*
exports.createAccount=(req,res)=>{
    const data = req.body;
    insertUser(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};*/
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