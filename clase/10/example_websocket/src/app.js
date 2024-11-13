import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './dirname.js';
import views_router from './routes/views_router.js';
import { Server } from 'socket.io';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../public`));

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set('view engine', "handlebars");

app.use("/", views_router);

const PORT = 8080;
const httpServer = app.listen(PORT, () => {
    console.log(`Server activo en http://localhost:${PORT}`);
});

const socketServer = new Server(httpServer);

socketServer.on('connection', socket => {
    console.log("Nuevo Cliente Conectado ==>", socket.id);

    socket.on('message', data => {
        console.log(data)
    });

    socket.emit('evento para socket individual', 'solo socket')


    socket.broadcast.emit('evento para todos menos al socket actual', 'este evento lo veran todos los sockets conectados menos el socket actual desde el que se envio el mensaje')


    socketServer.emit('evento para todos', 'todos los socket')
})