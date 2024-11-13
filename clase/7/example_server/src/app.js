import express from "express"
import UserManager from "./UserManager.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const UM = new UserManager("./User.json");

app.get("/api/users", async (req, res) => {
    try {
        const result = await UM.getAllUser();
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.status(500).send({ status: "error", mensaje: "Error al buscar los usuarios" })
    }
});

app.post("/api/users", async (req, res) => {
    const { first_name, last_name, age, email } = req.body;
    if (!first_name || !last_name || !age || !email) {
        return res.status(400).send({ status: "error", mensaje: "Debes completar todos los campos" });
    }

    try {
        const result = await UM.createUser(first_name, last_name, age, email)
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.status(500).send({ status: "error", mensaje: "Error al crear los usuarios" })
    }
});

app.put("/api/users/:uid", async (req, res) => {
    const uid = req.params.uid
    try {
        const result = await UM.updateUser(uid,req.body);
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.status(500).send({ status: "error", mensaje: "Error al actualizar los usuarios" })
    }
});


app.delete("/api/users/:uid", async (req, res) => {
    const uid = req.params.uid
    try {
        const result = await UM.deleteUser(uid);
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.status(500).send({ status: "error", mensaje: "Error al eliminar los usuarios" })
    }
});




const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server on in http://localhost:${PORT}`);
});