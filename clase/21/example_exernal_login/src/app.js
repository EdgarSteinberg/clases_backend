import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import mongoStore from 'connect-mongo';
import handlebars from 'express-handlebars';
import passport from 'passport';


import sessionsRouter from './routes/sessions_router.js';
import viewsRouter from './routes/views_router.js';
import __dirname from './utils/constantsUtil.js';
import initializatePassport from './config/passport_config.js'; // aca puede tener el error porq es initializatePassport

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/../views`);
app.set('view engine', 'handlebars');

const uri = 'mongodb://127.0.0.1:27017/clase_21';
mongoose.connect(uri);

//Session
app.use(session(
    {
        store: mongoStore.create({
            mongoUrl: uri,
            ttl:300
        }),
        secret: 'secretPharse',
        resave: false,
        saveUninitialized: false
    }
));

initializatePassport();
app.use(passport.initialize());
app.use(passport.session());


app.use('/', viewsRouter);
app.use('/api/sessions', sessionsRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Star Server in port http://localhost:${PORT}`)
});