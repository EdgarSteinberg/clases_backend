import { Router } from 'express';
import UserController from '../controllers/user_controller.js';

const router = Router();
const userController = new UserController();

router.get("/", async (req, res) => {
    try {
        const result = await userController.getAllUser();
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.status(403).send({ status: "error", message: error.message })
    }
});

router.get("/:uid", async (req, res) => {
    const { uid } = req.params;
    if (!uid) {
        return res.status(400).send({ status: "error", message: "Falta el parámetro 'uid'" });
    }
    try{
        const result = await userController.getUserById(uid);
        res.send({ status: "success", payload: result })
    }catch (error) {
        res.status(500).send({ status: "error", message: error.message })
    }
});


router.post("/", async (req,res) => {
    const {first_name, last_name, email} = req.body;

    try{
        const result = await userController.createUser({first_name, last_name, email});
        res.send({ status: "success", payload: result })
    }catch (error) {
        res.status(403).send({ status: "error", message: error.message })
    }
});

export default router;
