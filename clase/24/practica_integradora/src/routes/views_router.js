import { Router } from 'express';
import ProductManager from '../models/dao/productManager.js';

const productManager = new ProductManager();
const router = Router();


router.get("/", async (req, res) => {
    res.render(
        "index",
        {
            title: "Segunda practica integradora",
            style: "index.css",
            products: await productManager.getAllProducts()
        }
    )
});


router.get("/realTimeProducts", async (req, res) => {
    res.render(
        "realTimeProducts",

        {
            title: "Segunda practica integradora",
            style: "index.css",
            products: await productManager.getAllProducts()
        }

    )
});

export default router;