import cartModel from "./models/cartModel.js";

class cartManagerDB {

    async getAllCarts() {
        try {
            return await cartModel.find().lean();
        } catch (error) {
            console.log(error);
            throw new Error(`Error al obtener los carritos`);
        }
    }

    async getCartById(cid) {
        const cart = await cartModel.findOne({ _id: cid })

        if (!cart) {
            throw new Error(`El carrito con ID: ${cid} no existe!`);
        }

        return cart;
    }

    async createCart() {
        try{
            const result = await cartModel.create({});
            return result;
        }catch(error){
            console.log(error);
            throw new Error(`Error al crear el carrito`)
        }
    };

    async addProductById(cid, pid) {
        
    };
}

export default cartManagerDB;