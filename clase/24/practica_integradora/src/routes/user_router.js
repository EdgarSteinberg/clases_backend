import { Router } from 'express';
import UserManager from '../models/dao/userManager.js';
import passport from 'passport';

const userManager = new UserManager();

const router = Router();

router.post("/register", async (req, res) => {
    try {
        const result = await userManager.register(req.body);
        res.send({ status: "error", payload: result });
    } catch (error) {
        res.status(400).send({ status: "error", message: error.message })
    }
});


router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ status: "error", message: "Email y contraseña son requeridos." });
    }

    try {
        const token = await userManager.login(email, password);
        res.cookie("auth", token, { maxAge: 60 * 60 * 1000 }).send({ status: "success", token });
    } catch (error) {
        res.status(400).send({ status: "error", message: error.message });
    }
});

router.get("/current", passport.authenticate("jwt", { session: false }), async (req, res) => {
    res.send({ user: req.user })
});


const isAdmin = (req, res, next) => {
    if (req.user.role === "admin") return next();

    res.status(403).send({ status: "error", message: "Unauthorized" })
}

router.get("/:uid", passport.authenticate("jwt", { session: false }), isAdmin, async (req, res) => {
    const { uid } = req.params;
    try {
        const result = await userManager.getUserById(uid);
        res.send({ status: "Succes", payload: result });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
});

router.get("/", async (req, res, next) => {
    try {
        const result = await userManager.getAllUsers();
        res.send({ status: "Succes", payload: result });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
})

export default router;