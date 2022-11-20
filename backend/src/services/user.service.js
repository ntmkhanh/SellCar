const knex = require('../database/knex.js');

class UserService {
    constructor() {
        this.users = knex('user');
    }
    #getUser(payload) {
        const user = { ...payload };
        const userProperties = [
            "user_name", "user_email", "user_phone", "user_password", "user_birth", "user_gender"
        ];
        //Remove non-contact properties
        Object.keys(user).forEach(function (key) {
            if (userProperties.indexOf(key) == -1) {
                delete user[key];
            }
        });
        return user;
    }
    // insert User
    async insertUser(payload){
        const user = this.#getUser(payload);
        const [id] = await this.users.insert(user);
        return{id, ...user};
    }
    /*
    exports.insertUser = (data, result) => {
        db.query("INSERT INTO user SET ?", data, (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results[0]);
            }
        });
    };*/
}
module.exports = UserService;

