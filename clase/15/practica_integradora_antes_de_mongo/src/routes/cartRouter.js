import { Router } from 'express';

import cartFSService from '../services/cartFSService.js';
import productFSService from '../services/productFSService.js';

const ProductFSService = new productFSService('productos.json');
const CartFSSservice = new cartFSService("cart.json", ProductFSService);

const router = Router();

router.get('/', async (req, res) => {
    try {
        const result = await CartFSSservice.getAllCarts();
        res.send({ status: 'success', payload: result });
    } catch (error) {
        res.status(400).send({ status: 'error', messages: error.message });
    }
});


router.get('/:cid', async (req, res) => {
    const { cid } = req.params
    try {
        const result = await CartFSSservice.getCartById(cid);
        res.send({ status: 'success', payload: result });
    } catch (error) {
        res.status(400).send({ status: 'error', messages: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const result = await CartFSSservice.createCart();
        res.send({ status: 'success', payload: result });
    } catch (error) {
        res.status(400).send({ status: 'error', messages: error.message });
    }
});


router.post('/:cid/product/:pid', async (req, res) => {
    const { cid, pid } = req.params;
    try {
        const result = await CartFSSservice.addProductById(cid, pid);
        res.send({ status: 'success', payload: result });
    } catch (error) {
        res.status(400).send({ status: 'error', messages: error.message });
    }
});

export default router;


