const knex = require('../database/knex.js');

class CarService {
    constructor() {
        this.cars = knex('car');
    }
    #getCar(payload) {
            const car = {...payload };
            const carProperties = ["car_id", "car_name", "car_price", "car_type", "car_src"];
            //Remove non-car properties
            Object.keys(car).forEach(function(key) {
                if (carProperties.indexOf(key) == -1) {
                    delete car[key];
                }
            });
            return car;
        }
        //insert Car
    async insertCar(payload) {
        const car = this.#getCar(payload);
        const [id] = await this.cars.insert(car);
        return { id, ...car };
    }
    async all() {
        return await this.cars.select('*');
    }
    async findByName(name) {
        return await this.cars
            .where('car_name', 'like', `%${name}%`)
            .select('*');
    }
    async findById(id) {
        return await this.cars.where('car_id', id).select('*').first();
    }
}

module.exports = CarService;