import UserController from "./user_controller.js";

class ToyController {
    static toys = [];

    constructor() {
        this.userController = new UserController();
    }

    async getAllToys() {
        return ToyController.toys;
    }

    async getToyById(tid) {
        const toy = ToyController.toys.filter(toy => toy.id == tid);

        if (toy.length === 0) throw new Error("Juguete no encontrado!")

        return toy
    };

    async createToy(toy) {
        const { name, description, creaton_user } = toy;

        if (!name || !description || !creaton_user) {
            throw new Error(`Debes completar todos los campos`)
        }


        try {
            await this.userController.getUserById(creaton_user);
        } catch (e) {
            console.log(e.message)
            throw e;
        }

        const newToy = {
            id: this.getId(),
            name,
            description,
            creaton_user
        }

        ToyController.toys.push(newToy);

        return newToy;
    }


    getId() {
        if (ToyController.toys.length > 0) {
            return ToyController.toys[ToyController.toys.length - 1].id + 1;
        }
        return 1
    }
}

export default ToyController;