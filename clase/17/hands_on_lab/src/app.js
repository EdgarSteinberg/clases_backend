import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';

import __dirname from './utils.js';
import viewsRouter from './routes/views_router.js'



mongoose.connect("mongodb://localhost:27017/clase_17_agregations")
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(`${__dirname}/../public`));

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set('view engine', "handlebars");


app.use("/", viewsRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server activo en http://localhost:${PORT}`)
});