import express from 'express';
import cookies_parser from 'cookie-parser';


import cookies_router from './routes/cookies_router.js';

const app = express();


app.use(cookies_parser("CoderPass2024"));


app.use('/api/cookies', cookies_router);



const PORT = 8080;
app.listen(PORT , () => {
    console.log(`Start server in port http://localhost:${PORT}`)
})