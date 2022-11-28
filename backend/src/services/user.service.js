const knex = require('../database/knex.js');

class UserService {
    constructor() {
        this.users = knex('user');
    }#getUser(payload) {
            const user = {...payload };
            const userProperties = [
                "user_id", "user_name", "user_email", "user_phone", "user_password", "user_birth", "user_gender"
            ];
            //Remove non-user properties
            Object.keys(user).forEach(function(key) {
                if (userProperties.indexOf(key) == -1) {
                    delete user[key];
                }
            });
            return user;
        }
        // insert User
    async insertUser(payload) {
            const user = this.#getUser(payload);
            const [id] = await this.users.insert(user);
            return { id, ...user };
        }
        //findAll user
    async all() {
        return await this.users.select('*');
    }
    async findByName(name) {
        return await this.users
            .where('user_name', 'like', `%${name}%`)
            .select('*');
    }
    async findById(id) {
        return await this.users.where('user_id', id).select('*').first();
    }
    async signUp(payload) {
        const user = this.#getUser(payload);
        const [user_id] = await this.users.insert(user);
        return { user_id, ...user };
    }
    async signIn(email, password, name) {
        return await this.users
            .select('user_email', 'user_name')
            .where('user_email', `${email}`)
            .andWhere('user_password', `${password}`).first();
    }


}

module.exports = UserService;