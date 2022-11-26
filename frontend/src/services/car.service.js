import axios from "axios";
const url =
    import.meta.env.VITE_APP_API_URL;

class CarService {
    constructor() {
        this.baseUrl = `${url}/api/users`;
        this.baseUrlCar = `${url}/api/cars`;
        this.api = axios.create({
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
    }

    async signUp(user) {
        return (await this.api.post(`${url}/api/users`, user)).data;
    }

    async signIn(user) {
        return (await this.api.post(`${url}/api/userLogin`, user)).data;
    }
    async getAllCar() {
        return (await this.api.get(this.baseUrlCar)).data;
    }
    async getCar(id) {
        return (await this.api.get(`${this.baseUrlCar}/${id}`)).data;
    }
}

export const carService = new CarService();