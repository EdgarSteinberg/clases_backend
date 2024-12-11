import {Router} from 'express';
import auth from '../middlewares/auth.js';

const router = Router();


router.get('/', (req, res) => {
    res.render(
        'login',
        {
            style : 'index.css',
            title: "Login",
            script: "index.js"
        }
    )
});


router.get('/private',auth, (req, res) => {
    res.render(
        'index',
        {
            style : 'index.css',
            title: "Login",
            script: "index.js",
            user : {
                first_name : "Edgar",
                last_name : "Stein",
                email: req.user.email
            }
        }
    )
});

export default router;