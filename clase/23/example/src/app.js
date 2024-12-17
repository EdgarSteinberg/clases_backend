import express from 'express';
import test_router from './routes/test_router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/test", test_router);

const PORT = 8080;

app.listen(PORT , () => {
    console.log(`server start in port http://localhost:${PORT}`);
});