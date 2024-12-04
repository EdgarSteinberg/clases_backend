import express from 'express';
import session from 'express-session';
import mongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars';

import __dirname from './utils/constantsUtils.js';
import users_router from './routes/users_router.js';
import views_router from './routes/views_router.js';

const app = express();

const uri = "mongodb://localhost:27017/clase_19";
mongoose.connect(uri);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(`${__dirname}/../../public`));


app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/../views`);
app.set('view engine', "handlebars");

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


app.use('/api/session', users_router);
app.use('/', views_router);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start server in port http://localhost:${PORT}`)
})