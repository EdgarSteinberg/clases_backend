import express from 'express';
import userRouter from "./routes/user_router.js"

const app = express()

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

app.use('/api/users', userRouter);


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server en linea en http://localhost:${PORT}`);
});