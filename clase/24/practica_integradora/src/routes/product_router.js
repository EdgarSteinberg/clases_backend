import {Router} from 'express';
import ProductManager from "../models/dao/productManager.js";
import { uploader } from '../utils/multer.js';

const productManager = new ProductManager();

const router = Router();

router.get("/", async (req,res) => {
    try{
        const result = await productManager.getAllProducts();
        res.send({status:"success", payload: result});
    }catch(error){
        res.status(500).send({status:"error", menssage: error.message});
    }
});

router.get("/:pid", async (req,res) => {
    const {pid} = req.params;

    try{
        const result = await productManager.getProductById(pid);
        res.send({status:'success', payload: result});
    }catch(error){
        res.status(500).send({status: "error", message: error.message})
    }
});

router.post('/', uploader.array("thumbnails", 3), async (req, res) => {
    if (req.files) {
        req.body.thumbnails = [];
        req.files.forEach(file => {
            req.body.thumbnails.push(file.filename);
        });
    }

    const { title, description, code, price, stock, category, thumbnails } = req.body;

    try{
        const result = await productManager.createProduct({ title, description, code, price, stock, category, thumbnails });

        res.send({status:"success", payload: result});
    }catch(error){
        res.status(500).send({status: "error", message: error.message});
    }
})


router.put("/:pid", async (req,res) => {
    const {pid} = req.params;
    const {update} = req.body;

    try{
        const result = await productManager.updateProduct(pid, update);
        res.send({status: "success", payload: result});
    }catch(error){
        res.status(500).send({status: "error", message: error.message});
    }
})


router.delete("/:pid", async (req, res) => {
    const {pid} = req.params;

    try{
        const result = await productManager.deleteProduct(pid);
        res.send({status: "success", payload: result});
    }catch(error){
        res.status(500).send({status: "error", message: error.message});
    }
})
export default router;
