import express from 'express';


const app = express();

const usuarios = [
    {id:"1", nombre:"Edgar",apellido: "Steinberg", edad:34},
    {id:"2", nombre:"Natalia",apellido: "Cardozo", edad:23},
    {id:"3", nombre:"Roberto",apellido: "Gomez", edad:30}
]

app.get('/', (req, res) => {
    res.send(usuarios)
})

app.get('/:id_usuario', (req,res) => {
    let id_usuario = req.params.id_usuario;

    let usuario = usuarios.find(user => user.id == id_usuario);

    if(!usuario) {
        res.send({error: "Usuario no encontado"});

        return;
    }

    res.send({usuario})    
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});