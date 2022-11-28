const AdminService = require('../services/admin.service');
const ApiError = require('../api-error');

exports.signIn = (req, res) => {
    return res.send({ message: 'signIn admin handler' });
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
        const adminService = new AdminService();
        const admin = await adminService.signIn(req.body.email, req.body.password);
        return res.send(admin);
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, ' An error occured while login the Admin')
        );
    }
};
exports.createAccount = async(req, res, next) => {
    if (!req.body?.admin_name) {
        return next(new ApiError(400, 'Name can not be empty'));
    }
    try {
        const adminService = new AdminService();
        const admin = await adminService.insertAdmin(req.body);
        return res.send(admin);
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, 'An error occurred while creating the Admin')
        );
    }
};