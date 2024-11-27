import fs from 'fs';

class cartManagerFS {

    constructor(file, productFSService) {
        this.file = file;
        this.productFSService = productFSService;
    }


    async getAllCarts() {
        try {
            const carts = await fs.promises.readFile(this.file, "utf-8");
            return JSON.parse(carts);
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async getCartById(cid) {
        const cart = await this.getAllCarts();

        const cartFilter = cart.filter(cart => cart.id == cid);

        if (cartFilter.length > 0) {
            return cartFilter[0];
        }

        throw new Error(`El carrito con ID: ${cid} no existe!`);
    }

    async createCart() {
        const cart = await this.getAllCarts();

        const newCart = {
            id: await this.getCartId(),
            products: []
        }

        cart.push(newCart);

        try {
            await fs.promises.writeFile(this.file, JSON.stringify(cart, null, "\t"));
            return "Carrito creado correctamente"
        } catch (error) {
            console.log("Error al crear el carrito");
        }
    }

    async getCartId() {
        const cart = await this.getAllCarts();

        if (cart.length > 0) {
            return cart[cart.length - 1].id + 1
        }
        return 1
    }

    async addProductById(cid, pid) {
        await this.productFSService.getProductById(pid);
   
        const carts = await this.getAllCarts();

        let i = 0;
        const cartFilter = carts.filter((cart, index) => {
            if (cart.id == cid) {
                i = index;
                return cart.id == cid
            }
        });

        console.log(`Index: ${i} cid: ${cid}`);

        if (cartFilter.length > 0) {
            let exist = false;
            for (let key in carts[i].products) {
                if (carts[i].products[key].products == pid) {
                    exist = true;
                    carts[i].products[key].quantity++;
                }
            }

            if (!exist) {
                carts[i].products.push({
                    product: pid,
                    quantity: 1
                })
            }

        } else {
            throw new Error(`El carrito con ID ${cid} no existe!`);
        }

        try {
            await fs.promises.writeFile(this.file, JSON.stringify(carts, null, "\t"));
            return carts[i]

        } catch (error) {
            throw new Error(`Error al actualizar el carrito`)
        }


    };
}

export default cartManagerFS;