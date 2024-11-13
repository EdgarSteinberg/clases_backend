import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));

const usuarios = [
    { id: "1", nombre: "Dalia", apellido: "Gomez", genero: "F" },
    { id: "2", nombre: "Myra", apellido: "Flores", genero: "F" },
    { id: "3", nombre: "Armando", apellido: "Mendoza", genero: "M" },
    { id: "4", nombre: "Dalio", apellido: "Gomez", genero: "F" },
    { id: "5", nombre: "Herminio", apellido: "Fuentes", genero: "M" },
    { id: "6", nombre: "Juan", apellido: "Zepeda", genero: "M" },

]

app.get('/', (req, res) => {
    const genero = req.query.genero;

    if (!genero || (genero !== "M" && genero !== "F")) {
        res.send(usuarios)
        return;
    }

    let usuariosFiltrados = usuarios.filter(usuarios => usuarios.genero === genero);

    res.send({ usuarios: usuariosFiltrados })
})

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});