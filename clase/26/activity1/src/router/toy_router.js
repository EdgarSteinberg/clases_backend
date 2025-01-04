import { Router } from 'express';
import ToyController from '../controllers/toy_controller.js';

const router = Router();
const toyController = new ToyController();

// Obtener todos los juguetes
router.get("/", async (req, res) => {
    try {
        const result = await toyController.getAllToys();
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
});

// Obtener un juguete por ID
router.get("/:tid", async (req, res) => {
    const { tid } = req.params;

    if (!tid) {
        // Responder directamente si falta el parámetro
        return res.status(400).send({ status: "error", message: "El parámetro 'tid' es requerido." });
    }

    try {
        const result = await toyController.getToyById(tid);

        if (!result) {
            // Si no se encuentra el juguete, devolver un error 404
            return res.status(404).send({ status: "error", message: `No se encontró un juguete con el ID ${tid}` });
        }

        res.send({ status: "success", payload: result });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
});

// Crear un nuevo juguete
router.post("/", async (req, res) => {
    const { name, description, creaton_user } = req.body;

    if (!name || !description || !creaton_user) {
        // Responder con un error si faltan campos obligatorios
        return res.status(400).send({ status: "error", message: "Faltan campos obligatorios: 'name', 'description' y 'creaton_user'" });
    }

    try {
        const result = await toyController.createToy({ name, description, creaton_user });
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
});

export default router;
