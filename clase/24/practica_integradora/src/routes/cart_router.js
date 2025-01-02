import {Router} from 'express';
import CartManager from '../models/dao/cartManager.js';

const cartManager = new CartManager();

const router = Router();

router.get("/", async (req,res) => {
    try{
        const result = await cartManager.getAllCarts();
        res.send({status: "success", payload: result});
    }catch(error){
        res.status(500).send({status: "error", message: error.message});
    }
});

router.get("/:cid", async (req,res) => {
    const {cid} = req.params;

    try{
        const result = await cartManager.getCartById(cid);
        res.send({status: "success", payload: result});
    }catch(error){
        res.status(500).send({status: "error", message: error.message});
    }
});


router.post("/", async (req,res) => {
    try{
        const result = await cartManager.createCart();
        res.send({status: "success", payload: result});
    }catch(error){
        res.status(500).send({status: "error", message: error.message});
    }
})

export default router;