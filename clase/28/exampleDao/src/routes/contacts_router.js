import { Router } from 'express';
import ContactController from '../controllers/contactsControllers.js';

const contactService = new ContactController();
const router = Router();

// Obtener todos los contactos
router.get("/", async (req, res) => {
    try {
        const result = await contactService.getAll();
        res.status(200).send({ status: 'success', payload: result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
});

// Crear un nuevo contacto
router.post("/", async (req, res) => {
    const { first_name, last_name, phone } = req.body;

    // Validación básica del cuerpo
    if (!first_name || !last_name || !phone) {
        return res.status(400).send({
            status: 'error',
            message: 'Faltan campos obligatorios: first_name, last_name, phone'
        });
    }

    try {
        const result = await contactService.create({ first_name, last_name, phone });
        res.status(201).send({ status: 'success', payload: result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
});

router.put("/:cid", async (req,res) => {
    const {cid} = req.params;
    const update = req.body;

    try {
        const result = await contactService.update(update, cid);
        res.status(200).send({ status: "success", payload: result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
})

router.delete("/:cid", async (req,res) => {
    const {cid} = req.params;

    try {
        const result = await contactService.delete(cid);
        res.status(200).send({ status: "success", payload: result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
})

export default router;
