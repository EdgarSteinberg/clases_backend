import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set('view engine', "handlebars");

const users = [
    {nombre: "Edgar", apellido: "Steiberg", edad: 34, correo: "test1@gmail.com", telefono: 1165724140},
    {nombre: "Edgar", apellido: "Stein", edad: 34, correo: "test2@gmail.com", telefono: 1165724140},
    {nombre: "Edgardo", apellido: "Steiberg", edad: 34, correo: "test3@gmail.com", telefono: 1165724140},
    {nombre: "EdgarBernardo", apellido: "Steiberg", edad: 34, correo: "test4@gmail.com", telefono: 1165724140},
    {nombre: "Bernardo", apellido: "Steiberg", edad: 34, correo: "test5@gmail.com", telefono: 1165724140},
];


app.get("/", (req,res) => {
    const nombreRandom = Math.floor(Math.random() * users.length);
    const randomUser = users[nombreRandom];
    //const name = req.query.name ?? "Usuario";
   
    res.render(
        "index",
        {
          nombre: randomUser.nombre,
          apellido: randomUser.apellido,
          edad: randomUser.edad,
          correo: randomUser.correo,
          telefono: randomUser.telefono
        }
    )
});


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server activo en http://localhost:${PORT}`)
});