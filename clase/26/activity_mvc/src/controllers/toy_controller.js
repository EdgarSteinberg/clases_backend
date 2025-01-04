import ToyService from "../services/toyService.js";

class ToyController {

    constructor() {
        this.toyService = new ToyService();
    }

    async getAllToys() {
        return await this.toyService.getAll();
    }

    async getToyById(tid) {
        const toy = await this.toyService.getById(tid)

        if(!tid) throw new Error(`El toy no existe`);

        return toy;
    };

    async createToy(toy) {
        const { name, description, creator_user } = toy;

        if (!name || !description || !creator_user) {
            throw new Error(`Debes completar todos los campos`)
        }

        try {
            const newToy = await this.toyService.create( { name, description, creator_user } );
            return newToy;
        } catch (error) {
            console.log(`Error al crear el juguete`,error);
            throw new Error(`No se pudo crear el juguete. Detalles: ${error.message}`);
        }


        return newToy;
    }

}

export default ToyController;