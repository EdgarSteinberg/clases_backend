import { Router } from 'express';

import CustomError from '../services/errors/customError.js';
import { generateUserErrorInfo,generateUidErrorInfo} from '../services/errors/info.js';
import { ErrorCodes } from '../services/errors/enums.js';

const router = Router();

const users = [];

// Obtener todos los usuarios
router.get("/", (req, res) => {
    res.send({ status: "success", payload: users });
});


router.get("/:uid", (req, res) => {
    const { uid } = req.params;

    if (typeof uid !== "string" || isNaN(Number(uid)) || Number(uid) <= 0) {
        CustomError.createError({
            name: `User con id: ${uid} no exist`,
            cause: generateUidErrorInfo(uid),
            message: "Error user no exist",
            code: ErrorCodes.IVALID_PARAMS
        });
    }

    const result = users.find(user => user.id == uid)
    res.send({ status: "succes", payload: result })
})

// Crear un nuevo usuario
router.post("/", (req, res) => {

    const { first_name, last_name, age, email } = req.body;

    // Validar los campos
    if (!first_name || !last_name || !email) {
        CustomError.createError({
            name: "User creation error",
            cause: generateUserErrorInfo({ first_name, last_name, age, email }),
            message: "Error trying in create User",
            code: ErrorCodes.INVALID_TYPES_ERROR
        });
    }

    // Generar ID dinámico
    const getId = () => (users.length > 0 ? users[users.length - 1].id + 1 : 1);

    const newUser = { id: getId(), first_name, last_name, age, email };

    users.push(newUser);

    res.send({ status: "success", payload: newUser });

});

export default router;
