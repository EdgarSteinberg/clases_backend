import { Router } from 'express';
import userModel from '../models/userModel.js';

const router = Router();


router.get('/', async (req, res) => {
    const user = await userModel.find();
    res.status(201).send({ status: 'success', payload: user });
});

router.post('/', async (req, res) => {
    const { first_name, last_name, email } = req.body;

    try {
        const resultado = await userModel.create({ first_name, last_name, email });
        res.status(201).send({ status: 'success', payload: resultado });
    } catch (error) {
        res.status(400).send({ status: 'error' });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const update = req.body;
    try {
        const resultado = await userModel.updateOne({ _id: id }, { $set: update });
        res.status(200).send({ status: 'success', payload: resultado });

    } catch (error) {
        res.status(500).send({ status: 'error', message: 'Error al actualizar el usuario', error });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const resultado = await userModel.deleteOne({ _id: id });
        res.send({ status: 'success', payload: resultado });
    } catch (error) {
        res.status(500).send({ status: 'error', message: "Eror al eliminar el usuario" });
    }
});

export default router;