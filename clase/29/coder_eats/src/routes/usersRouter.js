import { Router } from 'express';

import userController from '../controllers/usersContoller.js';
const { getUsers, getUsersById, saveUser } =userController;


const router = Router();

router.get("/", getUsers);
router.get("/:uid", getUsersById);
router.post("/", saveUser);

export default router;