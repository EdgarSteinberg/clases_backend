import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", (req,res) => {
    res.send({status: "success", message: "Todo Legal!"});
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server start in port http://localhost:${PORT}`)
});