import { Router } from 'express';

const router = Router();



router.get('/getCookies', (req, res) => {
    res.send(req.cookies)

});

router.post("/setCookies", (req, res) => {
    const { email } = req.body
    res.cookie('user', email, { maxAge: 10000 }).redirect('/')
})
export default router;