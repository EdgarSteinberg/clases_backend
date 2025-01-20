import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import usersRouter from './routes/usersRouter.js'
import ordersRouter from './routes/ordersRouter.js'
import businessRouter from './routes/businessRouter.js'

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/coder_eats_2025");

app.use(cors({
    origin: "http://localhost:5500",
    methods: ["GET", "POST", "PUT"]
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/users", usersRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/business", businessRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start server in http://localhost:${PORT}`)
})

