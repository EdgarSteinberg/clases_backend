import { Router } from 'express';
import auth from '../middlewares/authMiddleware.js';
import logged from '../middlewares/loggedMiddleware.js';

const router = Router();


router.get("/", auth, async (req, res) => {
    res.render(
        'index',
        {
            title: "Clase 21",
            style: "index.css",
            user: req.session.user
        }
    )
});

router.get("/login", logged, async (req, res) => {
    res.render(
        'login',
        {
            title: "Clase 21",
            style: "index.css",
            loginFailed: req.session.loginFailed ?? false,
            registerSuccess: req.session.regiterSuccess ?? false
        }
    )
});


export default router