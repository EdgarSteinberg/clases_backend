import {Router} from 'express';
import productFSService from '../services/productFSService.js';

const ProductFSService = new productFSService('productos.json');
const router = Router();

router.get('/', async (req,res) => {
    res.render(
        'index',
        {
            title: "Productos",
            style: "index.css",
            products: await ProductFSService.getAllProducts()
        }
    )
});


router.get('/realTimeProducts', async (req,res) => {
    res.render(
        'realTimeProducts',
        {
            title: "Productos",
            style: "index.css",
            products: await ProductFSService.getAllProducts()
        }
    )
})

export default router;