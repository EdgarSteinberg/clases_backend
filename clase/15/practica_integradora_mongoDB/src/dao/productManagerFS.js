import fs from 'fs';


class productManagerFS {

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
        const products = await this.getAllProducts();
    
        // Convertir pid a número para asegurar consistencia en la comparación
        const productIndex = products.findIndex(product => product.id === Number(pid));
    
        // Validar si el producto existe
        if (productIndex === -1) {
            throw new Error(`El producto con ID: ${pid} no existe`);
        }
    
        // Filtrar propiedades válidas del producto a actualizar
        const validFields = ['title', 'description', 'code', 'price', 'stock', 'category', 'thumbnails'];
        const filteredUpdate = Object.keys(productUpdate)
            .filter(key => validFields.includes(key))
            .reduce((obj, key) => {
                obj[key] = productUpdate[key];
                return obj;
            }, {});
    
        // Obtener el producto existente
        const existingProduct = products[productIndex];
    
        // Crear un nuevo producto con las actualizaciones
        const updatedProduct = {
            ...existingProduct, // Copia las propiedades actuales
            ...filteredUpdate,  // Sobrescribe solo las propiedades proporcionadas
            id: existingProduct.id // Asegurar que el ID no sea modificado
        };
    
        // Reemplazar el producto en el array
        products[productIndex] = updatedProduct;
    
        // Guardar los cambios en el archivo
        try {
            await fs.promises.writeFile(this.file, JSON.stringify(products, null, "\t"));
            return updatedProduct; // Devolver el producto actualizado
        } catch (error) {
            console.error("Error al escribir el archivo de productos:", error.message);
            throw error;
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

export default productManagerFS;