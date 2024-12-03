import { Router } from 'express';

const router = Router();


router.get('/setCookies', (req, res) => {
    res.cookie("CoderCookie", "Esta es una cookie Full Power", { maxAge: 200000 }).send("Se guardo la cookie correctamente!");
});

router.get('/getCookie', (req, res) => {
    console.log(req.cookies)
    res.send({ cookies: req.cookies })
});

router.get('/deleteCookie', (req, res) => {
    res.clearCookie("CoderCookie").send(`Se elimino la cookie llamada "CoderCookie`);
});



router.get('/signed/setCookies', (req, res) => {
    res.cookie("CoderCookie", "Esta es una cookie firmada!", { maxAge: 200000, signed: true }).send("Se guardo la cookie correctamente!");
});

router.get('/signed/getCookie', (req, res) => {
    console.log(req.signedCookies)
    res.send({ signedCookies: req.signedCookies })
});

export default router;