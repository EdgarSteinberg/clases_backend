import express from 'express';
import session from 'express-session';
import mongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import passport from 'passport';
import initializePassport from './config/passport_config.js';

import __dirname from './utils/constantsUtils.js';
import users_router from './routes/user_router.js';


const app = express();

const uri = "mongodb://localhost:27017/clase_20";
mongoose.connect(uri);

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(session(
    {
        store: mongoStore.create({
            mongoUrl:uri,
            ttl: 20
        }),
        secret: "secretPhrase",
        resave: true,
        saveUninitialized: true
    }
));

initializePassport();
app.use(passport.initialize());
app.use(passport.session());


app.use('/api/session', users_router);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start server in port http://localhost:${PORT}`)
})