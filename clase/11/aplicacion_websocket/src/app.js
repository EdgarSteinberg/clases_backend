import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io'

import __dirname from './utils.js';
import viewsRouter from './routes/views_router.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../public`));


app.engine("handlebars", handlebars.engine())
app.set("views", `${__dirname}/views`)
app.set("view engine", "handlebars");


app.use("/", viewsRouter);

const PORT = 8080;

const httpServer = app.listen(PORT, () => {
    console.log(`Server en linea en http://localhost:${PORT}`)
})

let messages = [];

const io = new Server(httpServer);

io.on("connection", socket => {
    console.log("Server conectado", socket.id);

    socket.on("message" , data => {
        messages.push(data)

        io.emit("messagesChat", messages)
    })

    socket.on("UserConnect", data =>{
        socket.emit("messagesChat", messages)
        socket.broadcast.emit("newUser", data)
    })
})