import express from "express";


const app = express();

app.get('/', (req,res) => {
    res.send("Bienvenidos al index");
})

app.get('/saludo', (req,res) => {
    res.send("Hola a todos desde Express");
})


const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
})