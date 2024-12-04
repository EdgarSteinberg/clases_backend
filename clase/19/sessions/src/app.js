import express from 'express';
import session from 'express-session';
import mongoStore from 'connect-mongo';

import session_router from './routes/session_router.js';


const app = express();


app.use(session(
    {
        store: mongoStore.create({
            mongoUrl: "mongodb://localhost:27017/clase_19",
            mongoOptions: { useUnifiedTopology: true },
            ttl: 15
        }),
        secret: "secretPhrase",
        resave: true,
        saveUninitialized: true
    }
));

app.use('/api/session', session_router);


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start server in port http://localhost:${PORT}`)
})