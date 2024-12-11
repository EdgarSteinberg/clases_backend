import express from 'express';
import handlebars from 'express-handlebars';

import __dirname from './utils/constantsUtil.js';

import views_router from './routes/views_router.js';
import test_router from './routes/test_router.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(`${__dirname}/../../public`));


app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/../views`);
app.set("view engine", "handlebars")


app.use("/", views_router);
app.use('/api/test', test_router);

const PORT = 8080;

app.listen(PORT , () => {
    console.log(`Server start in port http://localhost:${PORT}`)
})