import { Router } from 'express';

const router = Router();

const users = [];

router.get("/", async (req, res) => {
    res.send({ status: "success", payload: users });
});

router.post("/", async (req, res) => {
    const { name, email, course } = req.body;

    if (!name || !email || !course) {
        return res.status(400).send({ status: "error", error: "Faltan Datos" });
    }

    users.push({ name, email, course });

    res.status(201).send({ status: "success", message: "Usuario creado correctamente" });
});

export default router;
