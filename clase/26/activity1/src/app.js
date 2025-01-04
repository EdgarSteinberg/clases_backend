import express from 'express';

import user_router from './router/user_router.js';
import toy_router from './router/toy_router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


app.use("/api/users",user_router );
app.use("/api/toys",toy_router );

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server in line PORT http://localhost:${PORT}`);
});
