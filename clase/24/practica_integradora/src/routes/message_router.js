import { Router } from "express";
import ChatManager from "../models/dao/chatManager.js";

const chatManager = new ChatManager();
const router = Router();

router.get("/", async (req, res) => {
    try {
        const result = await chatManager.getAllMessages();
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
});

router.post("/", async (req, res) => {
    const { user, message } = req.body;

    if (!user || !message) {
        return res.status(400).send({
            status: "error",
            message: "Usuario y mensaje son requeridos."
        });
    }

    try {
        const result = await chatManager.createMessage({ user, message });
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
});

export default router;
