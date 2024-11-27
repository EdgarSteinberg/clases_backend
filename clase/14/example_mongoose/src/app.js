import express from 'express';
import routerUsers from './routes/userRouter.js'
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', routerUsers);


const conexion = async () => {
    try {
        // await mongoose.connect("mongodb://127.0.0.1:27017", {dbName: "usuarios"});
        await mongoose.connect("mongodb+srv://steinberg2024:cai2024@cluster0.cl7spkj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { dbName: "usuarios" })
        console.log("Conectado a las bbdd remota mongoDB ATLAS")
    } catch (error) {
        console.log("Fallo conexion")
    }
}
conexion();


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start server in http://localhost:${PORT}`);
})

