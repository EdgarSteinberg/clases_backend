import {Router} from 'express';

const router = Router();


router.get('/', (req,res) => {
    res.render(
        "index",
        {
            title: "coderChat",
            style: "index.css"
        }
    )
});

export default router