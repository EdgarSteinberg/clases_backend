import {Router} from 'express';

const router = Router();

const pets = [];


router.get("/", async (req, res) => {
    res.send(pets)
});

router.post("/", async (req,res) => {
    const {name, species} = req.body;

    if(!name || !species) return res.status(400).send({status:"error", error: "Faltan Datos"});

    pets.push({name,species});

    res.status(201).send({message: "Mascota creado correctamente"});
});

export default router;