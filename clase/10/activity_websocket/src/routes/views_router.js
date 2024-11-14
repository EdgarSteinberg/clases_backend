import {Router} from 'express';

const router = Router();

router.get("/", (req, res) => {

    res.render(
        "index",
        {
            styles: "index.css",
            title: "CoderHouse"
        }
    )
});

export default router;