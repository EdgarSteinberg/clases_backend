import { Router } from 'express';
import userModel from '../models/user_model.js';

import { create_hash } from '../utils/functionsUtils.js';
import { isValid_password } from '../utils/functionsUtils.js';

const router = Router();


router.post('/register', async (req, res) => {
  try {

    req.session.failRegister = false;

    if (!req.body.email || !req.body.password) {
      throw new Error("Register error");
    }

    const new_user = {
      first_name: req.body.first_name ?? "",
      last_name: req.body.last_name ?? "",
      email: req.body.email,
      age: req.body.age ?? "",
      password: create_hash(req.body.password)
    }
    await userModel.create(new_user);

    res.redirect("/login")

  } catch (error) {
    req.session.failRegister = true;
    res.redirect('/register')
  }
});

router.post("/login", async (req, res) => {
  try {
    req.session.failLogin = false;
    const result = await userModel.findOne({ email: req.body.email }).lean();
    if (!result) {
      req.session.failLogin = true;
      return res.redirect("/login");
    }

    if (!isValid_password(result, req.body.password)) {
      req.session.failLogin = true;
      return res.redirect("/login")
    }

    delete result.password;
    req.session.user = result;

    return res.redirect('/');

  } catch (e) {
    req.session.failLogin = true;
    return res.redirect("/login")
  }
});

router.post("/newPassword", async (req, res) => {
  try {
    req.session.failLogin = false;

    const user = await userModel.findOne({ email: req.body.email }).lean();
    if (!user) {
      req.session.failLogin = true;
      return res.redirect("/newPassword");
    }

    const new_password = create_hash(req.body.password);

    await userModel.updateOne(
      { email: req.body.email },  // Buscar por email
      { $set: { password: new_password } }  // Actualizar la contraseña
    );

    res.redirect("/login");
  } catch (error) {
    console.error("Error al restaurar la contraseña:", error);
    req.session.failLogin = true;
    return res.redirect("/newPassword");
  }
});



export default router;