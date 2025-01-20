import express from 'express';
import userRouter from './router/userRouter.js'

const app = express();

app.use("/api/users", userRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server start in http://localhost:${PORT}`)
})