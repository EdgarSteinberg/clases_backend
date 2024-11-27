import express from 'express';

import handlebars from 'express-handlebars';
import {Server} from 'socket.io';
import websocket from './websocket.js';
import __dirname from './util.js';  

import productRouter from './routes/productRouter.js';
import cartRouter from './routes/cartRouter.js';
import viewsRouter from './routes/viewsRouter.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));


app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set('view engine', "handlebars");

app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/products", viewsRouter);


const PORT = 8080;
const httpServer = app.listen(PORT, () => {
    console.log(`Server start in port http://localhost:${PORT}`)
});

const io = new Server(httpServer);

websocket(io);