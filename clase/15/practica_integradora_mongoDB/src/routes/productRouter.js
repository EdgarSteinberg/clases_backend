import { Router } from 'express';
import productManagerDB from '../dao/productManagerDB.js';
import { uploader } from '../multer.js';

const ProductManagerDB = new productManagerDB()
const router = Router();

router.get('/', async (req, res) => {
    const result = await ProductManagerDB.getAllProducts();
    res.send({ status: 'succes', payload: result });
})

router.get('/:pid', async (req, res) => {
    const { pid } = req.params;

    try {
        const result = await ProductManagerDB.getProductById(pid);
        res.send({ status: 'success', payload: result });
    } catch (error) {
        res.status(400).send({ status: 'error', message: error.message });
    }
});

router.post('/', uploader.array("thumbnails", 3), async (req, res) => {
    if (req.files) {
        req.body.thumbnails = [];
        req.files.forEach(file => {
            req.body.thumbnails.push(file.filename);
        });
    }


    try {
        const { title, description, code, price, stock, category } = req.body;

        const result = await ProductManagerDB.createProduct({ title, description, code, price, stock, category });
        res.send({ status: 'success', payload: result });
    } catch (error) {
        res.status(400).send({ status: 'error', message: error.message });
    }
});


router.put('/:pid', uploader.array('thumbnails', 3), async (req, res) => {
    const { pid } = req.params;

    try {
        const { title, description, code, price, stock, category, thumbnails } = req.body;

        const result = await ProductManagerDB.updateProduct(pid, { title, description, code, price, stock, category, thumbnails })
        res.status(200).send({ status: 'success', payload: result });
    } catch (error) {
        res.status(500).send({ status: error, error: 'Error al actualizar el producto' });
    }
});

router.delete('/:pid', async (req, res) => {
    const { pid } = req.params;
    try {
        const result = await ProductManagerDB.deleteProduct(pid);
        res.send({ status: 'success', payload: result });
    } catch (error) {
        res.status(500).send({ status: 'success', message: error.message })
    }
});


export default router;