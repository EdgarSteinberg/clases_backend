import express from 'express';


const app = express();

const persona = {
    nombre: "Edgar",
    apellido: "Steinberg",
    edad: 34,
    correo: "estein@gmail.com"
}

app.get('/bienvenida', (req, res) => {
    res.send('<h1 style="color:blue;">Hello Word</h1>')
})

app.get('/usuario', (req,res) => {
    res.send(persona)
})


const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
})