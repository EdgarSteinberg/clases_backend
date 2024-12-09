import { Router } from 'express';
import passport from 'passport';
import local from 'passport-local';

const router = Router();
const localStrategy = local.Strategy;


router.post("/register", passport.authenticate("register", { failureRedirect: "/api/session/failRegister" }),
    async (req, res) => {
        res.send({ status: 'success', message: "User Registered" })
    });


router.get("/failRegister", async (req, res) => {
    res.status(400).send({ status: "error", message: "Failed register" })
})

router.post("/login", passport.authenticate("login", { failureRedirect: "/api/session/failLogin" }),
    async (req, res) => {
        if(!req.user){
            return res.status(401).send({status: "error", message: "Error Login"})
        }

        req.session.user = {
            first_name: req.user.first_name,
            last_nme: req.user.last_name,
            email: req.user.email,
            age: req.user.age
        }

        res.send({ status: 'success', payload: req.user })
    });


router.get("/failLogin", async (req, res) => {
    res.status(400).send({ status: "error", message: "Failed login" })
})

export default router;