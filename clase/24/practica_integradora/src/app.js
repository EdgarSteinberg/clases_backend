import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import { Server } from 'socket.io';
import passport from 'passport';
import cookieParser from 'cookie-parser';

import views_Router from './routes/views_router.js'
import product_Router from './routes/product_router.js';
import cart_router from './routes/cart_router.js';
import user_router from './routes/user_router.js'
import message_router from './routes/message_router.js';
import websocket from './websocket.js';
import __dirname from './utils/constantsUtil.js';
import initializatePassport from './config/passportConfig.js';

import dotenv from 'dotenv';
dotenv.config();


const app = express();

const uri = process.env.MONGODB_URI;
mongoose.connect(uri);


app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/../views`);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../../public`));
app.use(cookieParser());

initializatePassport();
app.use(passport.initialize());


app.use("/", views_Router);
app.use("/api/products", product_Router);
app.use("/api/carts", cart_router);
app.use("/api/users", user_router);
app.use("/api/messages", message_router);

const PORT = 8080;
const httpServer = app.listen(PORT, () => {
    console.log(`Server start in port http://localhost:${PORT}`)
});

const io = new Server(httpServer);

websocket(io);