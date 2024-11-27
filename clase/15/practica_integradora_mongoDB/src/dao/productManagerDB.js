import productModel from "./models/productModel.js";


class productManagerDB {

    async getAllProducts() {
        try {
            return await productModel.find().lean();
        } catch (error) {
            console.log(error);
            throw new Error(`Error al obtener los productos`);
        }
    };

    async getProductById(pid) {

        const product = await productModel.findOne({ _id: pid });

        if (!product) {
            throw new Error(`Error el ID: ${pid} no existe!`);
        }

        return product;
    };

    async createProduct(product) {
        const { title, description, code, price, stock, category, thumbnails } = product;

        if (!title || !description || !code || !price || !stock || !category) {
            throw new Error(`Debes completar todos los campos!`);
        }

        try {
            const result = await productModel.create({ title, description, code, price, stock, category, thumbnails: thumbnails ?? [] });
            return result;
        } catch (error) {
            console.log(error);
            throw new Error(`Error al crear el producto`);
        }
    };


    async updateProduct(pid, productUpdate){
        try{
            const result = await productModel.updateOne({_id: pid}, productUpdate);
            return result;
        }catch (error) {
            console.log(error);
            throw new Error(`Error al actualizar el producto`);
        }
    };


    async deleteProduct(pid){
        try{
            const result = await productModel.deleteOne({_id: pid});
            return result;
        }catch (error) {
            console.log(error);
            throw new Error(`Error al eliminar el producto con ID : ${pid}`);
        }
    }
}

export default productManagerDB;