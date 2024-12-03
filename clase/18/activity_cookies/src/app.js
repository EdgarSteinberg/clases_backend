import express from 'express';
import cookies_parser from 'cookie-parser';
import handlebars from 'express-handlebars';

import __dirname from './utils.js'
import cookies_router from './routes/cookies_router.js';
import views_router from './routes/views_router.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(`${__dirname}/../public`));

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set('view engine', "handlebars");


app.use(cookies_parser("CoderPass2024"));


app.use('/', views_router);
app.use('/api/cookies', cookies_router);



const PORT = 8080;
app.listen(PORT , () => {
    console.log(`Start server in port http://localhost:${PORT}`)
})