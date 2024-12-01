import express from 'express';
import mongoose from 'mongoose';

import user_router from './routes/user_router.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


const uri = "mongodb://localhost:27017/class_16_users";

mongoose.connect(uri);

app.use("/api/users", user_router);

const PORT = 8080;

app.listen(PORT , () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
})