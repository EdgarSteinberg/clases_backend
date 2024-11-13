import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './dirname.js';

import UserManager from './UserManager.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set('view engine', "handlebars");

const UM = new UserManager();

app.get("/api/users", async (req, res) => {
    try {
        const users = await UM.getAllUsers();
        res.send(users);
    } catch (error) {
        res.status(500).send({ status: 'error', error: "Error al obtener usuarios" });
    }
});

app.post("/api/users", async (req, res) => {
    const { first_name, last_name, age, course } = req.body;
    try {
        const result = await UM.createUser({ first_name, last_name, age, course });
        res.send({ status: 'success', payload: result });
    } catch (error) {
        res.status(400).send({ status: 'error', error: "Error al crear el usuario" });
    }
});

app.get("/", (req, res) => {
    res.render(
        "index",
        {
            title: "CoderHouse"
        }
    )

})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server activo en http://localhost:${PORT}`);
});
