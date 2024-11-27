import fs from 'fs';


class productFSService {

    constructor(file) {
        this.file = file
    }

    async getAllProducts() {
        try {
            const products = await fs.promises.readFile(this.file, "utf-8");
            return JSON.parse(products);
        } catch (error) {
            console.log(error.message);
            return [];
        }
    }

    async getProductById(pid) {
        const products = await this.getAllProducts();
        const product = products.find(product => product.id == pid); 
        if (product) {
            return product; // Si existe, lo devuelve
        }
        throw new Error(`El producto con ID:${pid} no existe!`);
    }

    async createProduct(product){
        const {title,description, code, price, stock, category, thumbnails} = product;

        if(!title || !description || !code || !price || !stock || !category ){
            throw new Error("Debes completar todos los campos!")
        }

        const products = await this.getAllProducts();
        
        const newProduc = {
            id :await this.getProductId(),
            title,
            description,
            code,
            price,
            stock,
            category,
            thumbnails: thumbnails || [], // Default a un array vacío si no se pasa
        }
        products.push(newProduc);
        try{
            await fs.promises.writeFile(this.file, JSON.stringify(products, null, "\t"));
            return "Producto creado correctamente";
        }catch(error){
            console.log("Error al crear el producto", error.message);
            throw error;
        }
     }

    async getProductId(){
        const products = await this.getAllProducts();

        if(products.length > 0){
            return products[products.length -1].id + 1
        }
        return 1
    }

    async updateProduct(pid, productUpdate) {
        const {title,description, code, price, stock, category, thumbnails} = productUpdate;
        const products = await this.getAllProducts();
        
        let i = 0;
        const productFilter = products.filter((product, index) => {
           i = index
           return product.id == pid
        });

        if(productFilter.length > 0) {
            products[i].title = title ? title : products[i].title;
            products[i].description = description ? description : products[i].description;
            products[i].code = code ? code : products[i].code;
            products[i].price = price ? price : products[i].price;
            products[i].stock = stock ? stock : products[i].stock;
            products[i].category = category ? category : products[i].category;
            products[i].thumbnails = thumbnails ? thumbnails : products[i].thumbnails;
        } else {
            throw new Error(`El producto con ID: ${pid} no existe!`);
        }
        try{
            await fs.promises.writeFile(this.file, JSON.stringify(products, null, "\t"));

            return products[i];
        }catch(error){
            throw new Error(`Error al actualizar el producto`, error)
        }
       
    }
    
    async deleteProduct(pid) {
        const products = await this.getAllProducts();

        // Filtrar los productos para eliminar el que tiene el id igual a pid
        const productFilter = products.filter(product => product.id != pid);

        if (products.length === productFilter.length) {
            throw new Error(`Error al eliminar el producto ${pid}`)
        }

        try {
            await fs.promises.writeFile(this.file, JSON.stringify(productFilter, null, '\t'));
            return productFilter;
        } catch (error) {
            throw new Error(`Error al eliminar el producto ${pid}`);
        }
    }
    
}

export default productFSService;