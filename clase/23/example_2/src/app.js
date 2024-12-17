import express from 'express';
import User_router from './routes/user_router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const userRouter = new User_router();
app.use('/users', userRouter.getRouter());

const PORT = 8080;
app.listen(PORT , () => {
    console.log(`Server start in port http://localhost:${PORT}`);
});