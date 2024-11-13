import {Router} from 'express';
import { uploader } from '../utils.js';
const router = Router();


const users = [];

router.get("/", (req,res) => {
    res.send(users)
});

router.post("/" ,uploader.single("profile" ), (req,res) => {
    if(!req.file){
        return res.status(400).send({error: "Falta la imagen"});
    }

    const {name, email,course} = req.body;

    if(!name || !email || !course) return res.status(400).send({error: "Faltan campos"});

    const profile = req.file.path;

    users.push({name,email,course, profile})

    res.status(201).send({message: "Usuario Creado Correctamente"})
});

export default router;