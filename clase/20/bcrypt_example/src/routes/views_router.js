import {Router} from 'express';
import auth from '../middlewares/auth.js';
const router = Router();

router.get('/', auth, (req,res) => {
    res.render(
        'index',
        {
            title: "Coder House",
            style: 'index.css',
            user: req.session.user
        }
    )
});

router.get("/login", (req, res) => {
    res.render(
        'login',
        {
            title: 'Coder House',
            style: 'index.css',
            failLogin: req.session.failLogin ?? false
        }
    )
})

router.get("/register", (req, res) => {
    res.render(
        'register',
        {
            title: 'Coder House',
            style: 'index.css',
            failRegister: req.session.failRegister ?? false
        }
    )
});

router.get("/newPassword", (req, res) => {
    res.render(
        'newPassword',
        {
            title: 'Coder House',
            style: 'index.css',
            failRegister: req.session.failRegister ?? false
        }
    )
});

export default router;