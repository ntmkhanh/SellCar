const knex = require("../database/knex")

class AdminService {
    constructor() {
        this.admins = knex('admin');
    }#getAdmin(payload) {
            const admin = {...payload };
            const adminProperties = [
                "admin_id", "admin_name", "admin_email", "admin_password", "admin_phone"
            ];
            //Remove non-admin properties
            Object.keys(admin).forEach(function(key) {
                if (adminProperties.indexOf(key) == -1) {
                    delete admin[key];
                }
            });
            return admin;
        }
        // insert Admin
    async insertAdmin(payload) {
            const admin = this.#getAdmin(payload);
            const [id] = await this.admins.insert(admin);
            return { id, ...admin };
        }

    async signUp(payload) {
        const admin = this.#getAdmin(payload);
        const [admin_id] = await this.admins.insert(admin);
        return { admin_id, ...admin };
    }
    async signIn(email, password, name) {
        return await this.admins
            .select('admin_email', 'admin_name')
            .where('admin_email', `${email}`)
            .andWhere('admin_password', `${password}`).first();
    }
}
module.exports = AdminService;