import ProductManager from "./models/dao/productManager.js";
const ProductService = new ProductManager('productos.json');


export default (io) => {
    io.on("connection", (socket) => {

        socket.on("createProduct", async (data) => {
            console.log("Recibido nuevo producto: ", data);
            try{
                await ProductService.createProduct(data);
                const products = await ProductService.getAllProducts();
                console.log("getall", products)
                socket.emit("publishProducts", products)
            }catch(error){
                socket.emit("statusError", error.message)
            }
        });


        socket.on("deleteProduct", async (data) => {

            try{
                const result = await ProductService.deleteProduct(data.pid);
                socket.emit("publishProducts", result)
            }catch(error){
                socket.emit("statusError", error.message)
            }
        });


    });
}