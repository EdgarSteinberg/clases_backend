import express from 'express';
import session from 'express-session';

import session_router from './routes/session_router.js';


const app = express();

app.use(express.urlencoded({ extended: true })); // Para formularios
app.use(express.json()); // Para JSON
app.use(session(
    {
        secret: "secretPhrase",
        resave: true,
        saveUninitialized: true
    }
))
app.use('/api/session', session_router);



const PORT = 8080;
app.listen(PORT , () => {
    console.log(`Start server in port http://localhost:${PORT}`)
})