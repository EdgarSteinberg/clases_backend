import express from 'express';
import handlebars from 'express-handlebars';
import cookie_parser from 'cookie-parser';

import __dirname from './utils/constantsUtil.js';
import view_router from './routes/views_router.js';
import user_router from './routes/user_router.js';
import passport from 'passport';
import initializatePassport from './config/passport_config.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(`${__dirname}/../../public`));
app.use(cookie_parser());

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/../views`);
app.set("view engine", "handlebars");

// Passport
initializatePassport();
app.use(passport.initialize());

app.use('/', view_router);
app.use('/api/user', user_router)


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server start in port http://localhost:${PORT}`)
})