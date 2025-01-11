import express from 'express';

import contacts_router from './routes/contacts_router.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api/contacts", contacts_router);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start port in http://localhost:${PORT}`);
});