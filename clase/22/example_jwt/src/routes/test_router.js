import {Router} from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(401).send({ status: 'Unauthorized', message: 'Email and password are required.' });
    }

    const token = jwt.sign({ email, password }, 'CoderSecretPass', { expiresIn: '1h' });

    res.send({ status: 'Success', token });
});

export default router;