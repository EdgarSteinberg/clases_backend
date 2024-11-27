import express from 'express';
import mongoose from 'mongoose';

import handlebars from 'express-handlebars';
import {Server} from 'socket.io';
import websocket from './websocket.js';
import __dirname from './util.js';  

import productRouter from './routes/productRouter.js';
import cartRouter from './routes/cartRouter.js';
import viewsRouter from './routes/viewsRouter.js';


const app = express();

const uri ="mongodb+srv://steinberg2024:cai2024@cluster0.cl7spkj.mongodb.net/ecommerce_15?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri)

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